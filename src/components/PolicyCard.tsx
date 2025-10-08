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
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9996 4H7.99988C5.79094 4 4 5.79094 4 7.99988V14.0447C4 23.8794 11.9878 27.0263 14.9297 27.8523C15.6296 28.0492 16.3696 28.0492 17.0706 27.8523C20.0115 27.0263 28.0002 23.8794 28.0002 14.0447V7.99988C27.9993 5.79094 26.2083 4 23.9994 4H15.9996Z" fill="#333333"/>
              <path d="M15.4996 4.98297H7.99985C6.3429 4.98297 4.99994 6.32593 4.99994 7.98288V13.7717C4.99994 22.5584 12.2877 25.2443 14.7196 25.8963C15.2306 26.0333 15.7676 26.0333 16.2786 25.8963C18.7105 25.2443 25.9983 22.5584 25.9983 13.7717V7.98288C25.9983 6.32593 24.6553 4.98297 22.9984 4.98297H15.4986H15.4996Z" fill="white"/>
              <path d="M14.7447 17.7775C14.4497 18.0725 13.9727 18.0725 13.6777 17.7775L10.7208 14.8126C10.4258 14.5176 10.4258 14.0387 10.7208 13.7427C11.0158 13.4477 11.4928 13.4477 11.7878 13.7427L14.7447 16.7076C15.0397 17.0026 15.0397 17.4816 14.7447 17.7775Z" fill="#333333"/>
              <path d="M13.7387 17.7776C13.4437 17.4826 13.4437 17.0036 13.7387 16.7076L19.2115 11.2208C19.5065 10.9258 19.9835 10.9258 20.2785 11.2208C20.5735 11.5157 20.5735 11.9947 20.2785 12.2907L14.8057 17.7776C14.5107 18.0725 14.0337 18.0725 13.7387 17.7776Z" fill="#333333"/>
          </svg>

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
