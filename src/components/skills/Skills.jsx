import materialuiImg from "../../assets/material ui.png";
import expressJsImg from "../../assets/express js.png";

const Skills = () => {
  return (
    <section id="skills" className="">
      <h1 className="text-4xl flex items-center gap-4 text-title font-semibold mt-20 mb-12 max-md:text-2xl">
        <span className="icon-code text-title text-4xl max-md:text-2xl"></span>
        Skills
      </h1>
      <div className="mt-12 flex justify-center items-center flex-wrap gap-8 mb-20">
        <a
          href="https://www.w3schools.com/html/default.asp"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#e34f26]"
        >
          <span className="icon-html5 text-7xl"></span>
          <h1 className="text-title">HTML</h1>
        </a>
        <a
          href="https://www.w3schools.com/css/default.asp"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#1572b6]"
        >
          <span className="icon-css3 text-7xl"></span>
          <h1 className="text-title">CSS</h1>
        </a>
        <a
          href="https://www.w3schools.com/js/default.asp"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#f7df1e]"
        >
          <span className="icon-javascript text-7xl"></span>
          <h1 className="text-title">Javascript</h1>
        </a>
        <a
          href="https://react.dev/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#61dafb]"
        >
          <span className="icon-react text-7xl"></span>
          <h1 className="text-title">React Js</h1>
        </a>
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#7311f5]"
        >
          <span className="icon-bootstrap text-7xl"></span>
          <h1 className="text-title">Bootstrap</h1>
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#38B2AC]"
        >
          <span className="icon-tailwindcss text-7xl"></span>
          <h1 className="text-title">Tailwind</h1>
        </a>

        <a
          href="https://mui.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#00b0ff]"
        >
          <img src={materialuiImg} alt="" />
          <h1 className="text-title">MUI</h1>
        </a>

        <a
          href="https://nodejs.org/en"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#339933]"
        >
          <span className="icon-node-dot-js text-7xl"></span>
          <h1 className="text-title">Node Js</h1>
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#339933]"
        >
          <img src={expressJsImg} alt="" />
          <h1 className="text-title">ExpressJs</h1>
        </a>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#47a248]"
        >
          <span className="icon-mongodb text-7xl"></span>
          <h1 className="text-title">MongoDB</h1>
        </a>
        <a
          href="https://dev.mysql.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#4479a1]"
        >
          <span className="icon-mysql text-7xl"></span>
          <h1 className="text-title">My SQL</h1>
        </a>

        <a
          href="https://www.php.net/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#777bb4]"
        >
          <span className="icon-php text-7xl"></span>
          <h1 className="text-title">PHP</h1>
        </a>
        <a
          href="https://laravel.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#ff2d20]"
        >
          <span className="icon-laravel text-7xl"></span>
          <h1 className="text-title">Laravel</h1>
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#007acc]"
        >
          <span className="icon-typescript text-7xl"></span>
          <h1 className="text-title">Typescript</h1>
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          className="flex gap-8 flex-col items-center justify-center font-bold h-40 w-40 p-10 rounded-2xl cursor-pointer transition duration-500 border-2 border-[#f05032]"
        >
          <span className="icon-git text-7xl"></span>
          <h1 className="text-title">Git</h1>
        </a>
      </div>
    </section>
  );
};

export default Skills;
