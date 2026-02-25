import "../styles/navbar.css";

const NavigationBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">

                <a href="#home" className="nav-logo">
                    VINCE IVAR E. NAZARENO
                </a>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>
        </div>
    );
};

export default NavigationBar;