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
        <div className="max-w-7xl mx-auto px-0 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-foreground">
                Nikmati kemudahan dalam pengajuan klaim, cek status klaim dan polis Anda melalui{" "}
                <span className="text-secondary">Portal Klaim</span> atau chat dengan{" "}
                <span className="text-secondary">Poli</span>.
              </h1>

              <FeatureSection />
            </div>

            {/* Right Login Form */}
            <div className="flex justify-center lg:justify-end">
              <LoginForm />
            </div>
          </div>

          {/* Illustration Section */}
          <div className="mt-16">
            <img
              src={mrtIllustration}
              alt="MRT Jakarta Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
