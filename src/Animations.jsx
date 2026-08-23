import Animation1 from "../public/PortfolioPicture.jpg";

function Animations() {
  const animations = [
    {
      name: "Explosive Delivery Service",
      image: Animation1,
    },
    {
      name: "Insectrix",
      image: Animation1,
    },
    {
      name: "Roblox Project",
      image: Animation1,
    },
    {
      name: "Explosive Delivery Service",
      image: Animation1,
    },
    {
      name: "Personal Project",
      image: Animation1,
    },
  ];

  return (
    <section id="animations" className="animations">
      <div className="animations-container">

        <div className="animations-heading">
          <p className="animations-label">ANIMATIONS</p>

          <h1>
            Motion & <span>design.</span>
          </h1>
        </div>

        <div className="animations-grid">
          {animations.map((animation, index) => (
            <div className="animation-item" key={index}>

              <div className="animation-image">
                <img
                  src={animation.image}
                  alt={animation.name}
                />
              </div>

              <p>{animation.name}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Animations;