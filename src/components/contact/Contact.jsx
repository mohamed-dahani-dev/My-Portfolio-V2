import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../assets/animation/Done.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnydgd");
  if (state.succeeded) {
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

  return (
    <section id="contact">
      <h1 className="text-4xl flex items-center gap-4 text-title font-semibold mt-20 mb-12 max-md:text-2xl">
        <span className="icon-envelope text-4xl max-md:text-2xl"></span>
        Let{"'"}s Talk
      </h1>
      <p className="text-base text-subtitle my-14 ">
        Contact Me For More Information.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 w-72 mb-20 max-md:grid-cols-1 max-md:w-full"
      >
        <label className="text-subtitle flex items-center" htmlFor="email">
          Email Address :
        </label>
        <input
          className="text-title text-lg bg-[#3f3f4626] border-2 border-[#3f3f46] py-1.5 px-4 outline-none rounded-md transition duration-500 w-[22rem] focus:border-mainColor max-md:w-full"
          required
          type="email"
          id="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label className="text-subtitle flex items-center" htmlFor="message">
          Your Message :
        </label>
        <textarea
          className="text-title text-lg bg-[#3f3f4626] border-2 border-[#3f3f46] py-2 px-4 outline-none rounded-md transition duration-500 w-[22rem] min-h-36 resize-y focus:border-mainColor max-md:w-full"
          required
          id="message"
          name="message"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div />
        <button
          className="border-2 border-[#3f3f46] rounded-md py-2 text-title hover:bg-mainColor hover:text-white max-md:py-2.5"
          type="submit"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
      {state.succeeded && (
        <p className="text-title text-lg mt-10 mb-20 flex items-center gap-2">
          Your message has been sent successfully
          <Lottie
            loop={false}
            style={{ height: 35 }}
            animationData={doneAnimation}
          />{" "}
        </p>
      )}
    </section>
  );
};

export default Contact;
