import '../styles/aboutme.css'
import dcwdLogo from '../assets/DCWD (1).png'
import rmLogo from "../assets/Untitled.png"

import "../styles/fontFamily.css"
const AboutMe = () => {
    return (
        <section id="about" className="about">

            <div className="about-left" style={{}}>

                <p className='Oswald'>
                    WEB DEVELOPER
                </p>
                <p className="about-subtext">
                    I have <b>1 year </b> of experience as a <b>WordPress Developer  </b>using <b>Elementor</b>, where I recently revamped and enhanced a client’s
                    website to improve its overall design, functionality, and user experience. I focus on delivering clean, modern, and efficient web solutions
                    tailored to client needs, ensuring better performance and a more engaging online presence through intuitive and responsive designs built with Elementor.
                </p>

                <div className="work-experience">
                    <img src={rmLogo} alt="DCWD Logo" className="dcwd-logo" />

                    <div className="work-text poppins-regular">
                        ROYAL MARKETING
                        <br />
                        Wordpress Developer
                        <br />
                        December 2024 - January 2026
                    </div>
                </div>
                {/* <div style={{ marginBottom: 300 }}></div> */}
                <div className="about-spacer-bottom"></div>
            </div>

            <div className="about-right">



                {/* ⭐ Text Content */}
                <div className="about-text-container">
                    {/* <div style={{ marginTop: 500 }}></div> */}
                    <div className="about-spacer-top"></div>
                    <p className="about-subtext">
                        <b>Front-end React Developer</b> with a strong foundation in modern front-end development and <b>2 years</b> of hands-on
                        project experience. Trained through an intensive full-stack bootcamp, with practical experience using <b>Go High Level</b>,
                        <b> JavaScript</b>, <b>Typescript</b>, <b>React</b>, <b>HTML</b>, <b>CSS</b>, <b>Tailwind CSS</b> to build responsive and
                        maintainable web applications.
                    </p>

                    <div className="work-experience">
                        <img src={dcwdLogo} alt="DCWD Logo" className="dcwd-logo" />

                        <div className="work-text poppins-regular">
                            DAVAO CITY WATER DISTRICT
                            <br />
                            Front-end Web Developer
                            <br />
                            November 2023 - December 2025
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default AboutMe;