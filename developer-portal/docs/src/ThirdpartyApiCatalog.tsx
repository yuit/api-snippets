import { Link } from "zudoku/components";
import { BanknoteArrowUp, type LucideIcon, UserCheck, UserShield } from "zudoku/icons";
import { Badge } from "zudoku/ui/Badge";
import { Card, CardContent, CardHeader } from "zudoku/ui/Card";

type ThirdpartyApiCardItem = {
  icon: LucideIcon;
  title: string;
  version: string;
  path: string;
  description: string;
  tags: string[];
};

const thirdpartyApis: ThirdpartyApiCardItem[] = [
  {
    icon: UserShield,
    title: "Third-party Admin API",
    version: "v2.0",
    path: "/api-3ppa",
    description:
      "Allows PISPs and DFSPs to manage account discovery, account linking, consent requests, consents, authorizations, and verifications.",
    tags: ["Accounts", "Consents", "Authorizations"],
  },
  {
    icon: BanknoteArrowUp,
    title: "Third-party Payment Initiation API",
    version: "v2.0",
    path: "/api-3ppi",
    description:
      "Allows PISPs to initiate transaction requests and transfers on behalf of authenticated customers over a centralized Mojaloop hub.",
    tags: ["TransactionRequests", "Transfers"],
  },
];

export const ThirdpartyApiCatalog = () => {
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
      {thirdpartyApis.map((api) => {
        const Icon = api.icon;
        return (
          <Link key={api.path} to={api.path} className="group no-underline">
            <Card className="h-full transition-colors group-hover:border-primary/50">
              <CardHeader className="flex flex-row items-start gap-3">
                <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                  <Icon className="size-5" />
                </div>
                <div className="flex min-w-0 flex-1 items-start justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="font-semibold leading-tight">
                      {api.title}
                    </span>
                  </div>
                  <span className="text-muted-foreground bg-muted shrink-0 rounded-md px-2 py-0.5 text-xs font-medium">
                    {api.version}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {api.description}
                </p>
                <div className="border-t mt-3 pt-3 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {api.tags.map((tag) => (
                      <Badge key={tag} variant="muted" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
