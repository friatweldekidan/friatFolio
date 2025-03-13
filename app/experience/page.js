'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer Volunteer",
    company: "My Health Integral",
    startDate: "February 2024",
    endDate: "May 2024",
    description:
      "As a Frontend Developer at MHI, I build and maintain the company website using Next.js and Tailwind CSS. I collaborate remotely with global team members, ensuring smooth communication. My tasks include implementing design mockups, optimizing performance, and ensuring cross-browser compatibility.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Trust ICT Solutions",
    startDate: "December 2023",
    endDate: "February 2024",
    description:
      "At Trust ICT Solutions, I convert Figma designs of coffee website into web pages using React.js and Tailwind CSS. I work closely with the design team and the development team, ensuring faithful implementation of the UI/UX.",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "iCog",
    startDate: "July 2024",
    endDate: "February 2025",
    description:
      "Translated Figma designs into fully functional, responsive front-end components using HTML, CSS, JavaScript, and React.js, collaborating with the design team to ensure pixel-perfect implementation of UI/UX elements. Optimized front-end performance, ensured cross-browser compatibility, and engaged with back-end developers to integrate APIs and enhance functionality."
  },
];

export default function Experience() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 h-[480px]">
      <div className="max-w-2xl mx-auto">
        <Slider {...sliderSettings}>
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-lg shadow-lg p-6 mb-4"
            >
              <h2 className="text-xl font-semibold mb-2">
                {experience.title} at {experience.company}
              </h2>
              <p className="text-gray-600 mb-2">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="text-gray-800">{experience.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
