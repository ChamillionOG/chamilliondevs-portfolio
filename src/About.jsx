function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* About Text */}
        <div className="about-content">

          <p className="about-label">
            ABOUT ME
          </p>

          <h1>
            Developer.
            <br />
            <span>Creator.</span>
          </h1>

          <p className="about-description">
            I'm a programmer and game developer who enjoys building
            interactive experiences and bringing ideas to life through code.
          </p>

          <p className="about-description">
            I work with game engines, programming languages, and web
            technologies to create everything from gameplay systems to
            complete applications.
          </p>

        </div>

        {/* Profile Picture */}
        <div className="about-image-container">
          <div className="about-image">
            <img
              src="/PortfolioPicture.jpg"
              alt="Profile"
            />
          </div>

          <div className="image-corner top-left"></div>
          <div className="image-corner bottom-right"></div>
        </div>

        {/* Skills & Tools */}
        <div className="about-boxes">

          {/* Skills */}
          <div className="about-box">
            <div className="box-header">
              <span className="box-number">01</span>
              <h2>Skills</h2>
            </div>

            <div className="skill-list">
              <span>C++</span>
              <span>Python</span>
              <span>Lua</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

          {/* Tools */}
          <div className="about-box">
            <div className="box-header">
              <span className="box-number">02</span>
              <h2>Tools</h2>
            </div>

            <div className="skill-list">
              <span>Unreal Engine</span>
              <span>Roblox Studio</span>
              <span>Blender</span>
              <span>Visual Studio</span>
              <span>VS Code</span>
              <span>Git</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;