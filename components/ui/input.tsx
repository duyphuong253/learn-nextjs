import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        // base
        "w-full h-10 px-4 text-sm rounded-xl border bg-white",

        // border + shadow
        "border-gray-200 shadow-sm",

        // placeholder
        "placeholder:text-gray-400",

        // focus
        "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent",

        // disabled
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // animation
        "transition-all duration-200",

        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };