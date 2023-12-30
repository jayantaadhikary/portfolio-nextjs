import localFont from "@next/font/local";
import Link from "next/link";

const halimun = localFont({
  src: "../../public/fonts/Halimun.ttf",
  weight: "400",
});

export const NavBar = () => {
  return (
    <nav className={`flex items-center justify-between w-full`}>
      <div className={`flex items-center justify-center`}>
        <Link href="/">
          <h1 className={`text-xl ${halimun.className}`}>Jay Adky</h1>
        </Link>
      </div>
      <div className={`flex items-center justify-center`}>
        <Link href={`/about`} className={" text-blue-500 ml-5"}>
          About
        </Link>
        <Link href={`/blog`} className={" ml-5 text-blue-500"}>
          Posts
        </Link>
        <Link
          href={`https://github.com/jayantaadhikary`}
          target="_blank"
          rel="noreferrer"
          className={" ml-5 text-gray-300"}
        >
          Github
        </Link>
      </div>
    </nav>
  );
};
