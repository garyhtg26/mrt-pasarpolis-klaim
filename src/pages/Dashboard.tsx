import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

      <main className="flex-1 bg-gradient-to-b from-background to-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tabs filter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="justify-self-center mb-5"
            >
              <TabsList>
                <TabsTrigger value="all">Semua Polis</TabsTrigger>
                <TabsTrigger value="active">Polis Aktif</TabsTrigger>
                <TabsTrigger value="expired">Polis Kedaluwarsa</TabsTrigger>
              </TabsList>
            </motion.div>
            <TabsContent value="all" className="space-y-10">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {policies.map((policy, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <PolicyCard {...policy} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between text-sm text-muted-foreground whitespace-nowrap"
              >
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
              </motion.div>
            </TabsContent>

            <TabsContent value="active" className="space-y-10">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {policies.map((policy, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <PolicyCard {...policy} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="expired" className="space-y-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12 text-muted-foreground"
              >
                Tidak ada polis yang kedaluwarsa
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
