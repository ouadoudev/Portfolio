import React, { useState, useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  // Array of texts to display
  const texts = [
    "Transforming Ideas into Reality",
    "Innovating Your Future",
    "Empowering Your Vision",
    "Crafting Scalable Solutions"
  ];

  // State to manage the index of the current text
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to update the text index every 2 seconds
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="hero" className="py-24 lg:py-0">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Expert Full-Stack Development Solutions
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
            words={texts[currentTextIndex]}
          />
          <div className="text-center md:tracking-wider py-4 mb-4 text-sm md:text-lg lg:text-xl">
            <p>
              As a seasoned full-stack developer, I leverage my expertise in
            </p>
            <p className="py-4">
              <span
                style={{
                  color: "#8BC34A",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  fontFamily: "Montserrat",
                }}
              >
                MERN Stack
              </span>
              ,{" "}
              <span
                style={{
                  color: "#E74C3C",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  fontFamily: "Montserrat",
                }}
              >
                MEAN Stack
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "#3498DB",
                  textTransform: "uppercase",
                  fontSize: "28px",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              >
                Next.js
              </span>
            </p>
            <p>
              to craft innovative, scalable, and efficient solutions that drive
              business growth.
            </p>
          </div>

          <a href="#about">
            <MagicButton
              title="Discover My Expertise"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
