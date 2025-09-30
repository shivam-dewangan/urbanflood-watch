import { cn } from "@/lib/utils";

type RiskLevel = "low" | "medium" | "high" | "critical";

interface RiskBadgeProps {
  level: RiskLevel;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const riskConfig = {
  low: {
    label: "Low Risk",
    className: "bg-risk-low/10 text-risk-low border-risk-low/20",
  },
  medium: {
    label: "Medium Risk",
    className: "bg-risk-medium/10 text-risk-medium border-risk-medium/20",
  },
  high: {
    label: "High Risk",
    className: "bg-risk-high/10 text-risk-high border-risk-high/20",
  },
  critical: {
    label: "Critical Risk",
    className: "bg-risk-critical/10 text-risk-critical border-risk-critical/20",
  },
};

const sizeConfig = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-2 text-base",
};

const RiskBadge = ({ level, size = "md", className }: RiskBadgeProps) => {
  const config = riskConfig[level];
  
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold border transition-smooth",
        config.className,
        sizeConfig[size],
        className
      )}
    >
      {config.label}
    </span>
  );
};

export default RiskBadge;
