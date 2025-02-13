import "../styles/Skills.css";
const Skills = () => {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-list">
          <h2>Languages</h2>
          <p>Java, Python, SQL (Postgres), JavaScript, TypeScript, HTML/CSS, C#</p>
  
          <h2>Frameworks</h2>
          <p>Spring Boot, React, Node.js, JUnit, WordPress</p>
  
          <h2>Developer Tools</h2>
          <p>Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse</p>
  
          <h2>Libraries</h2>
          <p>Spring Data JPA, pandas, NumPy</p>
  
          <h2>CI/CD</h2>
          <p>Git, Docker, Jenkins, Postman, AWS (EC2, S3, RDS)</p>
        </div>
      </div>
    );
  };
  
  export default Skills;