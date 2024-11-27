import React from "react"; 
import { ContainerScroll } from "./ui/Containerscrollanimation";
import { motion } from "framer-motion";  // Ensure framer-motion is imported for animations

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black text-white">
      <ContainerScroll
        titleComponent={
          <>
            <motion.h1
              className="text-4xl font-semibold text-white transition-all duration-300 ease-in-out hover:text-gray-200 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Build Stunning UIs with <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-teal-400 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 shadow-glow">
                CreatoUI Library
              </span>
            </motion.h1>
          </>
        }
      >
        <motion.img
          src={`https://uizard.io/blog/content/images/2023/06/shoutout-image-a.webp`} // You can replace this image URL if needed
          alt="CreatoUI Hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top transition-transform duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </ContainerScroll>
    </div>
  );
}
