import React from "react";
import { Button } from "@carbon/react";

export const Home = () => {
  return (
    <div className="container home">
      <h1>Hi, I'm Gulshan Sharma</h1>
      <h2>Sterling OMS Developer | Java Expert</h2>
      
      <p>
        With <strong>3 years of experience</strong> in IBM Sterling Order Management System, 
        I specialize in Java development, automation, and performance optimization.  
        I have worked on multiple projects,  
        streamlining order fulfillment and system integrations.  
      </p>

      <div className="skills">
        <h3>Key Skills:</h3>
        <ul>
          <li>IBM Sterling OMS | Order Orchestration</li>
          <li>Java | Spring Boot | Microservices</li>
          <li>REST APIs | SQL | Performance Tuning</li>
          <li>Automation | Process Optimization</li>
        </ul>
      </div>

      <div className="achievements">
        <h3>Notable Achievements:</h3>
        <ul>
          <li>🏆 3 years for exceptional contributions to Sterling OMS automation.</li>
          <li>🎯 Designed and optimized order orchestration flows, reducing order processing time by 30%.</li>
          {/* <li>🚀 Spearheaded the migration of **legacy OMS processes** to microservices-based architecture.</li> */}
          <li>🎖️ Recognized as a top performer in Sterling OMS development at my organization.</li>
          <li>🏅 Winner of Knowledge Premier League — a company-wide tech excellence event.</li>
          <li>💼 Senior Package Consultant at IBM, specializing in OMS solutions.</li>
          <li>📜 Earned Certifications in Data Structures, Java and IBM Sterling OMS.</li>
        </ul>
      </div>

      <div className="home-buttons">
        <a href="/resume.pdf" download>
          <Button kind="primary" className="download-btn">
            Download Resume
          </Button>
        </a>
        <a href="/projects">
          <Button kind="secondary">Explore My Work</Button>
        </a>
      </div>
    </div>
  );
};
