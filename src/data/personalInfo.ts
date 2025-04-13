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
      grade: "CGPA: 8.96",
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
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "EmoStream: Concurrent Emoji Broadcast",
      description: "Real-time emoji aggregation system for live sporting events, processing billions of emoji reactions concurrently using Apache Kafka and Apache Spark.",
      tags: ["Kafka", "Apache Spark", "Real-time Processing"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "ARVR Battleship Game Online",
      description: "Developed a 1v1 online battleship game using Three.js for 3D rendering and Firebase for real-time multiplayer backend. Deployed on Vercel.",
      tags: ["Three.js", "Firebase", "Vercel"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "Sports Management System",
      description: "Professional sports management platform with React frontend and MySQL backend.",
      tags: ["React", "MySQL", "Management System"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "Chat Server Using SSL",
      description: "Secure chat server implementation with SSL encryption for private communication.",
      tags: ["SSL", "Networking", "Security"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "FTP-SSL Server Using C",
      description: "File Transfer Protocol server with SSL encryption for secure file transfers.",
      tags: ["C", "FTP", "SSL"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "Food Recommendation Website",
      description: "Responsive MERN stack website with advanced routing and a seamless user experience.",
      tags: ["MERN Stack", "Recommendations", "Responsive Design"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "Lock System Using C++",
      description: "Secure lock system with password generator for enhanced authentication.",
      tags: ["C++", "Security", "Authentication"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "Schemes Management System Using C",
      description: "Efficient scheme recommendation system using a binary search tree for fast retrieval.",
      tags: ["C", "Data Structures", "Management System"],
      githubLink: "https://github.com/pranavacchu",
    },
    {
      title: "Paper Publication",
      description: "Automating Tag Prediction in Stack Overflow Using Machine Learning and Deep Learning Techniques, accepted for publication at ICTIS 2025 (Bangkok, Thailand).",
      tags: ["Machine Learning", "Deep Learning", "Research Paper"],
    },
  ],
  skills: [
    {
      category: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React", "MERN Stack"],
    },
    {
      category: "Design Tools",
      items: ["Canva", "Photoshop"],
    },
    {
      category: "Programming Languages",
      items: ["C/C++", "Java", "Python", "Node.js"],
    },
    {
      category: "Databases",
      items: ["SQL/MySQL"],
    },
    {
      category: "Machine Learning",
      items: ["AI/ML", "Deep Learning", "Generative AI", "RAG", "Model Development"],
    },
    {
      category: "Operating Systems",
      items: ["Linux", "Windows"],
    },
    {
      category: "Big Data",
      items: ["Hadoop", "Kafka", "Apache Spark"],
    },
    {
      category: "Cloud",
      items: ["AWS"],
    },
    {
      category: "Networking",
      items: ["TCP/IP", "SSL"],
    },
    {
      category: "Languages",
      items: ["English (Fluent)"],
    },
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
