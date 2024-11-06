import React from "react";
import { Button, Image } from "@nextui-org/react";

function About() {
  return (
    <div className="w-full h-auto p-12 ">
      <div className="w-full px-4 text-center md:text-left">
        <h1 className="tracking-tight leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-800">
          Full Stack Web Developer
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-600 font-semibold mb-4">
          MERN Stack & Next.js Specialist
        </h2>

        <p className="text-md sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
          I build user-friendly and visually engaging websites and applications
          using the MERN Stack and Next.js. I am passionate about creating
          modern, accessible, and innovative web solutions.
        </p>

        <p className="text-md sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
          With a solid foundation in HTML, CSS, JavaScript, and React, I am
          expanding my expertise in backend development, databases, and other
          key technologies to evolve as a versatile developer.
        </p>

        <p className="text-md sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
          I thrive in collaborative settings, tackling real-world challenges,
          and continuously learning to build impactful web applications.
        </p>

        <Button
          auto
          color="primary"
          rounded
          size="lg"
          className="mt-4 transition-transform duration-300 hover:scale-105"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default About;
