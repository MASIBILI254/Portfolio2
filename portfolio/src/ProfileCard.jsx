import React from "react";
import "./profile.css";
import profile from "./profile.jpeg";

export default function ProfileCard() {
  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="header">
        <img
          src={profile}
          alt="profile"
          className="profile-img"
        />
        <h1 className="name">Eng.KENNEDY SITATI MASIBILI</h1>
        <p className="title">
           Software Engineer | FullStack Developer | Devops engineer
        </p>
        <div className="contacts">
          <p> Nairobi, Kenya</p>
          <p>+2547-0270-9726</p>
          <p> andreasimiyu7@gmail.com</p>
          <a href="https://www.linkedin.com/in/kennedy-sitati-848a2422a/">Linkedin profile</a> <br />
          <a href="https://github.com/MASIBILI254">Github profile</a>
        </div>
      </div>

      {/* About Me */}
      <div className="card">
        <h2> About Me</h2>
        <p>
          Passionate software engineer with 4+ years of experience in building
          scalable web applications and services. Proficient in modern
          technologies and frameworks, with a knack for problem-solving and
          delivering high-quality code. Adept at collaborating in agile teams
          and continuously learning new skills to stay ahead in the tech world.

        </p>
      </div>

      {/* Core Skills */}
      <div className="card">
        <h2> Core Skills</h2>
        <ul>
          <li>
            <strong>Backend Developer:</strong> Microservices, mysql, MongoDB,
            Distributed Systems, APIs, Cloud-Native, Serverless, DevOps.
          </li>
          <li>
            <strong>Full-Stack :</strong> React, Next.js, Node.js, GraphQL,
            TypeScript, Tailwind CSS, Docker, Kubernetes, CI/CD.
          </li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="card">
        <h2> Tech Stack</h2>
        <p>
          <strong>Languages:</strong> Javascript,Pyhton, Java, Go
        </p>
        <p>
          <strong>Frameworks:</strong>React.js, Mode.js, goFiber Tailwind CSS, Docker, Kubernetes
        </p>
        <p>
          <strong>Tools:</strong> GitHub Actions, Jenkins, Terraform, Prometheus, Grafana, ELK Stack
        </p>
        <p>
          <strong>Cloud:</strong> AWS Lambla-X, DynamoDB, S3, RDS, EC2
        </p>
      </div>

      {/* Experience */}
      <div className="card">
        <h2> Experience</h2>
        <h3> Software Engineer Intern (May 2025- Aug 2025)</h3>
        <ul>
          <li>
            Built and deployed a serverless web application using AWS Lambda
            and DynamoDB, reducing operational costs by 30%.

          </li>
          <li>
            Developed RESTful APIs with Node.js and Express, improving data
            retrieval times by 25%.

          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="card">
        <h2>Education</h2>
        <p>Bsc.software Engineering</p>
        <p>University Of Eastern Africa,Baraton. 2021-2025</p>
      </div>

      {/* projects */}
      <div className="card">
        <h2> Projects</h2>
        <ul>
          <li>
            <strong>Project Name:</strong> Public Transport StageLocator
            <br />
            <strong>Description:</strong> Developed a full-stack web application that 
            allows users to easily locate public transport stages to their destination
            using React for the frontend and Node.js for the backend.
            <br />
            <strong>Technologies:</strong> React, Node.js, Express, MongoDB, Google Maps API <br />
         <a href=""><strong>See here</strong></a>   
          </li>
          <br />
          <li>
            <strong>Project Name:</strong> Entreprenuer club website
            <br />
            <strong>Description:</strong> Created a responsive website for a university 
            Entreprenuership club
            <br />
            <strong>Technologies:</strong> Next.js, Tailwind CSS, Vercel <br />
         <a href="https://iec.ueab.ac.ke"><strong>See here</strong></a>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
