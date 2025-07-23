interface Education {
  institution: string;
  degree: string;
  grade: string;
  period: string;
}

interface Experience {
  role: string;
  company?: string;
  period?: string;
  responsibilities: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLink?: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Achievement {
  description: string;
}

export const personalInfo = {
  name: "Pranav Acharya",
  socialLinks: {
    github: "https://github.com/pranavacchu",
    linkedin: "https://www.linkedin.com/in/pranavacchu",
  },
  contact: {
    email: "pranavacharya360@gmail.com",
    phone: "7022939074",
    location: "Bengaluru, Karnataka, India",
  },
  summary: "A motivated sixth-semester engineering student with a strong passion for integrating creativity with technology. Proficient in web development and design, with advanced skills in HTML, CSS, JavaScript, React, and design tools such as Canva and Photoshop. Experienced in multiple programming languages, including C++, C, Java, Node.js, and Python. Well-versed in machine learning, generative AI, and deep learning concepts, with a focus on leveraging these technologies to address complex challenges and drive innovation.",
  education: [
    {
      institution: "PES University, Bengaluru",
      degree: "Bachelor of Technology in Computer Science",
      grade: "CGPA: 9.01",
      period: "2022 – 2026",
    },
    {
      institution: "BASE Sahakar Nagar",
      degree: "2nd PUC",
      grade: "96.8%, State Rank 18",
      period: "2020 – 2022",
    },
    {
      institution: "Vidyaniketan School, Bengaluru",
      degree: "ICSE",
      grade: "97%",
      period: "2010 – 2020",
    },
  ],
  experience: [
    {
      role: "Software Development Intern",
      company: "GoWarm",
      period: "Present",
      responsibilities: [
        "Contributing to the development of a scalable SaaS platform designed to empower Go-To-Market (GTM) teams in marketing and sales.",
        "Actively involved in implementing new features and improving existing functionalities across the full stack in an agile development environment.",
        "Working with a modern technology stack including Python, Java (Spring Boot), React.js, and MongoDB, with deployment and infrastructure managed on Microsoft Azure.",
        "Writing clean, maintainable, and production-ready code, with a focus on performance, scalability, and reliability.",
        "Collaborating closely with senior engineers and cross-functional teams through regular sprint planning, code reviews, and daily stand-ups.",
        "Gaining hands-on experience in RESTful API development, frontend component design, and backend logic implementation.",
        "Developing a deep understanding of SaaS application architecture, CI/CD pipelines, and cloud-based deployment workflows.",
      ],
    },
    {
      role: "Summer Internship at CDSAML",
      period: "2024",
      responsibilities: [
        "Worked on a deep learning hybrid model using GRU and CNN for predicting tags of Stack Overflow questions.",
        "Contributing to a paper publication.",
      ],
    },
    {
      role: "Head of Design – Encode AI",
      responsibilities: [
        "Led the design team, overseeing creation of the main event poster, club logo, and event ticket passes.",
        "Managed recruitment and mentoring of junior designers, ensuring alignment with the club's creative vision.",
      ],
    },
    {
      role: "Design Team Member – Alcoding Club",
      responsibilities: [
        "Contributed to weekly contest poster designs and social media content.",
        "Maintained consistent and engaging branding for the club's online presence.",
      ],
    },
  ],
  projects: [
    {
      title: "Agricultural Yield, Price Forecasting, and Crop Disease Detection System",
      description: "1st place hackathon project implementing SARIMAX and deep learning models (CNN-ResNet, Transformers) with FastAPI backend and React frontend.",
      tags: ["Deep Learning", "FastAPI", "React"],
      githubLink: "https://github.com/pranavacchu/AgroBOT.git",
    },
    {
      title: "EmoStream: Concurrent Emoji Broadcast",
      description: "Real-time emoji aggregation system for live sporting events, processing billions of emoji reactions concurrently using Apache Kafka and Apache Spark.",
      tags: ["Kafka", "Apache Spark", "Real-time Processing"],
      githubLink: "https://github.com/pranavacchu/EmoStream-Concurrent-Emoji-Broadcast.git",
    },
    {
      title: "ARVR Battleship Game Online",
      description: "Developed a 1v1 online battleship game using Three.js for 3D rendering and Firebase for real-time multiplayer backend. Deployed on Vercel.",
      tags: ["Three.js", "Firebase", "Vercel"],
      githubLink: "https://github.com/pranavacchu/ARVR-project-battleship.git",
    },
    {
      title: "Enhanced RAG System for YouTube",
      description: "Multimodal retrieval-augmented generation platform with dual operation modes (RAG/Agent) that dynamically extracts knowledge from YouTube videos using advanced prompting techniques.",
      tags: ["RAG", "NLP", "Knowledge Extraction"],
      githubLink: "https://github.com/pranavacchu/enhanced-rag-system-for-youtube.git",
    },
    {
      title: "Advanced Reinforcement Learning for Ultimate Tic-Tac-Toe",
      description: "AI-powered game featuring neural networks and PPO algorithms with three difficulty levels and responsive UI design.",
      tags: ["Reinforcement Learning", "Neural Networks", "Game Development"],
      githubLink: "https://github.com/pranavacchu/Advanced-Reinforcement-Learning-for-Mastering-Ultimate-Tic-Tac-Toe.git",
    },
    {
      title: "Application Monitoring Dashboard",
      description: "Comprehensive log analytics and monitoring platform using Kafka, Prometheus, Loki, and Grafana for real-time application performance insights.",
      tags: ["Kafka", "Grafana", "Monitoring"],
      githubLink: "https://github.com/pranavacchu/Application-Monitoring-Dashboard-using-Kafka.git",
    },
    {
      title: "Course Registration System",
      description: "Robust course registration platform using Maven and Spring Boot, implementing secure user authentication and efficient course management features.",
      tags: ["Spring Boot", "Maven", "Web Application"],
      githubLink: "https://github.com/pranavacchu/Course-registration-system-using-Maven-and-Spring-Boot.git",
    },
    {
      title: "Sports Management System",
      description: "Professional sports management platform with React frontend and MySQL backend.",
      tags: ["React", "MySQL", "Management System"],
      githubLink: "https://github.com/pranavacchu/Sports-Coaching-Management-using-React-and-MySQl.git",
    },
    {
      title: "Food Recommendation Website",
      description: "Responsive MERN stack website with advanced routing and a seamless user experience.",
      tags: ["MERN Stack", "Recommendations", "Responsive Design"],
      githubLink: "https://github.com/pranavacchu/food-recommendation-website.git",
    },
    {
      title: "Login System",
      description: "Secure authentication system with modern security practices.",
      tags: ["Security", "Authentication", "Web Development"],
      githubLink: "https://github.com/pranavacchu/login-system.git",
    },
    {
      title: "Savings Scheme Management",
      description: "Efficient scheme recommendation system using a binary search tree for fast retrieval.",
      tags: ["C", "Data Structures", "Management System"],
      githubLink: "https://github.com/pranavacchu/Savings-scheme-management.git",
    },
    {
      title: "Paper Publication",
      description: "Automating Tag Prediction in Stack Overflow Using Machine Learning and Deep Learning Techniques, accepted for publication at ICTIS 2025 (Bangkok, Thailand).",
      tags: ["Machine Learning", "Deep Learning", "Research Paper"],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C/C++", "SQL"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "React", "Node.js", "MERN Stack"]
    },
    {
      category: "AI & Data Science",
      items: ["AI/ML", "RAG", "Model Development"]
    },
    {
      category: "Tools & Platforms",
      items: ["Photoshop", "Canva", "Linux", "AWS/Cloud"]
    }
  ],
  achievements: [
    {
      description: "Awarded the CNR Scholarship for all five semesters (top 20% of batch)",
    },
    {
      description: "1st place at Arithemania 4.0 – PES CSE department's flagship hackathon (team of 4 among 120 teams)",
    },
    {
      description: "Participated in and organized multiple hackathons",
    },
    {
      description: "Winner of several art competitions",
    },
    {
      description: "Completed two-month SUPW (Social Service) at PAPCP",
    },
  ],
};
