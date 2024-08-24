"use client";
import { useRef, useState, useEffect } from "react";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials  from "@/components/Testimonials";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";


export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setShowScrollButtons(
          container.scrollLeft > 0 &&
            container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === "ArrowLeft") {
        leftButtonRef.current?.click();
      } else if (event.key === "ArrowRight") {
        rightButtonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Large screens and above */}
      <main className="relative bg-black-100  lg:flex-row flex-col justify-between items-center overflow-hidden mx-auto w-screen h-screen hidden lg:flex">
        {/* Scroll buttons for large screens and above */}
        {showScrollButtons && (
          <>
            <button
              ref={leftButtonRef}
              onClick={scrollLeft}
              className="absolute left-3 bottom-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              ref={rightButtonRef}
              onClick={scrollRight}
              className="absolute right-3 bottom-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-50 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronRight size={24} />
            </button>
          </>
        )}

        {/* Horizontal scroll container for larger screens */}
        <div
          ref={scrollContainerRef}
          className="flex flex-row w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
        >
          {/* Section 1: Hero */}
          <section className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0">
            <Hero />
          </section>

          {/* Section 2: Grid */}
          <section className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0">
            <Grid />
          </section>

          {/* Section 3: Projects */}
          <section className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0">
            <Projects />
          </section>
          {/* Section 3: Projects */}
          <section className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0">
            <Experience />
          </section>

          {/* Section 4: Testimonials  */}
          <section className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0">
            <Testimonials  />
          </section>
          {/* Section 4: Testimonials  */}
          <section className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0">
            <Footer  />
          </section>
        </div>
      </main>

      {/* Small and medium devices */}
      <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto  px-1 lg:hidden">
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />
          <Projects />
          <Experience />
          <Testimonials  />
          <Footer  />
        </div>
      </main>
    </>
  );
}
