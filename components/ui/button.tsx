import { cn } from "@/lib/utils";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";

type Variant = "default" | "secondary" | "ghost" | "outline";

type BaseProps = {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type Props = ButtonProps | AnchorProps;

const variantClasses: Record<Variant, string> = {
  default: "bg-foreground text-background hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
  outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground"
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base"
};

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

