import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h6 className="text-base font-mono font-semibold leading-normal ml-1.5 mt-0 mb-1 text-green-400">
            Hi, my name is
          </h6>
          <h1 className="text-6xl font-bold leading-normal ml-1 mt-0 mb-0 text-lavender">
            Darren Baillie
          </h1>

          <h1 className="title-font sm:text-4xl text-3xl ml-1.5 mb-4 font-medium text-white">
            {/* <br className="hidden lg:inline-block" /> */}
            I'm a Carpenter Maintenance Technician.
          </h1>
          <p className="mb-8 ml-1.5 leading-relaxed">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus? */}
            Although starting as a suspended ceiling fixer my experience within
            this field has enabled my skills and knowledge in Maintenance and
            Compliance to work within the Care Home and Education industry.
          </p>
          <div className="flex justify-center ml-1.5">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View my work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
