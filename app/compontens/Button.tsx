import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "light";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variants: Record<ButtonVariant, string> = {
  primary: "bg-black text-white",
  secondary: "border border-black/15 bg-white text-black",
  light: "bg-white text-black",
};

export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: LinkButtonProps | NativeButtonProps) {
  const classes = `rounded-md px-4 py-3 text-sm font-semibold shadow-sm ${variants[variant]} ${className}`;

  if (typeof props.href === "string") {
    const { href, ...linkProps } = props as LinkButtonProps;

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
