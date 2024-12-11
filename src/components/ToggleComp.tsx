import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

interface ToggleCompProps {
  children: ReactNode;
}

const ToggleComp: React.FC<ToggleCompProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const addDarkTheme = () => {
    if (mainRef.current) {
      mainRef.current.classList.add("dark");
    }
    setDarkTheme(true);
  };

  const removeDarkTheme = () => {
    if (mainRef.current) {
      mainRef.current.classList.remove("dark");
    }
    setDarkTheme(false);
  };

  useEffect(() => {
    const darkTheme = reactLocalStorage.get("darkTheme");
    const darkThemeParsed =
      darkTheme !== undefined && darkTheme !== null
        ? JSON.parse(darkTheme as string)
        : undefined;

    const systemTheme =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme === undefined || darkTheme === null) {
      systemTheme ? addDarkTheme() : removeDarkTheme();
    } else {
      darkThemeParsed ? addDarkTheme() : removeDarkTheme();
    }
  }, []);

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800 ">
        <div className=" sm:w-full mx-auto flex justify-center overflow-hidden ">
          <span className="fixed right-16 top-[92px] text-black dark:text-white font-bold hidden sm:block">
            {darkTheme ? "Light" : "Dark"}
          </span>
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
                reactLocalStorage.set("darkTheme", JSON.stringify(true));
              } else {
                removeDarkTheme();
                reactLocalStorage.set("darkTheme", JSON.stringify(false));
              }
            }}
            className="fixed right-14  top-20 text-yellow-600 hover:text-yellow-500 z-40 dark:text-yellow-300"
          >
            <span className="absolute block rounded-full bg-zinc-200 p-3 font-extrabold dark:bg-zinc-600">
              {darkTheme ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default ToggleComp;
