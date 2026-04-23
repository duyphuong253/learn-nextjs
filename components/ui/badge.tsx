import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "featured" | "new";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    "bg-gray-100 text-gray-700",

  featured:
    "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm",

  new:
    "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-sm",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        // base
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",

        // animation + feel
        "transition-all duration-200",

        // style theo variant
        badgeVariants[variant],

        className
      )}
      {...props}
    />
  );
}