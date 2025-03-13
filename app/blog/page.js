"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Mastering Problem Solving ",
      date: "May, 2024",
      content:
        "Hey everyone! 👋 As a junior programmer, I understand the challenges of problem-solving all too well. Recently, a friend shared an article with me that highlighted a startling statistic: 99% of programmers struggle with this essential skill (shocking isnt it?). Coincidentally, I was already reading a book I discovered about problem-solving, Think Like a Programmer by V. Anton Spraul. This got me thinking that it’s definitely worth sharing. I must say, reading just the first chapter of Think Like a Programmer made a remarkable difference in my approach. The insights and techniques presented in that chapter alone transformed the way I think about problem-solving. This book offers valuable insights, practical techniques, and real-world examples that can truly transform your problem-solving abilities.",
    },
    {
      id: 2,
      title: "Connecting Programming Concepts: Beyond Syntax",
      date: "January, 2024",
      content:
        "In the past 8 months, I have made notable progress in my programming journey. It was not just about knowing syntax, but rather the ability to apply concepts effectively and connect the programming dots. Mastering syntax is important, but true expertise lies in understanding how to utilize these concepts in the right places. By focusing on connecting the dots between programming concepts, I have discovered new levels of creativity and efficiency. I have emphasized conceptual understanding, explored real-world examples, collaborated with a supportive community, and embraced continuous learning. These efforts have greatly enhanced my ability to connect programming concepts in innovative ways.",
    },
    {
      id: 3,
      title: " Embracing Uncertainty in Your Programming Career ",
      date: "December, 2023",
      content:
        "The feeling of uncertainty and not knowing what to do or where you are going in your programming career is a common experience for many individuals, especially in a field that is dynamic and rapidly evolving. This sense of uncertainty can be unsettling, but it is important to recognize that it is a natural part of professional growth. Here are some common feelings associated with this situation and how to navigate them: 1️ Overwhelmed: Solution: Break down your goals into smaller, manageable tasks. Focus on acquiring one skill or understanding one concept at a time. Seeking guidance from mentors, colleagues, or online communities can also help you gain clarity.2️ Impostor Syndrome: Solution: Remember that many professionals, even experienced ones, face moments of self-doubt. Celebrate your achievements and acknowledge your progress. Surround yourself with a supportive network, and do not be afraid to seek feedback. 3️ Lack of Direction: Solution: Take some time for self-reflection. Identify your interests, strengths, and areas you would like to explore further. Set short-term and long-term goals, and consider seeking advice from experienced professionals or mentors. 4️ Fear of Making the Wrong Choice: Solution: Understand that your career path may not be linear, and it is okay to make changes along the way. Embrace the learning process and view challenges as opportunities for growth. Make informed decisions but be open to adapting your plans as needed. 5 Comparing Yourself to Others: Solution: Avoid comparing your journey to others. Each person career path is unique, and what works for one may not work for another. Focus on your own goals and progress, and use others experiences as inspiration rather than a measuring stick. 6️ Continuous Learning Pressure: Solution: Acknowledge that the tech industry is constantly evolving, and no one knows everything. Cultivate a mindset of continuous learning, but balance it with an understanding that it is okay not to know everything at once. Set realistic learning goals.7️ Seeking Validation: Solution: While seeking feedback and validation is important, be cautious about relying too heavily on external opinions. Trust your instincts, learn from experiences, and use feedback as a tool for improvement rather than as a measure of your worth. Remember that your programming career is a journey not a destination. Embrace the learning process, stay curious and be open to adapting your goals.",
    },
    {
      id: 4,
      title:
        "Typing > Copy-Pasting: A Programmers Game-Changer!Embracing Uncertainty in Your Programming Career",
      date: "November, 2023",
      content:
        "#Speaking from experience: Type instead of copy-pasting! 💪 Engage your mind, improve focus, and unlock creativity by manually coding. It iss a game-changer! It boosts accuracy,productivity, and your programming skills. 🌟",
    },
    {
      id: 5,
      title:
        " 🚀🎓 Struggling to Launch Your Developer Career? You are Not Alone! 🌟",
      date: "September, 2023",
      content:
        "👩‍💻👨‍💻As a beginner developer! Today, I wanted to take a moment to shed some light on the challenges that many beginner developers face when trying to land their first job in the tech industry. 🎯🌱 As a beginner developer, breaking into the industry can be a daunting task. The job market is highly competitive, and it often feels like you are caught in a catch-22 situation—employers require experience, but how can you gain experience without getting that first job? It is a classic dilemma! 😫💡 But fear not! I am here to tell you that perseverance and a strategic approach can help you overcome these obstacles and kick-start your dream career. Here are a few tips to keep in mind: 1️ Build a Strong Foundation: Invest time in mastering the fundamental coding languages and concepts. Building a solid foundation will not only boost your confidence but also impress potential employers. 2️ Showcase Your Projects: Employers love to see practical examples of your skills. Create a portfolio of projects that highlight your abilities and demonstrate your passion for coding. It is a great way to make yourself stand out from the crowd! 3️ Network, Network, Network: Attend tech meetups, conferences, and online forums to connect with professionals in the industry. Building relationships and seeking advice from experienced developers can open doors and provide valuable insights. 4️ Gain Real-World Experience: Look for internships, freelance gigs, or volunteer opportunities to gain practical experience. Even if they are unpaid or part-time, they can provide valuable learning opportunities and help you build your resume. 5️ Leverage Online Learning: Take advantage of the wealth of online resources available. Platforms like Coursera, Udemy, and Codecademy offer a wide range of courses to enhance your skills and fill any knowledge gaps. 6️ Be Persistent and Stay Positive: Landing your first job may take time, but do not get discouraged. Stay focused, keep honing your skills, and maintain a positive mindset. Remember, every rejection brings you one step closer to your ultimate success! 🌟 At the end of the day, remember that every successful developer was once a beginner too. Embrace the challenges, stay hungry for knowledge, and keep pushing forward. Your dream job is within reach!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-24 py-12 h-[480px]">
      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <div className="text-gray-800">
              {expandedPosts.includes(post.id) ? (
                <React.Fragment>
                  {post.content}
                  <button
                    className="text-blue-600 cursor-pointer"
                    onClick={() => toggleExpand(post.id)}
                  >
                    Show Less
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {post.content.length > 200 ? (
                    <React.Fragment>
                      {post.content.slice(0, 200)}...
                      <button
                        className="text-blue-600 cursor-pointer"
                        onClick={() => toggleExpand(post.id)}
                      >
                        Read More
                      </button>
                    </React.Fragment>
                  ) : (
                    post.content
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
