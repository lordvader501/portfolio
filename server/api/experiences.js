import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: "Experience",
      icon: "briefcase-outline",
      list: [
        {
          name: "BMC Software",
          position: "R&D Intern",
          duration: "Jan 2024 - Jun 2024",
          description: [
            "Collaboratively developed a chatbot performing 30+ mainframe commands with voice communication, enhancing user interaction by 40%.",
            "Automated testing with Jenkins for backend and frontend, reducing manual testing time by 60%.",
            "Designed and implemented REXX code for audit reports with admin-restricted access for both chatbot and  voicebot systems, increasing audit efficiency by 50% and ensuring security compliance.",
          ],
          skills: [
            "Angular",
            "Python",
            "Flask",
            "JPype",
            "TypeScript",
            "SCSS",
            "Adapt",
            "Rexx",
            "Redis",
            "Jenkins",
            "Mainframe",
          ],
        },
        {
          name: "Bili Consultancy",
          position: "Frontend Developer",
          duration: "Sep 2023 - Dec 2023",
          description: [
            "Developed and implemented a user-friendly website for various clients. For example Link.",
            "Collaborated with cross-functional teams to gather requirements, design mockups, and perform code reviews and debugging.",
            "Optimized website loading speed by 30% through image compression, CSS minification, caching techniques, and lazy loading, improving user experience and reducing bounce rate.",
          ],
          skills: [
            "NextJs",
            "ReactJs",
            "JavaScript",
            "CSS",
            "Tailwind CSS",
            "Ant-Design",
            "Redux",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Education",
      icon: "book-outline",
      list: [
        {
          name: "RCC Institute of Information Technology",
          duration: "Sep 2021 - July 2025",
          courses: [
            "Data Structure and Algorithms",
            "Database Management System",
            "Computer Networking",
            "Object Oriented Programming",
            "Operating System",
          ],
        },
        {
          name: "Teressa International Academy",
          duration: "2018 - 2020",
        },
        {
          name: "Dr Dram D.A.V Public School",
          duration: "2018 - 2020",
        },
      ],
    },
  ];
});
