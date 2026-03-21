import { useState, useEffect } from "react";
import '../styles/hero.css'
import '../styles/fontFamily.css'
import NavigationBar from "../components/NavigationBar";
import useScrollReveal from "../hooks/useScrollReveal";
import angas from "../assets/angas.jpg"
const Homepage = () => {

    const fullName = "Vince Ivar E. Nazareno";
    const [typedName, setTypedName] = useState("");
    useScrollReveal();
    useEffect(() => {
        window.scrollTo(0, 0);

        let index = 0;

        const typingInterval = setInterval(() => {
            index++;
            setTypedName(fullName.slice(0, index));

            if (index === fullName.length) {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <>
            <NavigationBar />
            <section id="home" className="hero section-hidden">

                <div className="hero-left">
                    <div className="hero-text">
                        <p className="roboto-bold">
                            Hello, my name is <br />
                            <span className="typing-text">{typedName}</span>
                        </p>

                        <p className="hero-subtext">
                            I'm a freelance <b>Front-end Web Developer </b>,  <b>Social Media Manager </b>, and <b>Short-form Video Editor</b> based in Davao City, Philippines.
                            I specialize in building immersive, responsive, and visually engaging web applications through clean, well-structured code and user-centered design principles.

                            <div style={{ marginTop: 30 }}>
                                <a
                                    href="mailto:nazarenovinceivar@gmail.com"
                                    className="hero-button"
                                >
                                    Get in Touch
                                </a>
                                <a style={{ marginLeft: 30 }}
                                    href={`${import.meta.env.BASE_URL}updated_cv_vince.pdf`}
                                    download
                                    className="hero-button hero-button-outline"
                                >
                                    Download CV
                                </a>
                            </div>
                        </p>
                    </div>
                </div>

                <div className="hero-right">
                    <img src={angas} alt="Profile" width={200} />
                </div>
            </section>
        </>

    );
}

export default Homepage;