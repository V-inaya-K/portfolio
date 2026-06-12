import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";

export async function GET() {
  const pdf = await readFile(process.cwd() + "/public/resume.pdf");

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Vinayak-Shukla-Resume.pdf"'
    }
  });
}

