import "../styles/Contact.css";
const Contact = () => {
    return (
      <div className="contact">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <p>Feel free to reach out via email, LinkedIn, or GitHub.</p>
          <ul>
            <li><strong>Email:</strong> lianbhong@gmail.com</li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/lbhong" target="_blank" rel="noopener noreferrer">linkedin.com/in/lbhong</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/BiakHong" target="_blank" rel="noopener noreferrer">github.com/BiakHong</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Contact;