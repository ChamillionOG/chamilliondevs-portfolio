import GitHubIcon from "../public/DiscordIcon.jpg";

function Links() {
  const contactLinks = [
    {
      title: "Email",
      description: "Get in touch with me about projects, opportunities, or questions.",
      icon: GitHubIcon,
      link: "mailto:your@email.com",
    },
    {
      title: "Discord",
      description: "Connect with me and get in touch through Discord.",
      icon: GitHubIcon,
      link: "https://discord.com/",
    },
  ];

  const extraLinks = [
    {
      title: "GitHub",
      description: "Check out my source code, projects, and development work.",
      icon: GitHubIcon,
      link: "https://github.com/",
    },
  ];

  const renderLink = (item) => (
    <a
      href={item.link}
      className="link-card"
      target="_blank"
      rel="noreferrer"
      key={item.title}
    >
      <div className="link-icon">
        <img src={item.icon} alt="" />
      </div>

      <div className="link-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <span className="link-arrow">↗</span>
    </a>
  );

  return (
    <section id="links" className="links">
      <div className="links-container">

        <div className="links-heading">
          <p className="links-label">LINKS</p>

          <h1>
            Find me <span>elsewhere.</span>
          </h1>
        </div>

        {/* Contact */}

        <div className="link-category">
          <h2>Contact</h2>

          <div className="link-list">
            {contactLinks.map(renderLink)}
          </div>
        </div>

        {/* Extra */}

        <div className="link-category">
          <h2>Extra</h2>

          <div className="link-list">
            {extraLinks.map(renderLink)}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Links;