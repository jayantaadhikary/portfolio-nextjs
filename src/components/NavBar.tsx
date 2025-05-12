import localFont from "@next/font/local";
import Link from "next/link";
import { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

const halimun = localFont({
  src: "../../public/fonts/Halimun.ttf",
  weight: "400",
});

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={`flex items-center flex-wrap justify-between w-full`}>
      <div className={`flex items-center justify-center`}>
        <Link href="/">
          <h1 className={`text-xl ${halimun.className}`}>Jay Adky</h1>
        </Link>
      </div>
      <div className={`hidden md:flex items-center justify-center`}>
        <Link href={`/about`} className={" text-blue-500 ml-5"}>
          About
        </Link>

        <Link href={`/blog`} className={" ml-5 text-blue-500"}>
          Posts
        </Link>
        <Link href={`/projects`} className={" text-blue-500 ml-5"}>
          Works
        </Link>
        <Link
          href={`https://github.com/jayantaadhikary`}
          target="_blank"
          rel="noreferrer"
          className={" ml-5 text-gray-500"}
        >
          Github
        </Link>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <Bars4Icon
          className={`h-6 w-6 ml-5 text-gray-500 hover:text-gray-700`}
        />
      </button>
      {showMenu && (
        <div className="flex basis-full flex-col  items-end">
          <Link href={`/about`} className={" text-blue-500 my-2"}>
            About
          </Link>
          <Link href={`/blog`} className={" text-blue-500 mb-2"}>
            Posts
          </Link>
          <Link href={`/projects`} className={" text-blue-500 mb-2"}>
            Works
          </Link>
          <Link
            href={`https://github.com/jayantaadhikary`}
            target="_blank"
            rel="noreferrer"
            className={"  text-gray-500"}
          >
            Github
          </Link>
        </div>
      )}
    </nav>
  );
};
