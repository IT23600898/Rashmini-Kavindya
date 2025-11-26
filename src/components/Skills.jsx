import React from 'react';
// Importing Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaAndroid, FaFileWord, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiMongodb, SiPostman, SiAndroidstudio } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 animate-spin-slow" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> }, 
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      ]
    },
    {
      title: "Office & Productivity",
      skills: [
        { name: "MS Word", icon: <FaFileWord className="text-blue-600" /> },
        { name: "PowerPoint", icon: <FaFilePowerpoint className="text-orange-600" /> },
        { name: "MS Excel", icon: <FaFileExcel className="text-green-600" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="bg-slate-950 text-white py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-700/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-sm md:text-base text-sky-400 font-semibold tracking-[0.2em] uppercase mb-3">
            My Arsenal
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">Technologies</span>
          </h3>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-lg">
            A comprehensive look at the tools and technologies I use to bring digital products to life.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-center mb-8">
                <div className="h-[1px] bg-slate-800 flex-grow max-w-[50px] mr-4"></div>
                <h4 className="text-2xl font-bold text-slate-200">
                  {category.title}
                </h4>
                <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-slate-900/50 border border-blue-800/30 p-4 rounded-xl shadow-lg hover:shadow-sky-500/20 hover:border-sky-500/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center gap-3 cursor-default"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      {skill.icon}
                    </div>
                    <p className="text-slate-400 text-sm font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;