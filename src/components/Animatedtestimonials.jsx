import { AnimatedTestimonials } from "./ui/Animatedtestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "CreatoUI has revolutionized our design process. The components are not only beautifully crafted but also easy to implement. Truly a game-changer for our projects.",
      name: "Sarah Chen",
      designation: "Product Manager at DevWorks",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The seamless integration of CreatoUI's components saved us countless hours in development. The quality and versatility of each element are unmatched.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSoft",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "CreatoUI has simplified our design workflow, enabling our team to focus more on the product's functionality. The design consistency is exceptional.",
      name: "Emily Watson",
      designation: "Operations Director at PixelForge",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "From the moment we implemented CreatoUI, our team was able to work more efficiently. The customization options are perfect for our diverse needs.",
      name: "James Kim",
      designation: "Engineering Lead at CodeSphere",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "CreatoUI's components are not only high-quality but also provide exceptional flexibility. They have helped our teams move faster while maintaining great design consistency.",
      name: "Lisa Thompson",
      designation: "VP of Technology at WebCraft",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold animate__animated animate__fadeInUp text-white">
          What Our Clients Say
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Discover how CreatoUI has transformed the way developers and designers create stunning user interfaces.
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
