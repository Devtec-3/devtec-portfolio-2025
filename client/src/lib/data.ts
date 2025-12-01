import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import resumeAsset from "@assets/DevTech_Resume_1764586108597.docx";

export const personalInfo = {
  name: "Muhammad Abdulwadud Ayinde",
  nickname: "Devtec",
  title: "Frontend Developer",
  email: "muhammadabdulwadudalata@gmail.com",
  phone: "08112840602",
  location: "Ilorin, Nigeria",
  about: "Frontend Developer with 2 years of experience building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Angular, and Bootstrap. I work well on a team and am adaptable to challenging situations. I work well under pressure and adhere to strict deadlines.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Devtec-3",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/devtec3",
      icon: Linkedin,
    },
    {
      name: "Twitter / X",
      url: "https://x.com/abdulwadudmuha5",
      icon: Twitter,
    },
  ],
};

export const skills = [
  "HTML", "CSS", "JavaScript", "React", "Angular", "Tailwind CSS", "Bootstrap", "Git/GitHub", "Vercel", "Vercel AI SDK"
];

export const experience = [
  {
    company: "SystemSpecs (Remita)",
    location: "Lagos, Nigeria",
    role: "Frontend Developer",
    period: "2025 - Present",
    description: [
      "Built and optimized responsive user interface using HTML, CSS, JavaScript, Angular, and Bootstrap.",
      "Collaborated with backend developers to integrate APIs and enhance web functionality.",
      "Assisted in debugging and testing web applications for better performance.",
      "Contributed to UI/UX improvement for internal and client-facing platforms."
    ]
  },
  {
    company: "MALHUB",
    location: "Ilorin, Nigeria",
    role: "Frontend Trainee",
    period: "2023 - 2025",
    description: [
      "Completed intensive training in frontend technologies including HTML, CSS, JavaScript, and React.",
      "Developed hands-on projects to strengthen web development and design skills.",
      "Learned version control using Git and GitHub for collaborative projects.",
      "Participated in coding challenges and peer code reviews to improve best practices."
    ]
  }
];

export const education = [
  {
    institution: "Kwara State University, Malete",
    degree: "B.Sc. Computer Science",
    period: "2022 - 2026",
    details: "Relevant Coursework: Web Development, Data Structure, Software Engineering. Key Projects: Built Student Attendance Management System. Activities: Tech Club Member."
  },
  {
    institution: "Aspire Institute",
    degree: "Aspire Leaders Program Fellow",
    period: "2025",
    details: "Selected for Harvard-affiliated global leadership development program. Engaged in leadership, communication, and career development training with peers from 100+ countries."
  }
];

export const projects = [
  {
    title: "Student Attendance Management System",
    description: "A comprehensive system for tracking student attendance, built as a key project during university studies. Features include real-time tracking, reporting, and user management.",
    tags: ["React", "Node.js", "Database", "UI/UX"],
    link: "https://github.com/Devtec-3", // Placeholder link
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "E-commerce Dashboard",
    description: "A modern, responsive dashboard for managing online store inventory, sales analytics, and customer data. Features dark mode and data visualization.",
    tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
    link: "https://github.com/Devtec-3",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Task Manager App",
    description: "A productivity application helping users organize daily tasks with drag-and-drop functionality, priority levels, and progress tracking.",
    tags: ["Angular", "TypeScript", "Bootstrap", "API Integration"],
    link: "https://github.com/Devtec-3",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop"
  }
];

export const resumeUrl = resumeAsset;