import { NavBar } from "../components/NavBar";
import { Roboto_Mono } from "next/font/google";

export const robotoMono = Roboto_Mono({
  display: "swap",
  subsets: ["latin-ext"],
});

function Layout(props: any) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-8 px-14 ${robotoMono.className}`}
    >
      <NavBar />
      {props.children}
      <div className={`flex flex-col items-center justify-center`}>
        <p className={`text-center text-sm text-gray-400`}>
          © {new Date().getFullYear()} Jayanta Adhikary
        </p>
      </div>
    </main>
  );
}

export default Layout;
