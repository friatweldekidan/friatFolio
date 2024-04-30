import React from "react";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-6 lg:gap-8 pt-4">
      <div className="md:w-1/4 lg:w-1/5 pt-2 md:pl-4 md:pr-8">
        <address>
          <p className="text-2xl mb-8">CONTACT ME</p>
          <p className="mb-6">
            <PhoneIcon className="h-5 w-5 inline-block" /> +251-920-641-902
          </p>
          <p className="mb-6">
            <MailIcon className="h-5 w-5 inline-block" /> friatweld@gmail.com
          </p>
          <p className="mb-6">
            <LocationMarkerIcon className="h-5 w-5 inline-block" /> Addis Ababa,
            Ethiopia
          </p>
        </address>
      </div>
      <div className="md:w-1/4 lg:w-2/5">
        <p className="text-lg leading-relaxed mb-4 italic">
          I&apos;m always looking for new and exciting projects to work on, let&apos;s get
          in touch!
        </p>
        <form
          action="https://formspree.io/f/mrgnrwyj"
          method="POST"
          className="mb-4"
        >
          <input
            name="name"
            type="text"
            className="w-full bg-gray-50 rounded border border-gray-100 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-2"
            placeholder="Your Name"
          />
          <input
            name="email"
            type="email"
            className="w-full bg-gray-50 rounded border border-gray-100 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-2"
            placeholder="Your Email"
          />
          <textarea
            name="message"
            rows="4"
            className="w-full bg-gray-50 rounded border border-gray-100 focus:outline-none focus:border-gray-500 text-base px-4 py-2 mb-2 resize-none"
            placeholder="Your Message"
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <button
            name="send"
            type="submit"
            className="w-full text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
          >
            SEND ME
          </button>
        </form>
      </div>
    </div>
  );
}
