import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Developer-Centric",
      description:
        "CreatoUI is crafted with developers in mind, ensuring a seamless and efficient workflow.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Simple and Intuitive",
      description:
        "Designed for simplicity, CreatoUI allows you to create beautiful interfaces effortlessly.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Get access to premium components without the hefty price tag. No hidden fees, just simple pricing.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable 100% Uptime",
      description: "Our components are backed by a robust infrastructure with 100% uptime reliability.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Architecture",
      description:
        "CreatoUI supports multi-tenancy, enabling you to scale your app seamlessly with multiple users.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Always-On Support",
      description:
        "Our support team (AI-powered agents) is available 24/7 to ensure you get the help you need.",
      icon: <IconHelp />,
    },
    {
      title: "Risk-Free Trial",
      description:
        "Test CreatoUI without any risks. If you're not satisfied, we offer a money-back guarantee.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Comprehensive Component Library",
      description: "From buttons to modals, CreatoUI offers everything you need to build stunning UIs.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto bg-black text-white">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
