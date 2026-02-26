import "../styles/contact.css"
import "../styles/fontFamily.css"
import { CodeOutlined, ShareAltOutlined, SearchOutlined, MobileOutlined, VideoCameraOutlined } from "@ant-design/icons"
import adobelogo from "../assets/adoobe premierelogo.png"
import bufferlogo from "../assets/buffer.png"
import htmllogo from "../assets/html logo.png"
import metricoolLogo from "../assets/Logo-metricool.png"
import tslogo from "../assets/ts_node.png"
import postplannerlogo from "../assets/pp-logo.png"
import reactlogo from "../assets/reactLogo.gif"
import wordpresslogo from "../assets/wordpresss.png"
import zohologo from "../assets/zohologo.png"
const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="contact-container">
                    <div className="contact-left">
                        <h3 className="dm-sansBiggerFont">
                            Need more info? <br />
                            I got you.
                        </h3>
                        <p className="Montserrat">
                            Here are some of the services I offer. If you have any questions, feel free to reach out.
                        </p>
                        <div className="card" style={{ marginTop: 10 }}>
                            <CodeOutlined className="icon" />
                            <h3 className="Helvetica">Frontend Development</h3>
                            <p className="Montserrat">Creating stellar user interfaces and web experiences using the latest technologies.</p>
                        </div>
                    </div>

                    <div className="contact-right">
                        <div className="card">
                            <MobileOutlined className="icon" />
                            <h3 className="Helvetica">Responsive Design</h3>
                            <p className="Montserrat">Designing websites that look and perform equally well on all devices.</p>
                        </div>
                        <div className="card">
                            <SearchOutlined className="icon" />
                            <h3 className="Helvetica">SEO Optimization</h3>
                            <p className="Montserrat">Enhancing your website’s visibility in search engines for increased organic traffic.</p>
                        </div>
                        <div className="card">
                            <ShareAltOutlined className="icon" />
                            <h3 className="Helvetica">Social Media Manager | Content Scheduling & Cross-Platform Posting</h3>
                            <p className="Montserrat">Managing end-to-end content planning, scheduling, and publishing across multiple platforms...</p>
                        </div>
                        <div className="card">
                            <VideoCameraOutlined className="icon" />
                            <h3 className="Helvetica">Short-form Video Editor</h3>
                            <p className="Montserrat">Editing high-impact short-form videos using Adobe Premiere Pro for Instagram Reels, TikTok...</p>
                        </div>
                    </div>
                </div>

                <div className="logo-carousel-bottom">
                    <div className="logo-track">

                        <img src={adobelogo} alt="Adobe" />
                        <img src={bufferlogo} alt="Buffer" />
                        <img src={metricoolLogo} alt="Metricool" />
                        <img src={postplannerlogo} alt="Post Planner" />
                        <img src={zohologo} alt="Zoho" />
                        <img src={reactlogo} alt="React" />
                        <img src={wordpresslogo} alt="Wordpress" />
                        <img src={tslogo} alt="Typescript Node" />
                        <img src={htmllogo} alt="HTML" />

                        {/* Duplicate for smooth infinite loop */}
                        <img src={adobelogo} alt="Adobe" />
                        <img src={bufferlogo} alt="Buffer" />
                        <img src={metricoolLogo} alt="Metricool" />
                        <img src={postplannerlogo} alt="Post Planner" />
                        <img src={zohologo} alt="Zoho" />
                        <img src={reactlogo} alt="React" />
                        <img src={wordpresslogo} alt="Wordpress" />
                        <img src={tslogo} alt="Typescript Node" />
                        <img src={htmllogo} alt="HTML" />

                    </div>
                </div>
            </section>
        </>

    )
}

export default Contact