import "animate.css";
import ArrowRightIcon from "./icons/arrow-right";

const HomePage = () => {
  return (
    <div>
      <div className={`flex flex-col items-center justify-center `}>
        <h1
          className={`text-5xl font-bold text-center animate__animated animate__slideInLeft pb-2`}
        >
          Jayanta Adhikary
        </h1>
        <p className={`text-center`}>
          Software Engineer | Web/App Developer | Tech Enthusiast
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/17K2TtNCJy1WdGE8wyz1wzrPNvgYa9ust/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={`bg-sky-950 text-white px-4 py-2 rounded-md mt-4 flex items-center justify-between hover:bg-sky-700`}
          >
            <span>Resume </span>
            <div className="w-5 h-5">
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
