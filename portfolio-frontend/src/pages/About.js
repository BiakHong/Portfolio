import "../styles/About.css";
const About = () => {
    return (
      <div className="about">
        <h1>About Me</h1>
        <div className="about-content">
          <h2>Education</h2>
          <p>
            <strong>Capitol Technology University</strong>, Laurel, MD<br />
            Bachelor of Science in Computer Science<br />
            Aug. 2020 – April 2024
          </p>
  
          <h2>Experience</h2>
          <p>
            <strong>Fullstack Java Developer</strong><br />
            Revature, Reston, VA<br />
            Dec. 2024 – Present<br />
            • Developed backend APIs and integrated frontend components for projects like Social Media Blog API,
            Expense Reimbursement Service, and AutoLink.<br />
            • Utilized Spring Boot, React, PostgreSQL, AWS RDS, and JWT for secure and efficient development.<br />
            • Delivered robust, secure, and user-friendly applications that met client specifications.
          </p>
  
          <p>
            <strong>Programming Intern</strong><br />
            Digi Solution, Hunt Valley, MD<br />
            June 2024 – Sep. 2024<br />
            • Developed and maintained WordPress websites, ensuring responsive and user-friendly designs.<br />
            • Implemented SEO and SEM strategies to enhance website visibility and drive traffic.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;