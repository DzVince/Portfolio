import { useState, useEffect } from "react";
import gradpic from '../../src/assets/grad-pic.jpg';
import '../styles/hero.css'
import '../styles/fontFamily.css'
import NavigationBar from "../components/NavigationBar";
const Homepage = () => {

    const fullName = "Vince Ivar E. Nazareno";
    const [typedName, setTypedName] = useState("");

    useEffect(() => {
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
            <div className="hero">
                <div className="hero-left">
                    <div className="hero-text">
                        <p className="roboto-bold">
                            Hello, my name is <br />
                            <span className="typing-text">{typedName}</span>
                        </p>

                        <p className="hero-subtext">
                            I'm a freelance <b>Front-end Web Developer </b>,  <b>Social Media Manager </b>, and <b>Short-form Video Editor</b> based in Davao City, Philippines.
                            I specialize in building immersive, responsive, and visually engaging web applications through clean, well-structured code and user-centered design principles.

                            <div>

                            </div>
                        </p>
                    </div>
                </div>

                <div className="hero-right">
                    <img src={gradpic} alt="Profile" width={200} />
                </div>
            </div>
        </>

    );
}

export default Homepage;