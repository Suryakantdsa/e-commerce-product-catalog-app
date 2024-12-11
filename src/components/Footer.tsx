import { Github, GlobeIcon, Linkedin, XIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className=" w-[420px] sm:w-full  bg-black h-48 rounded-t-[60px]">
      <div className="flex flex-col justify-start items-center h-full pt-4 gap-3">
        <h1 className="text-white  sm:text-2xl">
          Made with <span className="animate-pulse text-2xl">❤️</span>
        </h1>
        <h1 className="text-white text-xs">by </h1>
        <h1 className="text-yellow-600 text-base">Suryakant Das </h1>
        <div className="flex justify-center gap-x-4">
          <a
            href="https://github.com/Suryakantdsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="blue" />
          </a>
          <a
            href="https://www.linkedin.com/in/suryakant-das-7b657814b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="blue" />
          </a>
          <a
            href="https://x.com/_1996surya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon color="blue" />
          </a>
          <a
            href="https://portfolio-new-4nvm.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon color="blue" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
