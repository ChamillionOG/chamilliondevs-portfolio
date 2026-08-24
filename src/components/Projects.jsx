import { useState } from "react";

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="projects" className="section">
            <div className="sections-content">
                <span className="category">MY PROJECTS</span>

                {/**Project Cards**/}
                <div className="projects-grid">

                    {/* Exploding Delivery Service */}
                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-icon"><img src="../public/EDSImages/Icon.png" /></div>
                            
                            {/*Info*/}
                            <div className="title-container">
                                <div className="project-title">Exploding Delivery Service</div>
                                <div className="project-role">Programmer · Animator · UI Designer · Marketer</div>
                            </div>
                        </div>

                        {/*Link*/}
                        <a href="https://store.steampowered.com/app/4877970/Exploding_Delivery_Service" className="project-link" target="blank" rel="noreferrer"> 
                            View Project
                            <span>↗</span>
                        </a>

                        {/*Status*/}
                        <div className="status">
                            <div className="pre-release"></div>
                            <span className="status-text">Pre-Release</span>
                        </div>

                        {/*Description*/}
                        <div className="project-description">
                                A multiplayer game built with Unreal Engine 5 focused on delivering packages, multiplayer gameplay, and interactive systems.
                        </div>

                        {/*Images*/}
                        <div className="project-gallery">
                            <div className="project-image"><img src="../public/EDSImages/SS1.png" onClick={() => setSelectedImage("../public/EDSImages/SS1.png")} /></div>
                        </div>
                    </div>



                </div>
            </div>

            {/*Image Preview*/}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} className="lightbox-image" />
                </div>
            )}
        </section>
  );
}