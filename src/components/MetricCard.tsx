import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  gradient?: boolean;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  gradient = false 
}: MetricCardProps) {
  return (
    <div className={cn(
      "rounded-xl p-6 shadow-soft border border-border/50 transition-all duration-300 hover:shadow-medium hover:-translate-y-1",
      gradient ? "bg-gradient-card" : "bg-card"
    )}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-foreground">
            {value}
          </p>
          {change && (
            <p className={cn(
              "text-xs font-medium mt-2 flex items-center",
              changeType === "positive" && "text-accent",
              changeType === "negative" && "text-destructive",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          )}
        </div>
        <div className={cn(
          "rounded-full p-3 transition-colors duration-200",
          gradient 
            ? "bg-gradient-primary text-primary-foreground" 
            : "bg-primary/10 text-primary"
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}