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
                    <a href="#project">Projects</a>
                    <a href="#services">Services</a>
                </div>

            </div>
        </div>
    );
};

export default NavigationBar;