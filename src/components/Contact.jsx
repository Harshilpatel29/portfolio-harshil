import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

import resumePDF from "../assets/resume.pdf";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_c46oehr",
        "template_4ghc1is",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "aHtVjHO819R9D2UG2"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you ASAP.");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          alert("Something went wrong.");
        }
      );
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Harshil_Patel_CV.pdf";
    link.click();
  };

  return (
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">

      {/* LEFT FORM CARD */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full xl:w-[480px] bg-black/40 p-6 sm:p-8 rounded-3xl 
        shadow-xl backdrop-blur-md border border-white/10 "
      >
        <p className={`${styles.sectionSubText} text-center text-white/70`}>
          Get in Touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-center text-white`}>
          Contact.
        </h3>

        {/* Resume Button */}
        <div className="mt-6 mb-6 flex justify-center">
          <button
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-green-500 to-blue-500 
            px-8 py-3 rounded-lg font-semibold text-white shadow-md 
            transition-all hover:scale-105 p-10"
          >
            Download Resume
          </button>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >

          {/* Name */}
          <div className="flex flex-col w-full">
            <label className="text-gray-200 font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-[#2a2a2a] px-5 py-4 rounded-xl text-white
              placeholder-gray-400 border border-transparent 
              focus:border-purple-500 outline-none transition-all p-10"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <label className="text-gray-200 font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-[#2a2a2a] px-5 py-4 rounded-xl text-white
              placeholder-gray-400 border border-transparent 
              focus:border-blue-500 outline-none transition-all p-10"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col w-full">
            <label className="text-gray-200 font-medium mb-2">Your Message</label>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message..."
              className="bg-[#2a2a2a] px-5 py-4 rounded-xl text-white
              placeholder-gray-400 border border-transparent 
              focus:border-pink-500 outline-none transition-all resize-none p-10"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-indigo-600 
            px-12 py-3 rounded-xl text-white font-semibold shadow-lg 
            w-fit mx-auto transition-all hover:scale-105 p-10"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* RIGHT EARTH */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[320px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
