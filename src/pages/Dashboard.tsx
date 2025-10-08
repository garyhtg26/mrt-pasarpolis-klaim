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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 🌟 Header fade in */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DashboardHeader onLogout={handleLogout} />
      </motion.div>

      <main className="flex-1 bg-gradient-to-b from-background to-muted">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div
              className="grid w-full max-w-md grid-cols-3 mb-10 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TabsList>
                <TabsTrigger value="all">Semua Polis</TabsTrigger>
                <TabsTrigger value="active">Polis Aktif</TabsTrigger>
                <TabsTrigger value="expired">Polis Kedaluwarsa</TabsTrigger>
              </TabsList>
            </motion.div>

            {/* ALL POLICIES */}
            <TabsContent value="all" className="space-y-10">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {policies.map((policy, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <PolicyCard {...policy} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="whitespace-nowrap flex items-center justify-between text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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

            {/* ACTIVE POLICIES */}
            <TabsContent value="active" className="space-y-10">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {policies.map((policy, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <PolicyCard {...policy} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* EXPIRED POLICIES */}
            <TabsContent value="expired" className="space-y-10">
              <motion.div
                className="text-center py-12 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Tidak ada polis yang kedaluwarsa
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>

      {/* Footer fade in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Dashboard;
