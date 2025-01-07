import "animate.css";

const AboutPage = () => {
  return (
    <div className="md:px-32 sm:px-14 lg:px-52 xs:px-12 xl:px-64 animate__animated animate__slideInLeft">
      <h1 className="text-2xl">About Me</h1>
      <p className={`text-justify pb-5`}>
        I am a software engineer with a passion for web and app development and
        a love for building things. I am proficient in TypeScript, JavaScript,
        Swift, Python, Golang and SQL, employing frameworks like React, React
        Native, and NextJS. I am also experienced in version control with Git
        and GitHub, and familiar with tools like Postman, npm, and vim.
      </p>

      <h1 className={"text-2xl"}>Bio</h1>
      <div>
        <span className="pr-10">2002</span>
        <span>Born in Assam, India.</span>
      </div>
      <div>
        <span className="pr-10">2020</span>
        <span>Completed High School.</span>
      </div>
      <div>
        <span className="pr-10">2024</span>
        <span>Completed Bachelor of Technology (IT) at SMIT</span>
      </div>
      <div className="pb-5">
        <span className="pr-10">2024</span>
        <span>Working as a Senior Analyst at EY</span>
      </div>
      <h1 className="text-2xl">On the Web</h1>
      <div className="pb-5">
        <a
          href="https://www.linkedin.com/in/jayanta-adhikary/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-500`}
        >
          LinkedIn
        </a>

        <a
          href=" https://twitter.com/jayadky"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-500 ml-5`}
        >
          Twitter
        </a>

        <a
          href="https://github.com/jayantaadhikary"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-blue-500 ml-5`}
        >
          GitHub
        </a>
      </div>
      <span className="italic text-xs">
        Btw, this site is built with NextJS and TailwindCSS ❤️
      </span>
    </div>
  );
};

export default AboutPage;
