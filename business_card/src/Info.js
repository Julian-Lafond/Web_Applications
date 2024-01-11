import React from "react";
import './index.css'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Info() {
    return (
        <div className="container">
            <img src={process.env.PUBLIC_URL + '/pfp.jpeg'} alt="A logo" className="profile-picture" />
            <h1 className="name">Julian Lafond</h1>
            <h3 className="title">Software Developer</h3>
            <h4 className="website">julianlafond.website</h4>
            <div className="button-container">
                <button className="email"><FaEnvelope />Email</button>
                <button className="linkedln"><FaLinkedin />Linkedln</button>
            </div>

            <div className="about">
                <h4>About</h4>
                <p>I am a software developer based in Orange County, California with an interest in the medical field. I have one year of professional experience in both the aerospace and health field.  </p>
            </div>

            <div className = "interests">
                <h4>Interests</h4>
                <p>I love to surf, play tennis, soccer, read, and spend time with family friends. </p>
            </div>

        </div>
    )
}

export default Info;