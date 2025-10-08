import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import PolicyCard from "@/components/PolicyCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const handleLogout = () => {
    navigate("/");
  };

  // Sample data
  const policies = [
    {
      policyType: "mrt-travel-protection",
      policyName: "MRT SafeTrip Premium 2W",
      policyId: "MRT-2019284340",
      category: "Personal Accident",
      policyHolder: "gary",
      expiryDate: "29 Sep 2025",
      status: "expiring" as const,
    },
    {
      policyType: "mrt-travel-protection",
      policyName: "MRT SafeTrip Premium 2W",
      policyId: "MRT-2004550413",
      category: "Personal Accident",
      policyHolder: "gary",
      expiryDate: "18 Sep 2025",
      status: "expiring" as const,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardHeader onLogout={handleLogout} />

      {/* 🌟 Bagian utama dibuat lebih luas */}
      <main className="flex-1 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-10 mx-auto">
              <TabsTrigger value="all">Semua Polis</TabsTrigger>
              <TabsTrigger value="active">Polis Aktif</TabsTrigger>
              <TabsTrigger value="expired">Polis Kedaluwarsa</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-10">
              {/* 🌟 Card section dibuat lebih padat dan responsif */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {policies.map((policy, index) => (
                  <PolicyCard key={index} {...policy} />
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <p>Menampilkan 1 / 1</p>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationLink isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TabsContent>

            <TabsContent value="active" className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {policies.map((policy, index) => (
                  <PolicyCard key={index} {...policy} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="expired" className="space-y-10">
              <div className="text-center py-12 text-muted-foreground">
                Tidak ada polis yang kedaluwarsa
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
