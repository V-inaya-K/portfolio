import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";

type LeetCodeGraphQLResponse = {
  data?: {
    matchedUser?: {
      profile?: {
        ranking?: number;
      };
      submitStats?: {
        acSubmissionNum?: Array<{
          difficulty?: string;
          count?: number;
        }>;
      };
    };
    userContestRanking?: {
      rating?: number;
    };
  };
};

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(_request: Request, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "https://leetcode.com",
        referer: "https://leetcode.com"
      },
      body: JSON.stringify({
        query: `
          query userProfile($username: String!) {
            matchedUser(username: $username) {
              profile { ranking }
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
            userContestRanking(username: $username) {
              rating
            }
          }
        `,
        variables: { username }
      }),
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `LeetCode request failed with status ${response.status}` },
        { status: 502 }
      );
    }

    const payload = (await response.json()) as LeetCodeGraphQLResponse;
    const matchedUser = payload.data?.matchedUser;
    const contest = payload.data?.userContestRanking;
    const acStats = matchedUser?.submitStats?.acSubmissionNum ?? [];

    const readCount = (difficulty: string) =>
      Number(acStats.find((item) => item.difficulty === difficulty)?.count ?? 0);

    return NextResponse.json(
      {
        source: "live",
        stats: {
          rating: Number(matchedUser?.profile?.ranking ?? 0),
          problemsSolved: readCount("All"),
          contestRating: Number(contest?.rating ?? 0),
          easy: readCount("Easy"),
          medium: readCount("Medium"),
          hard: readCount("Hard"),
          profileUrl: `https://leetcode.com/u/${username}/`
        }
      },
      {
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  } catch {
    try {
      const cache = JSON.parse(await readFile(process.cwd() + "/data/leetcode-cache.json", "utf8")) as {
        source?: string;
        stats?: {
          rating: number;
          problemsSolved: number;
          contestRating: number;
          easy: number;
          medium: number;
          hard: number;
          profileUrl: string;
        };
      };

      if (cache.stats) {
        return NextResponse.json(
          {
            source: cache.source ?? "cache",
            stats: cache.stats
          },
          {
            headers: {
              "Cache-Control": "no-store"
            }
          }
        );
      }
    } catch {
      // Fall through to the error response below.
    }

    return NextResponse.json(
      { error: "Unable to load live LeetCode stats" },
      { status: 502 }
    );
  }
}
