"use client";

import { useEffect, useState } from "react";

import { useMediaQuery } from "@/hooks/use-media-query";

import { NAV_LINKS } from "../../config/nav";
import { Nav } from "./nav";

const itemIds = NAV_LINKS.map((link) => link.href?.split("#")[1]).filter(
  Boolean
);

export function NavScrollspy({ className }: { className?: string }) {
  const shouldObserve = useMediaQuery("(min-width: 40rem)"); // 640px
  const activeItemId = useActiveItem(itemIds, shouldObserve);

  return <Nav className={className} activeId={activeItemId} />;
}

function useActiveItem(itemIds: string[], enabled = true) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Create a map to store intersection ratios
    const intersectionRatios = new Map();
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Update the intersection ratios for each entry
        entries.forEach((entry) => {
          intersectionRatios.set(entry.target.id, entry.intersectionRatio);
          
          // If the element is leaving the viewport, remove it from the map
          if (!entry.isIntersecting) {
            intersectionRatios.delete(entry.target.id);
          }
        });
        
        // Find the element with the highest intersection ratio
        let maxRatio = 0;
        let maxId = null;
        
        intersectionRatios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });
        
        // Only update if we have a valid element with some visibility
        if (maxId && maxRatio > 0.1) {
          setActiveId(maxId);
        }
      },
      { 
        rootMargin: "-10% 0px -20% 0px", // Adjust these values based on your layout
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // Multiple thresholds for better accuracy
      }
    );

    // Observe all sections
    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [itemIds, enabled]);

  return activeId;
}