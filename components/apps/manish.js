import React, { Component, useState } from 'react';
import ReactGA from 'react-ga4';
export class AboutManish extends Component {
    constructor() {
      super();
      this.screens = {};
      this.state = {
        screen: () => {},
        active_screen: 'about',
        navbar: false,
      };
    }
  
    componentDidMount() {
      this.screens = {
        about: <About />,
        education: <Education />,
        skills: <Skills />,
        projects: <Projects />,
        resume: <Resume />,
      };
  
      const lastVisited = localStorage.getItem('about-section') || 'about';
      this.changeScreen(document.getElementById(lastVisited));
    }
  
    changeScreen = (e) => {
      const screen = e.id || e.target.id;
      localStorage.setItem('about-section', screen);
      ReactGA.send({ hitType: 'pageview', page: `/${screen}`, title: 'About Manish' });
  
      this.setState({
        screen: this.screens[screen],
        active_screen: screen,
        navbar: false,
      });
    };
  
    showNavBar = () => {
      this.setState({ navbar: !this.state.navbar });
    };
  
    renderNavLinks = () => {
      const navItems = [
        { id: 'about', label: '👤 About Me' },
        { id: 'education', label: '🎓 Education' },
        { id: 'skills', label: '🛠️ Skills' },
        { id: 'projects', label: '📁 Projects' },
        { id: 'resume', label: '📄 Resume' },
      ];
  
      return navItems.map((item) => (
        <div
          key={item.id}
          id={item.id}
          tabIndex="0"
          onFocus={this.changeScreen}
          onClick={this.changeScreen}
          className={`${
            this.state.active_screen === item.id
              ? 'bg-ub-orange bg-opacity-100'
              : 'hover:bg-white hover:bg-opacity-10'
          } transition duration-150 w-28 md:w-full rounded-md md:rounded-none cursor-pointer py-1.5 my-1 flex items-center pl-3`}
        >
          <span className="text-sm text-white">{item.label}</span>
        </div>
      ));
    };
  
    render() {
      return (
        <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
          {/* Sidebar for Desktop */}
          <div className="hidden md:flex flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black px-2 pt-4">
            {this.renderNavLinks()}
          </div>
  
          {/* Hamburger for Mobile */}
          <div
            onClick={this.showNavBar}
            className="md:hidden absolute bg-ub-cool-grey rounded w-6 h-6 top-2 left-2 flex flex-col items-center justify-center"
          >
            <div className="w-4 border-t border-white"></div>
            <div className="w-4 border-t border-white my-1"></div>
            <div className="w-4 border-t border-white"></div>
  
            <div
              className={`${
                this.state.navbar ? 'visible animateShow z-30' : 'invisible'
              } absolute bg-ub-cool-grey py-1 px-2 rounded-sm top-full mt-1 left-0 shadow border border-black border-opacity-20`}
            >
              {this.renderNavLinks()}
            </div>
          </div>
  
          {/* Main Content */}
          <div className="flex flex-col w-full md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen p-4">
            {this.state.screen}
          </div>
        </div>
      );
    }
  }

export default AboutManish;

