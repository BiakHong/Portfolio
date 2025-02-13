import "../styles/Project.css"

const Projects = () => {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project">
            <h2>AutoLink</h2>
            <p>
              A full-stack web application for managing vehicle inventory. Integrated third-party car data APIs
              and built modular, reusable frontend components.
            </p>
            <p><strong>Technologies:</strong> Java, Spring Boot, React, PostgreSQL, AWS EC2, Docker, Jenkins</p>
            <a href="https://github.com/BiakHong/AutoLink" target="_blank" rel="noopener noreferrer" className="btn">
              View Source Code
            </a>
          </div>
  
          <div className="project">
            <h2>Ticket Reimbursement</h2>
            <p>
              A backend system for managing expense reimbursements. Designed RESTful APIs and integrated with a
              React frontend.
            </p>
            <p><strong>Technologies:</strong> Spring Boot, Java, Maven, SQL, Git</p>
            <a href="https://github.com/BiakHong/Ticket-Reimbursement" target="_blank" rel="noopener noreferrer" className="btn">
              View Source Code
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;