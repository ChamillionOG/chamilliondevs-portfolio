export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                
                <a className="logo">
                    <span>&lt;</span>CHAMILLION<span>&gt;</span>
                </a>

                <nav className="navigation">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#animations">Animations</a>
                    <a href="#links">Links</a>
                </nav>

                <a href="#links" className="header-button"> Contact Me! </a>

            </div>
        </header>
    );
}