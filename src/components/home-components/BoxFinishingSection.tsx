"use client";
import Titles from "../Titles";
import Container from "../Container";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define the Effect type
interface Effect {
  id: number;
  title: string;
  image: string;
  spanClass: string;
  description: string;
}

const BoxFinishingSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeEffect, setActiveEffect] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    if (!currentRef) return;

    setIsMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const effects: Effect[] = [
    {
      id: 1,
      title: "Holographic Foiling",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-4 lg:col-span-6 md:row-span-2",
      description:
        "Create mesmerizing rainbow effects that change with viewing angle for a truly eye-catching presentation.",
    },
    {
      id: 2,
      title: "Gold Foiling",
      image:
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-2 lg:col-span-3",
      description:
        "Add a touch of luxury and elegance with premium gold foil that elevates your brand perception.",
    },
    {
      id: 3,
      title: "Embossing",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-2 lg:col-span-3 md:row-span-2",
      description:
        "Create raised textures that add depth and a premium tactile experience to your packaging.",
    },
    {
      id: 4,
      title: "Silver Foiling",
      image:
        "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      spanClass: "md:col-span-2 lg:col-span-3",
      description:
        "Achieve a sleek, modern look with sophisticated silver foil that complements any design.",
    },
  ];

  return (
    <Container>
      <div
        ref={sectionRef}
        className="w-full flex flex-col items-center space-y-8 md:space-y-12 py-12"
      >
        <Titles
          title={"Premium Finishing"}
          subtitle={
            "Enhance your custom packaging with luxury finishes that add durability, elegance, and a lasting impression."
          }
        />

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
            {effects.map((effect, index) => (
              // <motion.div
              //   key={index}
              //   initial={{ opacity: 0, y: 30 }}
              //   whileInView={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.4, delay: index * 0.2 }}
              //   viewport={{ once: false, amount: 0.2 }}
              // >
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                onMouseEnter={() => setActiveEffect(effect.id)}
                onMouseLeave={() => setActiveEffect(null)}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group cursor-pointer ${effect.spanClass}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-all duration-500 z-15" />

                <Image
                  src={effect.image}
                  alt={effect.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-xl font-semibold drop-shadow-md">
                    {effect.title}
                  </h3>
                  <AnimatePresence>
                    {activeEffect === effect.id && (
                      <motion.p
                        className="text-sm mt-1 text-white/90 max-w-xs drop-shadow-md"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {effect.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              // </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: isMounted ? 1 : 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-md">
              Transform your packaging with our premium finishing techniques
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default BoxFinishingSection;
