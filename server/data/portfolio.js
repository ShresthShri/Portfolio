const portfolioData = {
    about: {
      name: "Shresth Shrivastava",
      email: "shresthshrivastava5@gmail.com",
      summary: [
        "As a software engineer and creative technologist, I’m driven by a desire to build elegant, impactful solutions — whether it’s through technical systems or thoughtful design. With a strong foundation in Computer Systems, Machine Learning, and Object-Oriented Design, I’ve applied my skills across academic, entrepreneurial, and personal projects.",
        "I originally come from an Aerospace Engineering background, where I developed a deep appreciation for precision, system integration, and high-stakes problem-solving. That experience continues to influence how I think about software — especially in domains like autonomous systems, simulation, and embedded computing.",
        "I’m particularly interested in the intersection of aerospace and advanced computing, and how real-time systems, control theory, and AI come together in critical environments.",
        "My journey since has included building scalable web applications, experimenting with cloud infrastructure, and exploring systems design through technologies like Python, C++, React, and even Pentium assembly. I enjoy crafting full-stack projects that are as performant as they are intuitive — and I take pride in bridging the gap between backend logic and frontend experience.",
        "In 2024, I began my MSc in Computing at Imperial College London to deepen my expertise in core computing principles and explore career paths in intelligent systems, quant development, or product-focused engineering.",
        "If you’re passionate about thoughtful problem-solving, fascinated by the interface between software and the physical world, or just curious to connect — I’d love to hear from you."
      ],      
      github: "https://github.com/ShresthShri",
      linkedin: "https://linkedin.com/in/shresthshrivastava",
    },
    education: [
      {
        institution: "Imperial College London",
        degree: "MSc Computing",
        dates: "Sept 2024 – Sept 2025",
        details: "Highlighted Modules: ML, Computer Vision, Distributed Ledgers, Software Engineering. Dissertation: Adversarial ML for Drone Navigation Security.",
      },
      {
        institution: "University of Manchester",
        degree: "MEng Aerospace Engineering with Industrial Exp",
        dates: "Sept 2018 – July 2023",
        details: "Final year project: Regression ML model for aerodynamic flow prediction (Python + MATLAB). Ranked 2nd in Bachelors year.",
      }
    ],
    experience: [
      {
        company: "Stars Edge",
        title: "Design and Development Engineer – Freelance",
        dates: "Oct 2023 – Sept 2024",
        points: [
          "Performed advanced simulations (Ansys Fluent) and built automated validation pipelines.",
          "Developed technical materials and pitch decks, raising £10,500 in investor funding.",
          "Contributed to R&D of next-gen aerospace systems, integrating aerodynamics with system modeling."
        ]
      },
      {
        company: "BAE Systems",
        title: "Through Life Support Engineer & ML Engineer",
        dates: "July 2021 – June 2022",
        points: [
          "Built ML models for aircraft sensor data classification in TensorFlow and PyTorch.",
          "Developed supervised models for satellite image segmentation with 95%+ accuracy.",
          "Automated report generation and analytics dashboards for engineering teams.",
          "Collaborated across departments to improve predictive maintenance workflows."
        ]
      }
    ],
    projects: [
      {
        title: "Drone Flight Optimisation",
        tech: ["Python", "LiDAR", "A*", "Geospatial Data"],
        description: "Energy-efficient drone path planning with terrain-awareness and vertical cost bias. Computation under 1 second.",
        github: "https://github.com/ShresthShri/drone-flight-opt",
      },
      {
        title: "Cargo Ship Classifier",
        tech: ["PyTorch", "ML", "Satellite Imagery"],
        description: "Classified ships using satellite images with 95% accuracy using supervised learning.",
      },
      {
        title: "CanSat Satellite Design",
        tech: ["SolidWorks", "CAD", "Mechanical Design"],
        description: "Led the 3D printed design of a mini satellite, achieving weight reduction and better descent performance.",
      }
    ],
    skills: [
      "Python", "C++", "JavaScript", "PostgreSQL",
      "PyTorch", "TensorFlow", "MATLAB", "Simulink",
      "SolidWorks", "Azure", "Jira"
    ]
  };
  
  module.exports = portfolioData;
  