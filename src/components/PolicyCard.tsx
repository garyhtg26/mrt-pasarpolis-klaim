import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface PolicyCardProps {
  policyType: string;
  policyName: string;
  policyId: string;
  category: string;
  policyHolder: string;
  expiryDate: string;
  status?: "active" | "expiring";
}

const PolicyCard = ({
  policyType,
  policyName,
  policyId,
  category,
  policyHolder,
  expiryDate,
  status = "active",
}: PolicyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 bg-muted rounded-lg">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{policyType}</p>
            <h3 className="font-semibold text-lg mb-2">{policyName}</h3>
            {status === "expiring" && (
              <Badge variant="secondary" className="mb-2">
                Polis Berakhir
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Polis ID</p>
            <p className="font-semibold">{policyId}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Kategori</p>
            <p className="font-semibold">{category}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Policy Holder</p>
            <p className="font-semibold">{policyHolder}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1">Berakhir</p>
            <p className="font-semibold">{expiryDate}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 text-xs">
            BUAT KLAIM
          </Button>
          <Button className="flex-1 text-xs">DETAIL</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyCard;
