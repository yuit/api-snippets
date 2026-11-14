import { cn } from "zudoku";
import { Badge } from "zudoku/ui/Badge";
import { type ApiLifecycle, getApiLifecycle } from "./apiLifecycles";

const LIFECYCLE_STYLES: Record<
  ApiLifecycle,
  { label: string; badgeClass: string; dotClass: string }
> = {
  development: {
    label: "Development",
    badgeClass:
      "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300",
    dotClass: "bg-amber-500 dark:bg-amber-400",
  },
  staging: {
    label: "Staging",
    badgeClass:
      "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300",
    dotClass: "bg-blue-500 dark:bg-blue-400",
  },
  production: {
    label: "Production",
    badgeClass:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300",
    dotClass: "bg-emerald-500 dark:bg-emerald-400",
  },
};

export const LifecycleBadge = ({
  lifecycle,
  className,
}: {
  lifecycle?: ApiLifecycle;
  className?: string;
}) => {
  if (!lifecycle) return null;

  const { label, badgeClass, dotClass } = LIFECYCLE_STYLES[lifecycle];

  return (
    <Badge
      variant="outline"
      className={cn("gap-1.5 font-medium", badgeClass, className)}
    >
      <span
        aria-hidden="true"
        className={cn("size-1.5 shrink-0 rounded-full", dotClass)}
      />
      <span>{label}</span>
    </Badge>
  );
};

export const ApiLifecycleBanner = ({
  location,
}: {
  location: { pathname: string };
}) => {
  const lifecycle = getApiLifecycle(location.pathname);
  if (!lifecycle) return null;

  return (
    <div className="pt-6 -mb-3 flex items-center gap-2">
      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
        Lifecycle
      </span>
      <LifecycleBadge lifecycle={lifecycle} />
    </div>
  );
};
