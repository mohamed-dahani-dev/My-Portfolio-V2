import { useState } from "react";
import Data from "../../assets/data/Data";

const Works = () => {
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
    <main id="works">
      <h1 className="text-4xl flex items-center gap-4 text-title font-semibold mt-20 mb-12 max-md:text-2xl">
        <span className="icon-planet text-title text-4xl max-md:text-2xl"></span>
        Works
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
            All Works
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
        <section
          className="flex justify-center flex-wrap items-center gap-5"
          // layout
        >
          {newArray.map((card, index) => {
            return (
              <article
                key={index}
                className="flex flex-col justify-center items-center cursor-pointer overflow-hidden transition duration-300 hover:scale-105"
              >
                <img height={150} width={widthCard} src={card.img} alt="" />

                <div style={{ width: widthCard }} className="py-5 px-2">
                  <h1 className="text-lg font-semibold text-title text-center mb-5">
                    {card.title}
                  </h1>
                  {/* <p className="text-subtitle text-sm mt-3 mb-6">
                      {card.description}
                    </p> */}
                  <div className="flex justify-center items-center gap-5">
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
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default Works;
