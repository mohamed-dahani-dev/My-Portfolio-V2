import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Data from "../../assets/data/Data";

const Projects = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [newArray, setNewArray] = useState(Data);
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const filterArray = Data.filter((item) => {
      return item.category === buttonCategory;
    });
    setNewArray(filterArray);
  };

  const widthCard = 320;

  return (
    <main id="projects">
      <h1 className="text-4xl flex items-center gap-4 text-title font-semibold mt-20 mb-12 max-md:text-2xl">
        <span className="icon-planet text-title text-4xl max-md:text-2xl"></span>
        My Projects
      </h1>
      <section className="flex flex-col items-center justify-center gap-16 mb-20">
        <section className="flex justify-center items-center gap-5 flex-wrap">
          <button
            onClick={() => {
              setCurrentActive("all");
              setNewArray(Data);
            }}
            className={
              currentActive === "all"
                ? "active-filter"
                : "bg-mainButtonColor px-4 py-2 rounded-md"
            }
          >
            All Projects
          </button>
          <button
            onClick={() => {
              setCurrentActive("frontend");
              handleClick("frontend");
            }}
            className={
              currentActive === "frontend"
                ? "active-filter"
                : "bg-mainButtonColor px-4 py-2 rounded-md"
            }
          >
            Front End
          </button>
          <button
            onClick={() => {
              setCurrentActive("fullstack");
              handleClick("fullstack");
            }}
            className={
              currentActive === "fullstack"
                ? "active-filter"
                : "bg-mainButtonColor px-4 py-2 rounded-md"
            }
          >
            Full Stack
          </button>
        </section>
        <section className="flex justify-center flex-wrap items-center gap-5">
          <AnimatePresence>
            {newArray.map((card, index) => {
              return (
                <motion.article
                  key={index}
                  layout
                  className="flex flex-col justify-center items-center border-borderCard border-2 rounded-2xl cursor-pointer overflow-hidden transition duration-300 hover:border-mainColor"
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 10, stiffness: 50 }}
                >
                  <img height={150} width={widthCard} src={card.img} alt="" />

                  <div style={{ width: widthCard }} className="p-4">
                    <h1 className="text-lg font-semibold text-title">
                      {card.title}
                    </h1>
                    <p className="text-subtitle text-sm mt-3 mb-6">
                      {card.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <a
                        href={card.gitHub}
                        target="_blank"
                        className="icon-github text-subtitle text-xl transition duration-500 hover:text-title"
                      ></a>
                      <a
                        href={card.link}
                        target="_blank"
                        className="icon-external-link text-subtitle text-xl transition duration-500 hover:text-title"
                      ></a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </section>
    </main>
  );
};

export default Projects;
