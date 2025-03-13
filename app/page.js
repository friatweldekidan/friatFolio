'use client'

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div 
      className="h-[480px] flex items-center justify-center bg-contain bg-right bg-no-repeat" 
      style={{ backgroundImage: `url("/assets/img/bg.jpg")` }}
    >
      <div className="max-w-3xl w-full text-center font-mono space-y-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 7.0 }}
          className="text-gray-800 text-3xl"
        >
        </motion.p>    
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 9.0 }}
          className="text-3xl text-gray-600"
        >
          Frontend Developer
        </motion.p>
       
        <div>
          <a
            href="assets/file/Friat_Weldekidan_Resume.pdf"
            target="_blank"
            download="Friat_Weledkidan_resume.pdf.pdf"
            className="bg-gray-300 hover:bg-gray-500 text-gray-600 text-xl font-bold py-4 px-6 rounded-lg inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
