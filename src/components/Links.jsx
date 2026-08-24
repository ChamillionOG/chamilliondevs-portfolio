export default function Links() {
    return(
        <section id="links" className="section">
            <div className="section-content">
                <span className="category">CONTACT ME</span>

                <div className="links-content">
                    <div className="contact-list">
                        <div className="link-title">Contact</div>

                        {/*Discord*/}
                        <a href="https://discord.com/users/829037484515000380" className="link" target="blank" rel="noreferrer">
                            <div className="link-icon"><img src="../public/DiscordIcon.png" /></div>
                            <div className="link-name">Discord</div>

                            <div className="link-description">Contact me through Discord!</div>
                        </a>

                        {/*Email*/}
                        <a href="mailto:chamillionog@gmail.com?subject=Hello%20from%20your%20portfolio" className="link" target="blank" rel="noreferrer">
                            <div className="link-icon"><img src="../public/EmailIcon.png" /></div>
                            <div className="link-name">Email</div>

                            <div className="link-description">Contact me through email!</div>
                        </a>
                    </div>
                </div>

                <div className="links-content">
                    <div className="contact-list">
                        <div className="link-title">Extra</div>

                        {/*Discord Server*/}
                        <a href="https://discord.gg/x3XUkpDqJR" className="link" target="blank" rel="noreferrer">
                            <div className="link-icon"><img src="../public/DiscordIcon.png" /></div>
                            <div className="link-name">Discord Server</div>

                            <div className="link-description">Check out my Discord Server!</div>
                        </a>

                        {/*Youtube*/}
                        <a href="https://www.youtube.com/@ChamillionOG" className="link" target="blank" rel="noreferrer">
                            <div className="link-icon"><img src="../public/YouTubeIcon.png" /></div>
                            <div className="link-name">YouTube</div>

                            <div className="link-description">Check out my YouTube posts!</div>
                        </a>

                        {/*Github*/}
                        <a href="https://github.com/ChamillionOG" className="link" target="blank" rel="noreferrer">
                            <div className="link-icon"><img src="../public/GithubIcon.png" /></div>
                            <div className="link-name">Github</div>

                            <div className="link-description">Check out my projects!</div>
                        </a>

                        {/*X*/}
                        <a href="https://x.com/ChamillionOG" className="link" target="blank" rel="noreferrer">
                            <div className="link-icon"><img src="../public/XIcon.png" /></div>
                            <div className="link-name">X</div>

                            <div className="link-description">Check out my X posts!</div>
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    );
}