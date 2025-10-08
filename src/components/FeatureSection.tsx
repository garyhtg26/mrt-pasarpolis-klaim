import { LayoutDashboard, Globe2, ShieldCheck } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Satu Dashboard",
      subtitle: "untuk Semua",
    },
    {
      icon: Globe2,
      title: "Serba",
      subtitle: "Terdigitalisasi",
    },
    {
      icon: ShieldCheck,
      title: "Keamanan",
      subtitle: "Terjamin",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 md:gap-12 justify-start items-center mt-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="bg-muted p-3 rounded-lg">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {feature.title}
            </p>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {feature.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
