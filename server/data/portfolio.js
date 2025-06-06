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
        title: "Data Scientist (ML for Testing)",
        dates: "July 2021 – June 2022",
        points: [
          "Improved and accelerated Electromagnetic testing procedures using regression ML (88% accuracy) in Python with TensorFlow.",
          "Presented ML results and cost-saving impact to internal stakeholders, demonstrating ROI over physical testing."
        ]
      },
      {
        company: "BAE Systems",
        title: "Flight Systems Integration Engineer",
        dates: "July 2021 – June 2022",
        points: [
          "Managed clearance documents and collaborated with systems engineers in the Eurofighter General Systems Integration team.",
          "Directed engineers on DOORS software usage for effective requirements management and tracking."
        ]
      },
      {
        company: "BAE Systems",
        title: "Machine Learning Engineer – Satellite Imagery",
        dates: "July 2021 – June 2022",
        points: [
          "Implemented supervised ML in PyTorch to classify cargo ships in satellite imagery with 95% accuracy.",
          "Presented findings and commercial potential to executives, resulting in project funding and expansion."
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
        title: "Voya – Travel and Itinerary Website",
        tech: ["React", "Supabase", "LangChain", "OpenAI", "Azure", "Microservices"],
        description: ["Co-developed Voya Trips, a swipe-based travel planning platform that generates personalized itineraries using LLM-powered recommendations.", 
                      "Integrated Supabase, LangChain, Azure Cloud, and APIs from OpenAI and Perplexity to deliver seamless trip discovery with intelligent suggestions."],
        github: "https://github.com/travelator" // update if hosted elsewhere
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
      "Python", "C++", "JavaScript", "PostgreSQL",
      "PyTorch", "TensorFlow", "MATLAB", "Simulink",
      "SolidWorks", "Azure", "Jira", "React", "TailWindCSS"
    ]
  };
  
  module.exports = portfolioData;
  