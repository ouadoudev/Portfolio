"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export const InfiniteMovingIcons = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { icon: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "normal" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const animationDuration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty(
        "--animation-duration",
        animationDuration
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-nowrap min-w-full gap-4 py-4 animate-scroll",
          start && "start-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scroll var(--animation-duration) linear infinite var(--animation-direction)`,
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[100px] flex-shrink-0 flex flex-col items-center justify-center"
          >
            <img
              src={item.icon}
              alt={`Icon ${idx}`}
              className="w-14 h-14 lg:w-16 lg:h-16"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
