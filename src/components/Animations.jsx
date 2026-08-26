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
                        
                        <div className="animation-image"><img src="/Animations/HowlerPatrol.gif" onClick={() => setSelectedImage("/Animations/HowlerPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Howler Chase</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/HowlerChase.gif" onClick={() => setSelectedImage("/Animations/HowlerChase.gif")} /></div>
                    </div>
                    
                    <div className="animation">
                        <div>
                            <div className="animation-title">Hound Idle</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/HoundIdle.gif" onClick={() => setSelectedImage("/Animations/HoundIdle.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Hound Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/HoundPatrol.gif" onClick={() => setSelectedImage("/Animations/HoundPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Lurker Idle</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/LurkerIdle.gif" onClick={() => setSelectedImage("/Animations/LurkerIdle.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Lurker Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/LurkerPatrol.gif" onClick={() => setSelectedImage("/Animations/LurkerPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Skin Stealer Patrol</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/SkinstealerPatrol.gif" onClick={() => setSelectedImage("/Animations/SkinstealerPatrol.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Bee Hovering</div>
                            <div className="animation-project">Hive Rollers</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/BeeHovering.gif" onClick={() => setSelectedImage("/Animations/BeeHovering.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Player Walking</div>
                            <div className="animation-project">Personal</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/PlayerWalking.gif" onClick={() => setSelectedImage("/Animations/PlayerWalking.gif")} /></div>
                    </div>

                    <div className="animation">
                        <div>
                            <div className="animation-title">Player Running</div>
                            <div className="animation-project">Personal</div>
                        </div>
                        
                        <div className="animation-image"><img src="/Animations/PlayerRunning.gif" onClick={() => setSelectedImage("/Animations/PlayerRunning.gif")} /></div>
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