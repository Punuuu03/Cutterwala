import React, { useEffect, useRef } from 'react';
import '../styles/VisionMission.css';
import visionIcon from '../assets/Vision3.png'; // Replace with your icon path
import missionIcon from '../assets/Mission2.png'; // Replace with your icon path

const VisionMission = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure the video is loaded and then play it
        if (videoRef.current) {
            videoRef.current.muted = true;  // Mute the video
            videoRef.current.play();
        }
    }, []);

    return (
        <section className="vision-mission-section">
            <h1 className="vision-mission-title">Vision & Mission</h1>
            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    className="vision-mission-video"
                    loop
                    playsInline
                    muted
                >
                    <source src={require("../assets/Video22.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="vision-mission-description">
                <div className="vision-mission-item">
                    <img src={visionIcon} alt="Vision Icon" className="vision-mission-icon" />
                    <p>
                        To be the world’s most trusted provider of cutting tools, revolutionizing the industry through innovation, quality, and a relentless focus on user safety.
                    </p>
                </div>
                <div className="vision-mission-item">
                    <img src={missionIcon} alt="Mission Icon" className="vision-mission-icon" />
                    <p>
                        At Cutterwala, our mission is to lead the cutting tools industry by consistently delivering products that combine advanced technology with unparalleled safety features. We are committed to continuous innovation, ensuring that our tools not only meet but exceed the expectations of our customers. We aim to empower professionals and hobbyists alike with tools that enhance their precision, productivity, and peace of mind.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
