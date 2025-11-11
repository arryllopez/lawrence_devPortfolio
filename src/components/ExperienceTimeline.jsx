import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      company: "STEM Camp",
      position: "Summer Camp Counsellor (Seasonal Role)",
      duration: "June 2024 - Present",
      achievements: [
        "Facilitated interactive workshops on fundamental STEM concepts for diverse learners, fostering engagement and curiosity in science and technology.",
        "Delivered lessons on Scratch, MakeCode, and Edison robot programming, helping students create games and robotics projects that build computational thinking.",
      ],
      skills: ["STEM Education", "Scratch", "MakeCode", "Edison Robotics", "Leadership"],
    },
    {
      id: 2,
      company: "BGC Durham",
      position: "After-School Program Activity Leader",
      duration: "September 2024 - Present",
      achievements: [
        "Oversaw the safety of young children while maintaining a positive, inclusive learning environment.",
        "Implemented interactive teaching strategies to sustain engagement and excitement during classroom activities.",
        "Collaborated with a large team of activity leaders to coordinate and manage daily schedules effectively.",
      ],
      skills: ["Team Collaboration", "Child Supervision", "Classroom Engagement", "Communication"],
    },
  ];

  const [color] = React.useState("rgb(37, 99, 235)"); // blue tone

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Hide the timeline line on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500" />

          {experiences.map((experience, index) => (
            <TimelineCard
              key={experience.id}
              experience={experience}
              index={index}
              timelineColor={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ experience, index, timelineColor }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center mb-16`}
    >
      <div className="md:w-1/2 px-4 mb-8 md:mb-0">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-transparent">
          <h3 className="text-xl font-semibold text-gray-900">
            {experience.position}
          </h3>
          <p className="text-gray-600">{experience.company}</p>
          <p className="text-gray-500 mb-4">{experience.duration}</p>

          <div className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <p key={i} className="text-gray-700">
                • {achievement}
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline dot — hidden on mobile */}
      <div className="hidden md:flex md:w-10 justify-center mb-8 md:mb-0">
        <div
          className="w-5 h-5 rounded-full shadow-md transition-colors duration-500"
          style={{ backgroundColor: timelineColor }}
        />
      </div>

      <div className="md:w-1/2" />
    </motion.div>
  );
};

export default ExperienceTimeline;
