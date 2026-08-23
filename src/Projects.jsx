import ProjectIcon from "../public/PortfolioPicture.jpg";

function Projects() {
  const projects = [
    {
      name: "Explosive Delivery Service",

      description:
        "A multiplayer game built with Unreal Engine 5 focused on delivering packages, multiplayer gameplay, and interactive systems.",

      link: "#",

      icon: ProjectIcon,

      tools: ["Unreal Engine 5", "C++", "Blueprints", "Steam"],

      role: ["Gameplay Programmer", "Multiplayer Developer"],

      images: [
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
      ],
    },

    {
      name: "Insectrix",

      description:
        "A pixel-art collection game where players catch insects, sell their discoveries, and upgrade their equipment.",

      link: "#",

      icon: ProjectIcon,

      tools: ["Python", "Pygame", "JSON"],

      role: ["Solo Developer", "Game Designer"],

      images: [
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
      ],
    },

    {
      name: "Roblox Projects",

      description:
        "A collection of Roblox gameplay systems, UI, progression mechanics, and multiplayer experiences.",

      link: "#",

      icon: ProjectIcon,

      tools: ["Roblox Studio", "Lua", "UI"],

      role: ["Programmer", "Game Designer"],

      images: [
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
      ],
    },

    {
      name: "Personal Projects",

      description:
        "A collection of experimental projects created to learn new technologies, programming techniques, and development workflows.",

      link: "#",

      icon: ProjectIcon,

      tools: ["React", "JavaScript", "Git"],

      role: ["Developer", "Designer"],

      images: [
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
        ProjectIcon,
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="projects-label">PROJECTS</p>

          <h1>
            Things I've <span>built.</span>
          </h1>

          <p>
            A collection of games, applications, and other projects
            I've worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>

              {/* Project Name */}
              <div className="project-card-header">

                <div className="project-icon">
                  <img
                    src={project.icon}
                    alt={`${project.name} icon`}
                  />
                </div>

                <div>
                  <p className="project-type">PROJECT</p>

                  <h2>{project.name}</h2>
                </div>

              </div>

              {/* Description */}
              <p className="project-description">
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project
                <span>↗</span>
              </a>

              {/* Tools / Role */}
              <div className="project-meta">

                <div>
                  <p className="meta-label">TOOLS USED</p>

                  <div className="meta-list">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="meta-label">MY ROLE</p>

                  <div className="meta-list">
                    {project.role.map((role) => (
                      <span key={role}>{role}</span>
                    ))}
                  </div>
                </div>

              </div>

              {/* 3x3 Gallery */}
              <div className="project-gallery">
                {project.images.map((image, index) => (
                  <div className="project-image" key={index}>
                    <img
                      src={image}
                      alt={`${project.name} screenshot ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;