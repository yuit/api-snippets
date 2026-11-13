import { Link } from "zudoku/components";
import { ArrowLeftRight, Coins, Globe, GlobeCode, type LucideIcon } from "zudoku/icons";
import { Badge } from "zudoku/ui/Badge";
import { Card, CardContent, CardHeader } from "zudoku/ui/Card";

type FspiopApiCardItem = {
  icon: LucideIcon;
  title: string;
  version: string;
  path: string;
  description: string;
  tags: string[];
};

const fspiopApis: FspiopApiCardItem[] = [
  {
    icon: ArrowLeftRight,
    title: "Open API for FSP Interoperability (FSPIOP)",
    version: "v1.1",
    path: "/api-fspiop-v1.1",
    description:
      "Asynchronous RESTful API for Financial Service Provider interoperability, enabling party lookup, quoting, and real-time clearing and settlement across a Mojaloop hub.",
    tags: ["Parties", "Quotes", "Transfers"],
  },
  {
    icon: Globe,
    title: "Open API for FSP Interoperability (FSPIOP)",
    version: "v2.0",
    path: "/api-fspiop-v2.0",
    description:
      "Extended FSPIOP specification adding foreign exchange (FX) quotes, FX transfers, FXP service discovery, and enhanced third-party authentication support.",
    tags: ["Parties", "Quotes", "Transfers", "FX"],
  },
  {
    icon: GlobeCode,
    title: "Open API for FSP Interoperability (ISO 20022)",
    version: "v2.0",
    path: "/api-fspiop-v2.0-iso20022",
    description:
      "ISO 20022 message version of the FSPIOP API for party lookup, quoting, transfers, and foreign exchange (FX) operations across a Mojaloop hub.",
    tags: ["Parties", "Quotes", "Transfers", "FX"],
  },
];

export const FspiopApiCatalog = () => {
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
      {fspiopApis.map((api) => {
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
