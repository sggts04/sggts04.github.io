import Project from './Project';
import { useState, useEffect } from "react";
import axios from 'axios';
import fallBackData from './fallbackData.json'

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() =>
    axios.get("https://cloud.shreyasgupta.in/projects/")
      .then(res => setProjects(res.data))
      .catch(() => setProjects(fallBackData))
  );

  return (
    <div id="projects-container" className="flex justify-center content-center lg:px-32 md:px-16 px-8 md:mt-32 mt-16 mb-6">
      <div className="projects flex flex-col min-w-full">
        <p className="font-bold lg:text-5xl md:text-3xl sm:text-2xl text-2xl">
            Projects
        </p>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 font-light mt-6 gap-x-10">
            {projects.map(project => 
                <Project
                    projectTitle={project.projectTitle}
                    projectDesc={project.projectDesc}
                    imgUrl={project.imgUrl}
                    githubUrl={project.githubUrl}
                    projectUrl={project.projectUrl}
                />
            )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
