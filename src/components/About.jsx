export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-content">
        <span className="category">ABOUT ME</span>

        <h1>Developer.<br /><span>Creator.</span></h1>

        <p className="about-description">
            Hi, I'm Emilian Hasa, a jack of all trades specializing in programming, 3D animation,
            and image editing. I combine technical and creative skills to build
            interactive experiences and bring ideas to life.
        </p>
      </div>

      <div className="about-image">
        <img
          src="/PortfolioPicture.jpg"
          alt="Portfolio"
        />
      </div>

      <div className="box-container">

        <div className="box">
            <div className="category">01</div>
            <h2>Skills</h2>

            <div className="list">
                <span>Programming</span>
                <span>Game Development</span>
                <span>3D Animation</span>
                <span>Image Editing</span>
                <span>Web Development</span>
                <span>UI Design</span>
            </div>
        </div>

        <div className="box">
            <div className="category">02</div>
            <h2>Languages</h2>

            <div className="list">
                <span>Python</span>
                <span>Lua</span>
                <span>JavaScript</span>
                <span>C++</span>
                <span>CSS</span>
            </div>
        </div>

        <div className="box">
            <div className="category">03</div>
            <h2>Tools</h2>

            <div className="list">
                <span>Unreal Engine</span>
                <span>Roblox Studio</span>
                <span>Blender</span>
                <span>Photoshop</span>
                <span>React</span>
                <span>Visual Studio</span>
            </div>
        </div>

      </div>

    </section>
  );
}