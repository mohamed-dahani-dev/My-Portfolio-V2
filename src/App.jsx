import { useEffect, useRef, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

const App = () => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const moveUp = useRef();

  const docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Come Back 💔";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  return (
    <div ref={moveUp} className="w-[90%] bg-secondary mx-auto px-containerPadding border-2 border-border max-lg:w-[95%] max-lg:px-containerPaddingMaxWidth_1000 max-sm:w-[98%] max-sm:px-containerPaddingMaxWidth_600">
      <div className="sticky top-5 z-50">
        <Header />
      </div>
      <div className=" divide-y divide-border">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <button
        style={{
          opacity: showScrollBtn ? 1 : 0,
        }}
        className="icon-arrow-up w-10 h-10 text-white bg-mainColor flex justify-center items-center rounded-full fixed bottom-8 right-[3.5%] text-lg transition duration-500"
        onClick={() => {
          moveUp.current.scrollIntoView({
            block: "start",
          });
        }}
      ></button>
    </div>
  );
};

export default App;
