import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
}

interface NativeButtonProps extends BaseProps {
  to?: never;
  href?: never;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-light focus-visible:ring-navy",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
  ghost:
    "bg-cream text-navy-dark hover:bg-cream-dark focus-visible:ring-navy",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("to" in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href) {
    const anchorProps = rest as AnchorButtonProps;
    return (
      <a
        href={anchorProps.href}
        target={anchorProps.target}
        rel={anchorProps.rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const nativeProps = rest as NativeButtonProps;
  return (
    <button
      type={nativeProps.type ?? "button"}
      onClick={nativeProps.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
