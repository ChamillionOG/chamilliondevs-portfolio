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
                                <div className="project-role">Programmer · Animator · UI Designer · Marketer · C++ · Blueprints</div>
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
                            <div className="project-image"><img src="../public/EDSImages/SS2.png" onClick={() => setSelectedImage("../public/EDSImages/SS2.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS3.png" onClick={() => setSelectedImage("../public/EDSImages/SS3.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS4.png" onClick={() => setSelectedImage("../public/EDSImages/SS4.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS5.png" onClick={() => setSelectedImage("../public/EDSImages/SS5.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS6.png" onClick={() => setSelectedImage("../public/EDSImages/SS6.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS7.png" onClick={() => setSelectedImage("../public/EDSImages/SS7.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS8.png" onClick={() => setSelectedImage("../public/EDSImages/SS8.png")} /></div>
                            <div className="project-image"><img src="../public/EDSImages/SS9.png" onClick={() => setSelectedImage("../public/EDSImages/SS9.png")} /></div>
                        </div>
                    </div>

                    {/* Insectrix */}
                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-icon"><img src="../public/InsectrixImages/Icon.png" /></div>
                            
                            {/*Info*/}
                            <div className="title-container">
                                <div className="project-title">Insectrix</div>
                                <div className="project-role">Fully Self Developed · Python</div>
                            </div>
                        </div>

                        {/*Status*/}
                        <div className="status">
                            <div className="unreleased"></div>
                            <span className="status-text">Unreleased</span>
                        </div>

                        {/*Description*/}
                        <div className="project-description">
                                Insectrix is a bug-collecting adventure where you explore new environments, catch unique insects, and build your collection. Sell bugs to earn insectra, upgrade your equipment, and unlock new areas as you progress.
                        </div>

                        {/*Images*/}
                        <div className="project-gallery">
                            <div className="project-image"><img src="../public/InsectrixImages/SS1.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS1.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS2.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS2.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS3.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS3.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS4.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS4.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS5.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS5.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS6.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS6.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS7.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS7.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS8.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS8.png")} /></div>
                            <div className="project-image"><img src="../public/InsectrixImages/SS9.png" onClick={() => setSelectedImage("../public/InsectrixImages/SS9.png")} /></div>
                        </div>
                    </div>

                    {/* Autophobia */}
                    <div className="project-card">
                        <div className="project-header">
                            <div className="project-icon"><img src="../public/AutophobiaImages/Icon.png" /></div>
                            
                            {/*Info*/}
                            <div className="title-container">
                                <div className="project-title">Autophobia</div>
                                <div className="project-role">Animator · Part-Scripter · UI · Lua</div>
                            </div>
                        </div>

                        {/*Link*/}
                        <a href="https://www.roblox.com/games/100280838747749/Autophobia" className="project-link" target="blank" rel="noreferrer"> 
                            View Project
                            <span>↗</span>
                        </a>

                        {/*Status*/}
                        <div className="status">
                            <div className="released"></div>
                            <span className="status-text">Released</span>
                        </div>

                        {/*Description*/}
                        <div className="project-description">
                            Backrooms inspired Roblox game with custom entities, gameplay, levels, and more.
                        </div>

                        {/*Images*/}
                        <div className="project-gallery">
                            <div className="project-image"><img src="../public/AutophobiaImages/SS1.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS1.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS2.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS2.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS3.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS3.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS4.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS4.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS5.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS5.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS6.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS6.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS7.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS7.png")} /></div>
                            <div className="project-image"><img src="../public/AutophobiaImages/SS8.png" onClick={() => setSelectedImage("../public/AutophobiaImages/SS8.png")} /></div>
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