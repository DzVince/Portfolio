import "../styles/projects.css"
import aboutUs from "../assets/aboutUs.png"
import contactUs from "../assets/ContactUs.png"
import projectsImg from "../assets/projects.png"
import reports from "../assets/317aaa78-1a31-49cb-87f9-7cc6d019c93e.jpg"
import respo from "../assets/dbfc4a1e-395f-4c29-a62c-40f2c0a7e4a0.jpg"
import vid1 from "../assets/sample_edit.mp4"
import vid2 from "../assets/Sequence 01.mp4"
import vid3 from "../assets/EDIT2.mp4"
import vid4 from "../assets/EDIT3.mp4"
import pic1 from "../assets/amelia.png"
import pic2 from "../assets/love.png"
import pic3 from "../assets/monchapo.png"
import { Card, Carousel, Image, Modal } from "antd"
import { useState } from "react"

const { Meta } = Card

const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
    const projectsData = [
        {
            title: "Wordpress Development",
            description: "WordPress website development using Elementor, focused on creating modern, responsive, and user-friendly websites with optimized layouts, fast performance, and clean design structure.",
            images: [aboutUs, contactUs, projectsImg]
        },
        {
            title: "DCWD Procurement Project",
            description: "DCWD Procurement project built using React, TypeScript, HTML, CSS, and Ant Design, featuring modern UI components, responsive layouts, and clean, structured interface design for efficient data and procurement presentation.",
            images: [reports, respo]
        },
        {
            title: "Social Media Manager | Content Scheduling & Cross-Platform Posting",
            description: "Social Media Manager specializing in strategic content scheduling, cross-platform posting, and visual content creation using Metricool, Buffer, Post Planner Pro, Zoho Social, and Canva to maintain consistent and engaging brand presence.",
            images: [pic1, pic2, pic3]
        },
        {
            title: "Short-form Video Edits",
            description: "High-impact short-form video edits optimized for TikTok, YouTube Shorts, Facebook Reels, and Instagram Reels, designed to capture attention within the first seconds using dynamic pacing, engaging hooks, captions, and trend-aligned storytelling",
            videos: [vid1, vid2, vid3, vid4]
        },

    ]



    const handleMouseMove2 = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const x = (clientX / window.innerWidth) * 100
        const y = (clientY / window.innerHeight) * 100

        setMousePos({ x, y })
    }
    const handleVideoClick = (video: string) => {
        setSelectedVideo(video)
        setIsModalOpen(true)
    }
    const stopAllVideos = () => {
        const videos = document.querySelectorAll("video")

        videos.forEach((video: HTMLVideoElement) => {
            video.pause()
            video.currentTime = 0
        })
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedVideo(null)
        stopAllVideos()
    }
    const handleMouseMove = (e: any, index: any) => {
        const card = document.getElementById(`project-card-${index}`)
        if (!card) return

        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerX) / centerX) * 10

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
    }

    const handleMouseLeave = (index: any) => {
        const card = document.getElementById(`project-card-${index}`)
        if (!card) return

        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
    return (
        <section id="project" className="project" >

            {/* Header Section */}
            <div className="projects-header">
                <span className="projects-icon">✦ Projects</span>

                <h1 className="projects-title">
                    Building Websites, Growing Brands, Creating Content.
                </h1>

                <p className="projects-subtitle">
                    Delivering modern, responsive websites, strategic brand growth solutions, and engaging digital content designed to connect with audiences.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid dm-sans">
                {projectsData.map((project, index) => (
                    <Card
                        id={`project-card-${index}`}
                        hoverable
                        className="project-card"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        style={{ width: 700 }}
                        cover={
                            <Carousel arrows>
                                {project.videos
                                    ? project.videos.map((vid, i) => (
                                        <div
                                            key={i}
                                            onClick={() => handleVideoClick(vid)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <video
                                                src={vid}
                                                className="project-card-image"
                                                muted
                                            />
                                        </div>
                                    ))
                                    : project.images?.map((img, i) => (
                                        <Image
                                            key={i}
                                            alt={project.title}
                                            src={img}
                                            className="project-card-image"
                                            preview={true}
                                        />
                                    ))
                                }
                            </Carousel>
                        }
                    >
                        <Meta
                            title={project.title}
                            description={project.description}
                        />
                    </Card>
                ))}
            </div>
            <Modal
                open={isModalOpen}
                footer={null}
                onCancel={handleCloseModal}
                width={900}
                centered
            >
                {selectedVideo && (
                    <video
                        src={selectedVideo}
                        controls
                        autoPlay
                        style={{
                            width: "100%",
                            borderRadius: "12px"
                        }}
                    />
                )}
            </Modal>
        </section>
    )
}

export default Projects