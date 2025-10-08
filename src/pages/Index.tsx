import { motion } from "framer-motion";
import Header from "@/components/Header";
import FeatureSection from "@/components/FeatureSection";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import mrtIllustration from "@/assets/mrt-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 🔹 Login Form (appears first on mobile) */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <LoginForm />
            </motion.div>

            {/* 🔹 Text + Feature Section */}
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-foreground leading-snug">
                Nikmati kemudahan dalam pengajuan klaim, cek status klaim dan polis Anda melalui{" "}
                <span className="text-secondary">Portal Klaim</span> atau chat dengan{" "}
                <span className="text-secondary">Poli</span>.
              </h1>

              <FeatureSection />
            </motion.div>
          </div>

          {/* 🔹 Illustration */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src={mrtIllustration}
              alt="MRT Jakarta Illustration"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
