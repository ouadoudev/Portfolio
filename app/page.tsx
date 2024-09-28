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

  const sections = [
    { id: "home", component: <Hero /> },
    { id: "about", component: <Grid /> },
    { id: "projects", component: <Projects /> },
    { id: "experience", component: <Experience /> },
    { id: "testimonials", component: <Testimonials  /> },
    { id: "contact", component: <Footer  /> },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const currentSection = getCurrentSection();
      const previousSection = currentSection ? getPreviousSection(currentSection) : null;
      if (previousSection) {
        scrollContainerRef.current.scrollBy({
          left: -window.innerWidth,
          behavior: "smooth",
        });
        updateUrlHash(previousSection as HTMLElement);
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const currentSection = getCurrentSection();
      const nextSection = currentSection ? getNextSection(currentSection) : null;
      if (nextSection) {
        scrollContainerRef.current.scrollBy({
          left: window.innerWidth,
          behavior: "smooth",
        });
        updateUrlHash(nextSection as HTMLElement);
      }
    }
  };

  const getCurrentSection = () => {
    const sections = scrollContainerRef.current ? Array.from(scrollContainerRef.current.children) : [];
    const currentScrollLeft = scrollContainerRef.current ? scrollContainerRef.current.scrollLeft : 0;
    let currentSection;
    sections.forEach((section) => {
      if ((section as HTMLElement).offsetLeft <= currentScrollLeft && (section as HTMLElement).offsetLeft + (section as HTMLElement).offsetWidth > currentScrollLeft) {
        currentSection = section;
      }
    });
    return currentSection;
  };

  const getPreviousSection = (currentSection: HTMLElement | null) => {
    const sections = scrollContainerRef.current ? Array.from(scrollContainerRef.current.children) : [];
    const currentIndex = currentSection ? sections.indexOf(currentSection as HTMLElement) : -1;
    if (currentIndex > 0) {
      return sections[currentIndex - 1];
    }
    return null;
  };

  const getNextSection = (currentSection: HTMLElement | null) => {
    const sections = scrollContainerRef.current ? Array.from(scrollContainerRef.current.children) : [];
    const currentIndex = currentSection ? sections.indexOf(currentSection as HTMLElement) : -1;
    if (currentIndex < sections.length - 1) {
      return sections[currentIndex + 1];
    }
    return null;
  };

  const updateUrlHash = (section: HTMLElement) => {
    const sectionId = section.id;
    window.location.hash = sectionId;
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setShowScrollButtons(
          container.scrollLeft > 0 &&
            container.scrollLeft <= container.scrollWidth - container.clientWidth
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
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="flex-shrink-0 w-full h-full snap-center mb-6 lg:mb-0"
            >
              {section.component}
            </section>
          ))}
        </div>
      </main>

      {/* Small and medium devices */}
      <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto  px-1 lg:hidden">
        <div className="max-w-7xl w-full">
          {sections.map((section) => (
            <section key={section.id}>{section.component}</section>
          ))}
        </div>
      </main>
    </>
  );
}