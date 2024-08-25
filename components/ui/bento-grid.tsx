import { cn } from "@/utils/cn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { InfiniteMovingIcons } from "./infinite-moving-icons";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 md:grid-cols-4 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  status,
  description,
  username,
  technologies,
  image,
  socialMediaLinks,
  formation,
  cvLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  status?: string;
  description?: string | React.ReactNode;
  id: number;
  username?: string;
  technologies?: {
    languages?: { name: string; icon: string }[];
    frontend?: { name: string; icon: string }[];
    backend?: { name: string; icon: string }[];
    tools?: { name: string; icon: string }[];
  };
  image?: string;
  socialMediaLinks?: { [key: string]: string };
  formation?: {
    degree: string;
    institution: string;
    field?:string;
    options?:string;
  }[];
  cvLink?: string;
}) => {
  // Separate technologies into different arrays
  const languages = technologies?.languages || [];
  const frontend = technologies?.frontend || [];
  const backend = technologies?.backend || [];
  const tools = technologies?.tools || [];
 
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-center",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {image && (
        <div className="relative flex justify-center">
          <div
            className={cn(
              "w-32 h-32 mt-2 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 shadow-md",
              {
                "border-green-500":
                  status === "Seeking New Career Opportunities",
                "border-yellow-500": status === "Currently Employed",
                "border-gray-500":
                  status !== "Seeking New Career Opportunities" &&
                  status !== "Currently Employed",
              }
            )}
          >
            <img
              src={image}
              alt="User profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      {status && (
        <div
          className={cn(
            "absolute text-center hidden sm:hidden md:block lg:top-52 lg:right-36  text-xs px-4 py-2 rounded-3xl z-50",
            {
              "text-green-500": status === "Seeking New Career Opportunities",
              "text-yellow-500": status === "Currently Employed",
              "text-gray-500":
                status !== "Seeking New Career Opportunities" &&
                status !== "Currently Employed",
            }
          )}
        >
          {status}
        </div>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col justify-center items-center text-center px-5 py-5 lg:px-10 lg:py-10 z-10">
        {username && (
          <div className="font-sans text-lg lg:text-3xl font-bold mb-1">
            {username}
          </div>
        )}
        {title && (
          <div className="font-sans text-lg text-gray-300 lg:text-2xl font-bold mb-1">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans text-sm md:text-xs lg:text-base text-[#b3b2b2] ">
            {description}
          </div>
        )}
        {formation && formation.length > 0 && (
          <div className="px-5 py-5 lg:px-10 lg:py-8">
            <div className="space-y-4">
              {formation.map((item, index) => (
                <div key={index} className="mt-1">
                  <span className="">{item.degree}</span>
                  <div className="text-xs text-center flex flex-col justify-between">
                  <span className="text-xs text-[#8a8383]">
                      {item.institution}
                    </span>
                    <span className="text-sm text-[#c2b8b8]">
                      {item.options}
                    </span>
                    <span className="text-sm text-[#c2b8b8]">
                      {item.field}
                    </span>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row justify-center items-center px-5 pt-2 gap-8">
        {socialMediaLinks && (
          <div className="flex items-center gap-4">
            {socialMediaLinks.linkedin && (
              <a
                href={socialMediaLinks.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-foreground"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            )}
            {socialMediaLinks.twitter && (
              <a
                href={socialMediaLinks.twitter}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-foreground"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            )}
            {socialMediaLinks.github && (
              <a
                href={socialMediaLinks.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary-foreground"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            )}
          </div>
        )}
        {cvLink && (
          <a
            href={cvLink}
            download
            className="cursor-pointer group relative flex gap-1.5 px-8 py-1 mb-2 lg:py-2 lg:mb-1 bg-gray-900 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md justify-center items-center"
          >
            <HiDownload className="text-2xl " />
            <span className="text-center text-sm" >Download my resume </span>
            <div className="absolute opacity-0 -top-12 w-[300px] rounded-xl py-2 px-2 bg-zinc-500 bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              To dive deeper into my experience!
            </div>
          </a>
        )}
      </div>
      <div className="flex flex-col items-center">
        {languages.length > 0 && (
          <div className="w-full ">
            <InfiniteMovingIcons
              items={languages.map((tech) => ({
                icon: tech.icon,
              }))}
              direction="left"
              speed="fast"
              pauseOnHover={false}
            />
          </div>
        )}
        {frontend.length > 0 && (
          <div className="w-full ">
            <InfiniteMovingIcons
              items={frontend.map((tech) => ({
                icon: tech.icon,
              }))}
              direction="right"
              speed="fast"
              pauseOnHover={false}
            />
          </div>
        )}
        {backend.length > 0 && (
          <div className="w-full ">
            <InfiniteMovingIcons
              items={backend.map((tech) => ({
                icon: tech.icon,
              }))}
              direction="left"
             speed="fast"
              pauseOnHover={false}
            />
          </div>
        )}
        {tools.length > 0 && (
          <div className="w-full ">
            <InfiniteMovingIcons
              items={tools.map((tech) => ({
                icon: tech.icon,
              }))}
              direction="right"
            speed="fast"
              pauseOnHover={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};
