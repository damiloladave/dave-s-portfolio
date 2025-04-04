"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useState } from "react";

import { cn } from "@/lib/cn";
import {
  AppleHelloEnglishEffect
} from "@/registry/apple-hello-effect";

const layers = ["hello", "insert-word"] as const;

export function Hello() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextAnimation = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % layers.length);
    }, 500);
  }, []);

  return (
    <>
      <div
        className={cn(
          "absolute top-1/2 h-16 w-full -translate-y-1/2 border-y border-grid transition-all duration-500 sm:h-20",
          {
            "h-10 sm:h-16": ["hello"].includes(
              layers[currentIndex]
            ),
          }
        )}
      />

      <AnimatePresence mode="wait">
        <div
          key={`layer-${currentIndex}`}
          className="relative flex items-center justify-center text-black dark:text-white"
        >
          <motion.div
            className="h-full w-px bg-grid"
            layoutId="layout-grid-left"
            transition={{
              duration: 0.5,
            }}
          />

          {layers[currentIndex] === "hello" && (
            <AppleHelloEnglishEffect
              className="h-10 sm:h-16"
              exit={{ opacity: 0, scale: 0.8 }}
              onAnimationComplete={nextAnimation}
            />
          )}

          {layers[currentIndex] === "insert-word" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-4xl sm:text-3xl tracking-widest"
            >
              welcome..
            </motion.div>
          )}

          <motion.div
            className="h-full w-px bg-grid"
            layoutId="layout-grid-right"
            transition={{
              duration: 0.5,
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
}