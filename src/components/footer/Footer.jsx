import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center gap-10 py-10 max-md:flex-col">
      <div className="flex items-center gap-4">
        <Link
          className="text-title font-normal transition duration-500 cursor-pointer hover:text-mainColor"
          to="hero"
          spy={true}
          smooth={false}
          offset={-100}
          duration={500}
        >
          About
        </Link>
        <Link
          className="text-title font-normal transition duration-500 cursor-pointer hover:text-mainColor"
          to="skills"
          spy={true}
          smooth={false}
          offset={-20}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="text-title font-normal transition duration-500 cursor-pointer hover:text-mainColor"
          to="projects"
          spy={true}
          smooth={false}
          offset={-20}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="text-title font-normal transition duration-500 cursor-pointer hover:text-mainColor"
          to="contact"
          spy={true}
          smooth={false}
          offset={-20}
          duration={500}
        >
          Contact
        </Link>
      </div>
      <p className="text-[#71717a] text-sm">
        {" "}
        © 2024 Spencer Sharp. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
