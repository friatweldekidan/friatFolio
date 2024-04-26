 "use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[379px] pt-12 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('assets/img/bg.jpg')`}}>
      <div className="max-w-4xl mx-auto font-mono">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 7.0 }}
          className="text-center text-gray-800 text-4xl"
        >
          Hello, my name is Friat Weldekidan.
        </motion.p>    
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 9.0 }}
            className="text-3xl text-center text-gray-600 my-12"
          >
            Frontend Developer
          </motion.p>
         
        <div className="flex justify-center mt-8">
          <a
            href="/assets/file/Friat_Weldekidan_Resume.pdf"
            target="_blank"
            download="Friat_Weldekidan_Resume.pdf"
            className="bg-gray-300 hover:bg-gray-500 text-gray-600 text-xl font-bold py-4 px-6 rounded-[8px]"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
