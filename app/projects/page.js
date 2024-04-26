"use client";

import React from "react";
import Slider from "react-slick";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "Crafted with Next.js and Tailwind CSS, this portfolio adheres to a clean black and white design. Explore my projects and experiences seamlessly, reflecting my web development skills with elegance and simplicity.",
    githubLink: "https://github.com/friatweldekidan/friatFolio",
    liveSiteLink: "https://www.freeyat.com/",
    image: "assets/img/portfolio1.jpg",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "As part of my bootcamp experience, Netflix clone using React.js with API integration, allowing dynamic fetching of movie data. Deployed using Firebase.",
    githubLink: "https://github.com/friatweldekidan/netflix-react-2023",
    liveSiteLink: "https://netflix-clone-2023-a2a01.web.app",
    image: "assets/img/portfolio2.jpg",
  },
  // Add more projects as needed
];

export default function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="max-w-2xl mx-auto">
        <Slider {...sliderSettings}>
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 mx-auto"
                width={160}
                height={150}
              />
              <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-800 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.githubLink}
                  className="text-gray-800 hover:uppercase  flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ExternalLinkIcon className="w-4 h-4 ml-1" />
                </a>
                <a
                  href={project.liveSiteLink}
                  className="text-gray-800 hover:uppercase flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                  <ExternalLinkIcon className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
