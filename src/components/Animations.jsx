import { useState } from "react";

export default function Animations() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="animations" className="section">
            <div className="section-content">
                <span className="category">MY ANIMATIONS</span>

                <div className="animations-grid">

                    <div className="animation">
                        <div>
                            <div className="animation-title">Howler Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/HowlerPatrol.gif" onClick={() => setSelectedImage("../public/Animations/HowlerPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Howler Chase</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/HowlerChase.gif" onClick={() => setSelectedImage("../public/Animations/HowlerChase.gif")} /></div>
                    </div>
                    
                    <div className="animation">
                        <div>
                            <div className="animation-title">Hound Idle</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/HoundIdle.gif" onClick={() => setSelectedImage("../public/Animations/HoundIdle.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Hound Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/HoundPatrol.gif" onClick={() => setSelectedImage("../public/Animations/HoundPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Lurker Idle</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/LurkerIdle.gif" onClick={() => setSelectedImage("../public/Animations/LurkerIdle.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Lurker Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/LurkerPatrol.gif" onClick={() => setSelectedImage("../public/Animations/LurkerPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Skin Stealer Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/SkinstealerPatrol.gif" onClick={() => setSelectedImage("../public/Animations/SkinstealerPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Bee Hovering</div>
                            <div className="animation-project">Hive Rollers</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/BeeHovering.gif" onClick={() => setSelectedImage("../public/Animations/BeeHovering.gif")} /></div>
                    </div>

                </div>
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} className="lightbox-image" />
                </div>
            )}
        </section>
    );
}