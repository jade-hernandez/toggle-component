import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const toggleVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2",
  {
    variants: {

      size: {
        sm: "h-5 w-9", // 20px height, 36px width
        md: "h-6 w-11", // 24px height, 44px width
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const thumbVariants = cva(
  "inline-block transform rounded-full bg-white transition-transform shadow-sm",
  {
    variants: {
      size: {
        sm: ["h-3.5 w-3.5", "translate-x-0.5 data-[checked=true]:translate-x-5"],
        md: ["h-5 w-5", "translate-x-0.5 data-[checked=true]:translate-x-5"],
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export interface ToggleSwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof toggleVariants> {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>((props, ref) => {
  const { checked = false,
    onCheckedChange,
    disabled = false,
    size,
    className,
    ...rest } = props;


  const handleToggle = () => {
    if (!disabled) {
      onCheckedChange?.(!checked);
    }
  };

  return (
    <button
      ref={ref}
      role="switch"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      disabled={disabled}
      onClick={handleToggle}
      className={cn(
        toggleVariants({ size }),
        // Base/default states
        checked ? "bg-indigo-700" : "bg-gray-200",

        // Hover states
        checked ? "hover:bg-indigo-800" : "hover:bg-gray-300",

        // Focus states
        checked
          ? "focus:bg-indigo-800 focus:border focus:border-indigo-600 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]"
          : "focus:bg-gray-300 focus:border focus:border-gray-400 focus:shadow-[0_0px_0px_4px_rgba(157,164,174,0.20)]",

        // Disabled state
        disabled
          ? checked
            ? "disabled:cursor-not-allowed disabled:opacity-50"
            : "disabled:cursor-not-allowed disabled:bg-gray-100"
          : "cursor-pointer",

        className
      )}
      {...rest}
    >
      <span
        data-checked={checked}
        className={cn(thumbVariants({ size }))}
      />
    </button>
  );
});

ToggleSwitch.displayName = "ToggleSwitch";

export { ToggleSwitch, toggleVariants };