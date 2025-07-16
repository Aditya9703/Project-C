import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Instructor = () => {
  return (
    <div className="bg-[#2D323C] text-white py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Learn with{" "}
        <span className="text-white">Industry Experienced Instructor</span>
        <div className="h-1 w-24 bg-yellow-400 mx-auto mt-4" />
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src="/images/viveksir.png"
          alt="Instructor"
          className="w-40 h-40 rounded-full object-cover bg-white"
        />

        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 leading-relaxed">
            Vivek has taught{" "}
            <span className="text-yellow-400 font-semibold">
              20,000+ students
            </span>{" "}
            through on campus workshops and online courses on interview
            preparation. After graduating from{" "}
            <span className="text-yellow-400 font-semibold">IIT</span>, he
            worked at{" "}
            <span className="text-yellow-400 font-semibold">Amazon</span> for
            three years, handling high-scale systems. He is loved by his
            students for his lucid in-depth explanations and ability to make
            people think through problems.
          </p>

          <div className="bg-[#3C434F] rounded-md p-4 inline-block text-sm mt-4">
            <p className="font-semibold">Vivekanand Vivek</p>
            <p className="mt-1">
              Ex-SDE{" "}
              <span className="text-yellow-400 font-semibold">amazon</span>,{" "}
              <span className="text-yellow-400 font-semibold">
                IIT BHU Alumni
              </span>
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
