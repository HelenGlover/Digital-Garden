import { cva } from "class-variance-authority";

export const baseButtonVariants = cva(
  "inline-flex items-center relative overflow-hidden transform-gpu transition-all duration-300 ease-default gap-2 px-8 py-4 font-semibold",
  {
    variants: {
      variant: {
        primary: "bg-mango-green-dark text-white shadow-[0_0.25rem_0.75rem_rgba(90,138,74,0.3)] hover:shadow-[0_0.5rem_1.5rem_rgba(90,138,74,0.5)] hover:bg-[#4a7a3a] active:shadow-[0_0.125rem_0.5rem_rgba(90,138,74,0.3)]",
        secondary: "bg-white text-mango-green-dark shadow-[0_0.25rem_1.0rem_rgba(255,255,255,0.3)] hover:shadow-[0_0.50rem_1.50rem_rgba(255,255,255,0.4)]",
        gold: "bg-mango-yellow shadow-[0_0.25rem_1.0rem_rgba(255,224,153,0.3)] hover:shadow-[0_0.50rem_1.50rem_rgba(255,224,153,0.4)] hover:bg-[#ffd966]",
        transparent: "bg-transparent border-2 text-mango-green-dark border-mango-green-dark/50 hover:bg-[rgba(255,255,255,0.1)] hover:border-mango-green-dark",
        ["transparent-secondary"]: "bg-transparent border-2 text-white border-white/50 hover:bg-[rgba(255,255,255,0.1)] hover:border-white",
        ["transparent-gold"]: "bg-transparent border-2 text-white border-2 border-mango-yellow shadow-[0_0.25rem_1.0rem_rgba(255,224,153,0.2)] hover:bg-[rgba(255,224,153,0.15)] hover:border-[#ffd966] hover:shadow-[0_0.50rem_1.50rem_rgba(255,224,153,0.3)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
