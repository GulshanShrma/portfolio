import React, { useState, useEffect } from "react";
import { Button } from "@carbon/react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/GulshanShrma/repos") // Replace with your GitHub username
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container projects">
      <h1>My GitHub Projects</h1>
      <p>Here are some of the projects I have worked on. You can explore them on GitHub.</p>

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description ? project.description : "No description available."}</p>
              <div className="project-links">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  <Button kind="tertiary">View on GitHub</Button>
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <Button kind="secondary">Live Demo</Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
