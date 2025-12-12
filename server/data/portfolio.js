const portfolioData = {
    about: {
      name: "Shresth Shrivastava",
      email: "shresthshrivastava5@gmail.com",
      summary: [
        "I'm a Lead Software Engineer at Celestia Energy, where I develop critical software architecture for drone communication, tracking, and safety systems. I recently completed my MSc in Computing with Distinction at Imperial College London, focusing on adversarial machine learning for autonomous drone navigation security.",
        "With a background in Aerospace Engineering (MEng, First Class, ranked 2nd) from the University of Manchester, I've worked across the aerospace-software spectrum — from flight systems integration at BAE Systems to building ML models for satellite imagery analysis and electromagnetic testing optimization.",
        "I specialize in the intersection of aerospace and advanced computing: autonomous systems, reinforcement learning, real-time control systems, and safety-critical software. My tech stack spans Python, C++, PyTorch, React, and embedded systems (MAVLink, PX4, QGroundControl).",
        "I'm passionate about building elegant solutions at the intersection of software and the physical world — whether it's optimizing drone flight paths, securing RL-based navigation systems, or developing full-stack applications for travel planning and fintech. I'm particularly interested in intelligent systems, quantitative development, and applications of game theory and philosophy to technical problem-solving.",
        "If you're working on autonomous systems, ML security, or just want to discuss the intersection of aerospace and AI — I'd love to connect."
      ],
      github: "https://github.com/ShresthShri",
      linkedin: "https://www.linkedin.com/in/shresth-shrivastava/",
    },
    education: [
      {
        institution: "Imperial College London",
        degree: "MSc Computing",
        dates: "Sept 2024 – Sept 2025",
        points: [
          "Relevant Modules: Machine Learning, Software Engineering, Distributed Ledgers, and Computer Vision.",
          "Dissertation: Adversarial Machine Learning for Drone Navigation Security."
        ]
      },
      {
        institution: "University of Manchester",
        degree: "MEng Aerospace Engineering with Industrial Experience",
        dates: "Sept 2018 – July 2023",
        points: [
          "Final Year Project: Regression model for aerodynamic flow prediction (Python + MATLAB).",
          "Industrial year at BAE Systems with roles in ML, system integration, and flight clearance.",
          "Ranked 2nd overall in Bachelor's year."
        ]
      }
    ],
    experience: [
      {
        company: "Celestia Energy",
        title: "Lead Software Engineer",
        dates: "Sept 2025 – Present",
        points: [
          "Developed the software architecture for Drone Communication, tracking and safety critical flows.",
          "Worked with MAVLink, PX4, SITL and QGroundControl for drone simulation testing.",
          "Built a full stack architecture system for ground to drone communication.",
          "Implemented software modules involving integrity, communication and safety system monitoring."
        ]
      },
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
        company: "Stars Edge",
        title: "Business Development Representative – Freelance",
        dates: "Oct 2023 – Sept 2024",
        points: [
          "Conducted comprehensive market research to identify potential clients, competitors, and trends in the space propulsion industry.",
          "Generated leads through networking, events, and cold outreach, converting them into sales opportunities.",
          "Built and maintained relationships with investors, stakeholders, and academics to foster collaboration and strategic engagement.",
          "Created compelling proposals, presentations, and pitch decks, raising nearly £10,500 in early-stage funding."
        ]
      },
      {
        company: "BAE Systems",
        title: "Through Life Support Engineer",
        dates: "July 2021 – June 2022",
        points: [
          "Expanded and constructed the framework of skills for incoming Through Life Support Engineers.",
          "Supported life-cycle engineering documentation and reliability assessments for ongoing aircraft platforms."
        ]
      },
      {
        company: "BAE Systems",
        title: "Data Scientist",
        dates: "July 2021 – June 2022",
        points: [
          "Improved and accelerated the efficiency of Electromagnetic testing procedures on an aircraft using a regression ML model (88% accuracy) developed in Python and in collaboration with test engineers.",
          "Presented project findings, and the market opportunity for ML to stakeholders presenting the results and the cost saving benefit of using ML to predict test data instead of undertaking physical testing."
        ]
      },
      {
        company: "BAE Systems",
        title: "Flight Systems Integration Engineer",
        dates: "July 2021 – June 2022",
        points: [
          "Coordinated and managed clearance documents alongside system engineers while working in the General Systems Integration Team in the Eurofighter Team.",
          "Directed and guided team members in the utilisation of the DOORS software for requirements management."
        ]
      },
      {
        company: "BAE Systems",
        title: "Junior Stretch Assignment – Machine Learning Engineer",
        dates: "July 2021 – June 2022",
        points: [
          "Developed a supervised ML system classifying cargo ships using satellite images with the PyTorch framework, for a stretch assignment project achieving an astounding accuracy of 95%.",
          "Presented project findings, and the market opportunity for ML to organisations, culminating in the project being funded and expanded."
        ]
      }
    ],
    projects: [
      {
        title: "Securing RL-Based Drone Navigation Against Reward Manipulation",
        tech: ["Python", "Reinforcement Learning", "Adversarial ML", "Drone Security"],
        description: "MSc dissertation investigating adversarial attacks on reinforcement learning models for autonomous drone navigation. Developed defense mechanisms to detect and mitigate reward manipulation attacks in safety-critical systems.",
        github: null,
      },
      {
        title: "Drone Flight Optimisation",
        tech: ["Python", "LiDAR", "A*", "Geospatial Data"],
        description: "Energy-efficient drone path planning with terrain-awareness and vertical cost bias. Computation under 1 second.",
        github: "https://github.com/ShresthShri/drone-flight-opt",
      },
      {
        title: "Voya – Travel and Itinerary Website",
        tech: ["React", "Supabase", "LangChain", "OpenAI", "Azure", "Microservices"],
        description: "Co-developed Voya Trips, a swipe-based travel planning platform that generates personalized itineraries using LLM-powered recommendations. Integrated Supabase, LangChain, Azure Cloud, and APIs from OpenAI and Perplexity to deliver seamless trip discovery with intelligent suggestions.",
        github: "https://github.com/travelator"
      },      
      {
        title: "Zero Knowledge Proof Blockchain Trading Algorithm",
        tech: ["Blockchain", "Zero-Knowledge Proofs", "Hackathon", "Privacy Tech"],
        description: "Engineered a zero-knowledge proof algorithm designed to enable anonymous trading over blockchain. Built in a team during a hackathon, achieving 4th place overall for innovation and implementation.",
        github: "https://github.com/ShresthShri/imperial-college-hackathon" // use real repo if it exists
      },
      {
        title: "Automated Trading Bot",
        tech: ["Python", "API Integration", "Market Data", "Algo Trading"],
        description: "Developed a Python-based trading bot that executes trades based on real-time market data. Integrated APIs from major financial platforms to analyze price movements and make autonomous buy/sell decisions.",
        github: "https://github.com/ShresthShri/TradingBot" // use real repo if it exists
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
      "Python", "C++", "HTML", "CSS", "SQL", "JavaScript", "React",
      "PyTorch", "Power BI", "TensorFlow", "Angular",
      "MATLAB", "Simulink", "LabVIEW", "Catia",
      "SolidWorks", "Azure", "DOORS", "Jira", "Tailwind CSS"
    ]
  };
  
  module.exports = portfolioData;
  