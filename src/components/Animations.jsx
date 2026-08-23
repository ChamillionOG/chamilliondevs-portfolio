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
                            <div className="animation-title">Template</div>
                            <div className="animation-project">Autophobia</div>
                        </div>
                        
                        <div className="animation-image"><img src="../public/Animations/Test.gif" onClick={() => setSelectedImage("../public/Animations/Test.gif")} /></div>
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