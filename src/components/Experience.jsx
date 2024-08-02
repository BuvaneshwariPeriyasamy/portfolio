import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <div className="flex justify-between"><h1 className="text-xl text-left ">Pulsus Group</h1><h1 className="text-xl text-left ">Feb, 2023 - Present</h1></div>
        <div className="flex justify-between"><h3 className={`${styles.sectionText } mt-3 text-xl`}>Program Coordinator</h3><h3 className={`${styles.sectionText } mt-3 text-xl`}>Hyderabad, Telangana</h3></div>
        <div className=" mt-5 text-justify">
         <p>
         Increased conference attendance by 30 percent to 50+ attendees through targeted communication strategies and
engaging marketing materials. Led cross-functional team to manage all aspects of logistics, ensuring seamless
event execution. Orchestrated impactful client interactions, consistently exceeding team goals; Fostered meaningful connections
         resulting in a 30% increase in client retention and a 15% boost in upsell revenue, surpassing quarterly targets.</p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