export const displayAboutManish = () => {
    return <AboutManish />;
}
function About() {
    return (
      <section className="flex flex-col items-center text-white text-center mt-6 px-4">
        {/* Profile Image */}
        <div className="w-24 md:w-32 mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="./images/logos/headshot.jpeg"
            alt="Manish Bhusal"
          />
        </div>
  
        {/* Intro Text */}
        <div className="text-xl md:text-2xl font-semibold leading-relaxed">
          Hello 👋, I'm <span className="text-yellow-300 font-bold">Manish Bhusal</span>
        </div>
        <div className="text-base md:text-lg font-medium mt-1 text-pink-400">
          Software Engineer • Creator • Lifelong Learner
        </div>
  
        {/* Divider */}
        <div className="relative mt-6 mb-4 w-32 md:w-48 h-0.5 bg-white">
          <div className="absolute rounded-full bg-white p-1 top-1/2 left-0 transform -translate-y-1/2"></div>
          <div className="absolute rounded-full bg-white p-1 top-1/2 right-0 transform -translate-y-1/2"></div>
        </div>
  
        {/* Bio List */}
        <ul className="w-full md:w-3/4 max-w-xl text-sm md:text-base text-left leading-relaxed space-y-4">
          <li>
            🎓 I'm currently pursuing a degree in <span className="font-semibold text-green-300">Computer Science</span> and actively seeking <span className="text-green-400 font-bold">early grad software engineer roles</span>.
          </li>
          <li>
            📬 Feel free to reach out:{" "}
            <a
              href="mailto:manishbhusalcr7@gmail.com"
              className="text-blue-300 underline hover:text-blue-400 transition"
            >
              manishbhusalcr7@gmail.com
            </a>
          </li>
          <li>
            🛠️ I love <span className="font-semibold text-orange-300">building software</span> that solves real-world problems and brings ideas to life.
          </li>
          <li>
            🎮 Outside of coding, I enjoy <span className="font-medium">reading</span>, gaming (especially <span className="text-pink-400 font-semibold">PUBG Mobile</span>), and catching great movies 🍿.
          </li>
          <li>
            ☁️ Currently exploring <span className="font-semibold text-blue-300">Cloud Computing</span> and <span className="font-semibold text-purple-300">Machine Learning</span> — two areas I’m passionate about.
          </li>
        </ul>
      </section>
    );
  }
  
  function Education() {
    return (
      <section className="w-full px-4 text-white">
        {/* Section Title */}
        <div className="font-semibold text-2xl md:text-3xl mb-6 relative">
          🎓 Education
          <div className="absolute pt-px bg-white mt-px top-full w-full">
            <div className="bg-white absolute rounded-full p-1 top-0 transform -translate-y-1/2 left-full"></div>
            <div className="bg-white absolute rounded-full p-1 top-0 transform -translate-y-1/2 right-full"></div>
          </div>
        </div>
  
        {/* University Info */}
        <div className="bg-white bg-opacity-5 border border-gray-600 rounded-lg shadow-md p-4 md:p-6 mb-6">
          <h3 className="text-xl md:text-2xl font-bold">Fisk University</h3>
          <p className="text-sm text-gray-400 mb-1">2022 – 2025</p>
          <p className="text-base md:text-lg">Bachelor’s in Computer Science</p>
          <p className="text-sm text-green-300 font-bold mt-2">GPA: 3.97 / 4.0</p>
        </div>
  
        {/* Relevant Coursework */}
        <div className="mb-6">
          <h4 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">📚 Relevant Coursework</h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            Data Structures, Algorithms, Computer Systems, Software Development, Computer Architecture, Database Systems.
          </p>
        </div>
  
        {/* Awards / Honors */}
        <div className="mb-6">
          <h4 className="text-lg md:text-xl font-semibold text-blue-300 mb-2">🏅 Awards & Honors</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
            <li>Trustee Award, Springfield College (2021): $24,000 merit-based recognition.</li>
            <li>Outstanding Scholars & Leaders Award, Fisk University (2023): $15,000 for academic excellence & leadership.</li>
            <li>Thrill of Possibility Scholar (2023) – Nissan</li>
            <li>Innovative Scholar (2024) – Meta</li>
          </ul>
        </div>
  
        {/* Certifications */}
        <div className="mb-6">
          <h4 className="text-lg md:text-xl font-semibold text-pink-300 mb-2">📄 Certifications</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
            <li>Goldman Sachs Software Engineering Virtual Experience Program</li>
            <li>Introduction to Front-End Development (Meta)</li>
            <li>Google Cloud Fundamentals: Core Infrastructure</li>
            <li>Foundations of Project Management</li>
          </ul>
        </div>
  
        {/* Contact Info */}
        <div className="text-sm text-gray-300 font-medium">
          ✉️ <span className="text-white">Email:</span>{' '}
          <a href="mailto:mbhusal01@my.fisk.edu" className="text-blue-400 underline">
            mbhusal01@my.fisk.edu
          </a>
        </div>
      </section>
    );
  }
