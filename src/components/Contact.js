/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // const { REACT_APP_SERVICE_ID,  REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
    //   process.env; 

    // emailjs
    //   .sendForm(
    //     `${REACT_APP_SERVICE_ID}`,
    //     `${REACT_APP_TEMPLATE_ID}`,
    //     form.current,
    //     `${REACT_APP_PUBLIC_KEY}`
    //   )

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY 
    )



      .then(
        (result) => {
          // console.log(JSON.stringify(result.text));
          alert ( JSON.stringify("Message sent"));
          e.target.reset(); //reset input fields on success
        },
        (error) => {
          // console.log(JSON.stringify(error.text));
          alert( JSON.stringify(  error));  
        } 
      );
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=BS229PT&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-18 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 mb-2">
                Weston-super-Mare, <br />
                BS22
              </p>
            </div>
            <div className="px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                littlelegsx1@live.co.uk
              </a>
              {/*               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p> */}
            </div>
          </div>
        </div>
        <form
          ref={form}
          netlify
          name="contact"
          // onSubmit={handleSubmit}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5">
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="form-input-control-last-name"
              name="email_from"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="form-input-control-email"
              name="email_from"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="form-textarea-control-opinion"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
