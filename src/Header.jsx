function Header() {
  return (
    <header className="header">
        <div className="header-container">
            <a href="/" className="logo">
                <span>&lt;</span>
                CHAMILLION
                <span>&gt;</span>
            </a>

            <nav className="navigation">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#animations">Animations</a>
                <a href="#links">Links</a>
            </nav>

            <a href="#contact" className="header-button">
                Contact Me!
            </a>
        </div>
    </header>
  );
}

export default Header;