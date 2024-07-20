import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Header = () => {
  // show menu
  const [showMenu, setShowMenu] = useState(false);

  // set the theme
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  return (
    <header className="flex justify-between items-center mt-5">
      <button
        className="menu icon-menu text-xl text-title md:hidden max-md: flex justify-center items-center w-10 h-10 bg-bgHeader rounded-full border border-[#f4a5603f] transition duration-500 shadow-md hover:border-[#f4a560]"
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <div />
      <nav className="flex gap-10 bg-bgHeader py-2.5 px-7 rounded-full border border-borderNav shadow-xl max-md:hidden">
        <Link
          className="text-title font-medium transition duration-500 cursor-pointer hover:text-mainColor"
          to="hero"
          spy={true}
          smooth={false}
          offset={-100}
          duration={500}
        >
          <span className="icon-user mr-2 text-base"></span>About
        </Link>
        <Link
          className="text-title font-medium transition duration-500 cursor-pointer hover:text-mainColor"
          to="skills"
          spy={true}
          smooth={false}
          offset={-20}
          duration={500}
        >
          <span className="icon-code mr-2 text-base"></span>Skills
        </Link>
        <Link
          className="text-title font-medium transition duration-500 cursor-pointer hover:text-mainColor"
          to="works"
          spy={true}
          smooth={false}
          offset={-20}
          duration={500}
        >
          <span className="icon-planet mr-2 text-base"></span>Works
        </Link>
        <Link
          className="text-title font-medium transition duration-500 cursor-pointer hover:text-mainColor"
          to="contact"
          spy={true}
          smooth={false}
          offset={-20}
          duration={500}
        >
          <span className="icon-envelope mr-2 text-base"></span>Contact
        </Link>
      </nav>
      <button
        onClick={() => {
          // send value to ls
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from ls
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="bg-bgHeader w-10 h-10 flex justify-center items-center rounded-full border border-[#f4a5603f] transition duration-500 shadow-md hover:border-[#f4a560]"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o text-lg"></span>
        ) : (
          <span className="icon-sunny text-[#ffa500] text-lg"></span>
        )}
      </button>

      {/* the menu on the small  screen */}

      {showMenu && (
        <div className="fixed bg-[#282830e6] inset-0 z-50 backdrop-blur-sm">
          <div className="w-4/5 mt-8 mx-auto bg-secondary rounded-2xl py-4 px-8 animate-popup">
            <div className="text-right py-2">
              <button
                className="icon-close text-title text-[25px] hover:rotate-180 hover:text-red-500"
                onClick={() => {
                  setShowMenu(false);
                }}
              />
            </div>
            <div className="flex flex-col divide-y divide-border">
              <Link
                className="text-title font-medium transition duration-500 hover:text-mainColor py-4"
                to="hero"
                spy={true}
                smooth={false}
                offset={-20}
                duration={500}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <span className="icon-user mr-2 text-base"></span>About
              </Link>
              <Link
                className="text-title font-medium transition duration-500 hover:text-mainColor py-4"
                to="skills"
                spy={true}
                smooth={false}
                offset={-50}
                duration={500}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <span className="icon-code mr-2 text-base"></span>Skills
              </Link>
              <Link
                className="text-title font-medium transition duration-500 hover:text-mainColor py-4"
                to="works"
                spy={true}
                smooth={false}
                offset={-50}
                duration={500}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <span className="icon-planet mr-2 text-base"></span>Works
              </Link>
              <Link
                className="text-title font-medium transition duration-500 hover:text-mainColor py-4"
                to="contact"
                spy={true}
                smooth={false}
                offset={-50}
                duration={500}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <span className="icon-envelope mr-2 text-base"></span>Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
