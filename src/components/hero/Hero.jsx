import Lottie from "lottie-react";
import heroAnimation from "../../assets/animation/Hero.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/me.jpg";
import myCv from "../../assets/mohamed dahani dev.pdf";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section id="hero" className="my-20">
      <section className="flex  justify-between items-center gap-20 max-md:flex-col-reverse">
        <motion.div
          initial={{ transform: "translateY(-20rem)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="flex flex-col gap-5 text-2xl max-md:flex-row"
        >
          <a
            target="_blank"
            href="https://twitter.com/dahanidev"
            className="icon-x w-10 h-10 flex justify-center items-center rounded-full text-title  border-2 transition duration-300 hover:bg-mainColor hover:text-white hover:border-[#ff8c00] hover:border-2"
            rel="noreferrer"
          ></a>
          <a
            target="_blank"
            href="https://www.instagram.com/mohamed.dahani.dev?igsh=MTdhOHpzbjBoYnVqdw=="
            className="icon-instagram w-10 h-10 flex justify-center items-center rounded-full text-title  border-2 transition duration-300 hover:bg-mainColor hover:text-white hover:border-[#ff8c00] hover:border-2"
            rel="noreferrer"
          ></a>
          <a
            target="_blank"
            href="https://github.com/mohamed-dahani-dev"
            className="icon-github w-10 h-10 flex justify-center items-center rounded-full text-title  border-2 transition duration-300 hover:bg-mainColor hover:text-white hover:border-[#ff8c00] hover:border-2"
            rel="noreferrer"
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-dahani-a453512b0/"
            className="icon-linkedin-square w-10 h-10 flex justify-center items-center rounded-full text-title  border-2 transition duration-300 hover:bg-mainColor hover:text-white hover:border-[#ff8c00] hover:border-2"
            rel="noreferrer"
          ></a>
        </motion.div>
        <div className="flex-grow">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-2  max-md:gap-0">
              <motion.img
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(0.9)" }}
                transition={{ damping: 6, type: "spring", stiffness: 100 }}
                src={avatar}
                alt=""
                className="w-28 rounded-full p-[1px] border-[1.5px] border-[#ff8c00] shadow-xl"
              />
              <div className="icon-verified self-end mb-1 text-sky-400 text-lg"></div>
              <motion.h1
                className=" self-center ml-10 text-title text-4xl font-bold max-md:text-2xl"
                initial={{ transform: "translateY(-20rem)", opacity: 0 }}
                animate={{ transform: "translateY(0)", opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Hi, I am <span className="text-mainColor">Mohamed</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 16, type: "spring", stiffness: 100 }}
              className="max-md:hidden"
            >
              <Lottie
                className="w-44 -translate-y-5"
                loop={true}
                animationData={heroAnimation}
                // https://lottiereact.com/
                lottieRef={lottieRef}
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ transform: "translateX(-20rem)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-title text-5xl font-bold my-7"
          >
            Web Developer, Full Stack Developer
          </motion.h1>
          <motion.p
            initial={{ transform: "translateX(-20rem)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 1.3 }}
            className=" text-subtitle text-sm leading-7 mb-4"
          >
            Hi, Im{" "}
            <span className="text-mainColor font-semibold">
              Mohamed Dahani,
            </span>{" "}
            Passionate and detail-oriented web developer with 2 years of
            experience in creating and implementing innovative web solutions.
            Adept at coding, troubleshooting, and collaborating with
            cross-functional teams to drive the success of high-impact projects.
            Seeking a challenging position to leverage my skills in front-end
            and back-end development for the benefit of a dynamic and
            forward-thinking company.
          </motion.p>
        </div>
      </section>

      <motion.div
        className="mt-12 flex justify-center items-center"
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ damping: 12, type: "spring", stiffness: 100 }}
      >
        <a className="download-cv" href={myCv} download="mohamed dahani dev">
          <span className="circle" aria-hidden="true">
            <span className="download-cv-icon download-cv-arrow"></span>
          </span>
          <span className="download-cv-text">DOWNLOAD CV</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
