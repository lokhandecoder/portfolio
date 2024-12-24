import React from "react";

function Intro() {
  const calculateExperience = () => {
    const startDate = "2022-07-03"; // Example start date (change as needed)
    const currentDate: Date = new Date();
    const start: Date = new Date(startDate);
    const diffInMilliseconds: number = +currentDate - +start; // Explicitly cast to number
    const millisecondsInYear: number = 1000 * 60 * 60 * 24 * 365.25;
    const yearsOfExperience: number = diffInMilliseconds / millisecondsInYear;
    return parseFloat(yearsOfExperience.toFixed(2));
  };
  const message1 = `A passionate and dedicated Full-Stack Developer with ${calculateExperience()} years of experience in building dynamic, scalable, and high-performing web applications. I specialize in using React for creating responsive, user-friendly front-end interfaces, while leveraging .NET technologies to build robust back-end systems that power seamless web experiences.`;
  const message2 = `Throughout my journey as a developer, I've had the opportunity to work on diverse projects, from complex enterprise-level applications to smaller, more agile solutions, always with a focus on clean code, efficient performance, and user-centric design. My goal is to deliver impactful digital solutions that not only meet business objectives but also exceed user expectations`;


  return <div>{message1}<br></br><br></br>{message2}</div>;
}

export default Intro;
