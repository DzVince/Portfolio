import Lottie from "lottie-react";
import animationData from "../assets/Red & Yellow Video Editing.json";
import "../styles/aboutmeSMM.css"
import rmLogo from "../assets/Untitled.png"
const AboutMeSMM = () => {
    return (
        <>
            <section id="aboutSMM" className="aboutSMM">

                <div className="smm-left">
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        style={{marginLeft: 70}}
                    />
                </div>

                <div className="smm-right">

                    <p className="Oswald"> SOCIAL MEDIA MANAGER </p>

                    <p className="about-subtext">
                        I have <b>1 year</b> of experience as a Social Media Manager, specializing in content scheduling
                        and cross-platform posting using tools such as <b>Buffer</b>, <b>Meta Business Suite</b>, <b>Post Planner Pro</b>, and <b>Canva</b>.
                       
                    </p>
                    <div className="work-experience">
                        <img src={rmLogo} alt="DCWD Logo" className="dcwd-logo" />

                        <div className="work-text poppins-regular">
                            ROYAL MARKETING
                            <br />
                            Social Media Manager | Content Scheduling & Cross-Platform Posting
                            <br />
                            July 2021 - January 2022
                        </div>
                    </div>

                    <p className="Oswald"> SHORT-FORM VIDEO EDITOR</p>
                    <p className="about-subtext">
                        A Short-Form Video Editor specializing in high-impact content for Reels, TikTok, and digital video advertisements. 
                    </p>
                </div>

            </section>
        </>
    )
}

export default AboutMeSMM