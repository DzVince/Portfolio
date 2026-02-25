import "../styles/navbar.css";

const NavigationBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="nav-logo">
                    VINCE IVAR E. NAZARENO
                </div>

                <div className="nav-links">
                    <span>About</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;