function Skills() {
    const languages = [
      { src: 'https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white', alt: 'Java' },
      { src: 'https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff', alt: 'Python' },
      { src: 'https://img.shields.io/badge/Lua-000080?style=flat&logo=lua&logoColor=white', alt: 'Lua' },
      { src: 'https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000', alt: 'JavaScript' },
      { src: 'https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white', alt: 'C++' },
      { src: 'https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white', alt: 'Dart' },
      { src: 'https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff', alt: 'HTML5' },
      { src: 'https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff', alt: 'Git' },
      { src: 'https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff', alt: 'Firebase' },
    ];
  
    const frameworks = [
      { src: 'https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff', alt: 'Next.js' },
      { src: 'https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff', alt: 'React' },
      { src: 'https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=ffffff', alt: 'Angular' },
      { src: 'https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white', alt: 'Flutter' },
      { src: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white', alt: 'Tailwind CSS' },
      { src: 'https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff', alt: 'Node.js' },
    ];
  
    const cloud = [
      { src: 'https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white', alt: 'AWS' },
      { src: 'https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoft-azure&logoColor=white', alt: 'Azure' },
    ];
  
    const mlFrameworks = [
      { src: 'https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=white', alt: 'TensorFlow' },
      { src: 'https://img.shields.io/badge/Keras-D00000?style=flat&logo=keras&logoColor=white', alt: 'Keras' },
      { src: 'https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat&logo=scikit-learn&logoColor=white', alt: 'Scikit-learn' },
      { src: 'https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white', alt: 'Pandas' },
    ];
  
    return (
      <section className="w-full flex flex-col items-center mt-6 text-white">
        <h2 className="relative text-2xl md:text-3xl font-bold mb-6 tracking-wide">
          🚀 Technical Skills
          <div className="absolute pt-px bg-white mt-1 top-full w-full h-0.5">
            <div className="bg-white absolute rounded-full p-1 top-0 transform -translate-y-1/2 left-full"></div>
            <div className="bg-white absolute rounded-full p-1 top-0 transform -translate-y-1/2 right-full"></div>
          </div>
        </h2>
  
        {/* Intro */}
        <ul className="w-10/12 text-sm md:text-base leading-relaxed tracking-tight emoji-list mb-6 text-left max-w-4xl">
          <li className="list-arrow mt-2">I’ve worked with a wide range of programming, cloud, and machine learning technologies.</li>
          <li className="list-arrow mt-2">My core expertise lies in <strong className="text-ubt-gedit-orange">fullstack engineering, React, cloud platforms, and Python for AI/ML</strong>.</li>
        </ul>
  
        {/* Language & Frameworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
          <div className="bg-white bg-opacity-5 border border-gray-600 rounded-xl shadow-md p-4">
            <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400">🧠 Programming Languages & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((badge, idx) => (
                <img
                  key={idx}
                  src={badge.src}
                  alt={badge.alt}
                  className="h-7 transition-transform transform hover:scale-105 hover:drop-shadow-md"
                />
              ))}
            </div>
          </div>
  
          <div className="bg-white bg-opacity-5 border border-gray-600 rounded-xl shadow-md p-4">
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">⚙️ Frameworks & Libraries</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frameworks.map((badge, idx) => (
                <img
                  key={idx}
                  src={badge.src}
                  alt={badge.alt}
                  className="h-7 transition-transform transform hover:scale-105 hover:drop-shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
  
        {/* Machine Learning */}
        <div className="bg-white bg-opacity-5 border border-gray-600 rounded-xl shadow-md p-4 mt-6 w-11/12 max-w-3xl">
          <h3 className="text-xl font-semibold mb-4 text-center text-pink-300">🧪 Machine Learning Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {mlFrameworks.map((badge, idx) => (
              <img
                key={idx}
                src={badge.src}
                alt={badge.alt}
                className="h-7 transition-transform transform hover:scale-105 hover:drop-shadow-md"
              />
            ))}
          </div>
        </div>
  
        {/* Cloud Platforms */}
        <div className="bg-white bg-opacity-5 border border-gray-600 rounded-xl shadow-md p-4 mt-6 w-11/12 max-w-3xl">
          <h3 className="text-xl font-semibold mb-4 text-center text-purple-300">☁️ Cloud Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cloud.map((badge, idx) => (
              <img
                key={idx}
                src={badge.src}
                alt={badge.alt}
                className="h-7 transition-transform transform hover:scale-105 hover:drop-shadow-md"
              />
            ))}
          </div>
        </div>
  
        
      </section>
    );
  }
  function Projects() {
    const project_list = [
      {
        name: "SYMCare AI",
        date: "Oct 2024",
        link: "https://github.com/manishbhusal7/CalHacks",
        description: [
          "AI-based hospital web app that translates native language to English and vice versa.",
          "Summarizes medical jargon into simple explanations, reads x-rays and lab reports.",
          "Supports sentiment detection, summarization, and multimodal input (text + image).",
        ],
        domains: ["ReactJS", "Next.js", "TailwindCSS", "Python", "Chroma-db"],
      },
      {
        name: "AI Yoga Trainer",
        date: "March 2024",
        link: "https://github.com/manishbhusal7/Yoga",
        description: [
          "🏆 First-place winner at Fisk Research Symposium 2024.",
          "AI Fitness Trainer using MediaPipe for pose estimation & real-time feedback.",
          "Integrated OpenCV for webcam video and PoseNet for tracking user posture.",
        ],
        domains: ["Python", "OpenCV", "MediaPipe", "PoseNet"],
      },
      {
        name: "OOPSinRealLife",
        date: "Feb 2024",
        link: "https://github.com/manishbhusal7/JavaQuizApp",
        description: ["Interactive Java quiz app focused on OOP concepts."],
        domains: ["Java", "TailwindCSS"],
      },
      {
        name: "MobileApp",
        date: "Jun 2022",
        link: "https://github.com/manishbhusal7/ManishApp",
        description: ["Cross-platform social media app for Web, Linux, and Mobile."],
        domains: ["Flutter", "Dart", "Firebase"],
      },
      {
        name: "PlantDisease Detection AI",
        date: "Oct 2024",
        link: "https://github.com/manishbhusal7/Plant_disease_detection",
        description: ["Detects plant diseases by uploading an image of the leaf using a CNN model."],
        domains: ["Streamlit", "Python", "TensorFlow", "Keras", "CNN"],
      },
      {
        name: "SMS Sender CLI",
        date: "Jan 2021",
        link: "https://github.com/manishbhusal7/Smssender",
        description: ["Command-line SMS sender using Twilio API."],
        domains: ["Python", "Twilio"],
      },
      {
        name: "Real-Time Chat App",
        date: "Dec 2022",
        link: "https://github.com/manishbhusal7/chatapp",
        description: [
          "Group chat with file sharing, real-time messaging, video calling & more.",
        ],
        domains: ["ReactJS", "NodeJS", "Socket.io", "TailwindCSS"],
      },
      {
        name: "3D Portfolio Website",
        date: "Sep 2024",
        link: "https://portfolio-jade-delta-73.vercel.app/",
        description: ["Interactive 3D portfolio made with Next.js & React Three Fiber."],
        domains: ["Next.js", "ReactJS", "TailwindCSS"],
      },
    ];
  
    const tag_colors = {
      JavaScript: "yellow-300",
      Java: "orange-600",
      Python: "green-300",
      "C++": "blue-400",
      Dart: "cyan-400",
      Flutter: "blue-400",
      Firebase: "yellow-400",
      HTML5: "orange-400",
      CSS3: "blue-500",
      TailwindCSS: "teal-300",
      Sass: "pink-400",
      "Next.js": "gray-400",
      ReactJS: "blue-300",
      NodeJS: "green-600",
      "Socket.io": "gray-500",
      Streamlit: "red-400",
      TensorFlow: "orange-500",
      Keras: "red-500",
      CNN: "indigo-400",
      Twilio: "red-600",
      "Chroma-db": "purple-400",
      MediaPipe: "yellow-400",
      OpenCV: "blue-300",
      PoseNet: "pink-500",
    };
  
    return (
      <>
        <div className="font-medium relative text-2xl mt-4 md:mt-6 mb-6">
          📁 Projects
          <div className="absolute pt-px bg-white mt-px top-full w-full">
            <div className="bg-white absolute rounded-full p-1 top-0 transform -translate-y-1/2 left-full"></div>
            <div className="bg-white absolute rounded-full p-1 top-0 transform -translate-y-1/2 right-full"></div>
          </div>
        </div>
  
        {project_list.map((project, index) => {
          const projectNameFromLink = project.link.split('/');
          const projectName = projectNameFromLink[projectNameFromLink.length - 1];
  
          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex w-full flex-col px-4"
            >
              <div className="w-full py-3 px-3 my-2 border border-gray-100 border-opacity-10 rounded-lg hover:bg-white hover:bg-opacity-5 transition duration-200">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="text-base md:text-lg font-semibold text-white">
                      {project.name}
                    </div>
                    <iframe
                      src={`https://ghbtns.com/github-btn.html?user=manishbhusal7&repo=${projectName}&type=star&count=true`}
                      frameBorder="0"
                      scrolling="0"
                      width="120"
                      height="20"
                      title={`${project.name}-stars`}
                    ></iframe>
                  </div>
                  <div className="text-gray-400 font-light text-sm">{project.date}</div>
                </div>
  
                <ul className="ml-5 text-sm text-gray-200 font-light list-disc space-y-1">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
  
                <div className="flex flex-wrap items-start justify-start mt-3 text-xs">
                  {project.domains?.map((domain, i) => {
                    const key = domain.trim();
                    const color = tag_colors[key] || "gray-300";
                    return (
                      <span
                        key={i}
                        className={`px-2 py-0.5 m-1 rounded-full border border-${color} text-${color} bg-white bg-opacity-5`}
                      >
                        {domain}
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          );
        })}
      </>
    );
  }
  
  function Resume() {
    const [showPrompt, setShowPrompt] = useState(false);
  
    const handleRequest = () => {
      setShowPrompt(true);
    };
  
    return (
      <div className="resume-container w-full text-white mt-10 px-4">
        {!showPrompt ? (
          <div className="text-center space-y-4">
            <p className="text-base">Interested in viewing my resume?</p>
            <button
              onClick={handleRequest}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
            >
              📄 Request Resume
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-lg font-medium">
              📧 Please email me at{" "}
              <a
                href="mailto:manishbhusalcr7@gmail.com"
                className="text-yellow-400 underline"
              >
                manishbhusalcr7@gmail.com
              </a>{" "}
              to request my resume.
            </p>
          </div>
        )}
      </div>
    );
  }