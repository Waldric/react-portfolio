import "./hero.css";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section id="about" className="hero py-5">
      <div className="hero__container">
        <div className="hero__left">
          <Fade direction="left" triggerOnce>
            <h1 className="hero__title">
              <span className="hero__title-line">
                <b>Web</b>
              </span>
              <span className="hero__title-line">Developer</span>
            </h1>
          </Fade>
          <Slide direction="up" triggerOnce>
            <p className="hero__lead">
              Hello! I'm <strong>Waldric Garcia</strong>, a student from De La
              Salle Lipa, currently pursuing a Bachelor of Science in Computer
              Science. I have a passion for web development and enjoy creating
              interactive and user-friendly applications. My goal is to
              continuously learn and improve my skills in this ever-evolving
              field.
            </p>
          </Slide>
          <Fade direction="up" delay={200} triggerOnce>
            <div className="hero__cta">
              <a href="#contact" className="btn btn--dark">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn--ghost">
                Browse Projects
              </a>
            </div>
          </Fade>
        </div>
        <div className="hero__right">
          <Fade direction="right" triggerOnce>
            <div className="hero__portrait">
              {/* Replace the src with your actual image path */}
              <img
                src="/profile.jpg"
                alt="Waldric Garcia portrait"
                loading="eager"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Hero;
