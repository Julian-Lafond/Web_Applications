import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faInstagram} className = "icon" />
            <FontAwesomeIcon icon={faFacebook} className = "icon" />
            <FontAwesomeIcon icon={faGithub} className = "icon" />
        </div>
    )
}

export default Footer;