import { ABOUT_INFO } from '../config'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-section">
            <h3 className="section-title">Technical Skills</h3>
            <div className="skills-container">
              {ABOUT_INFO.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3 className="section-title">About</h3>
            <div className="description-container">
              {ABOUT_INFO.description.map((paragraph, index) => (
                <p key={index} className="description-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

