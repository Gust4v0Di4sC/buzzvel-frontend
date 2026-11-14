import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`${variants[variant]} ${className}`.trim()}
    />
  );
}
