import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeam } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
        <div className="nav-bar-container">
            <div className="header">
                <FontAwesomeIcon icon={faGrinBeam} />
                <h1>Meme Generator</h1>
            </div>
            <h3 className = "react-course">React Course - Project 3</h3>
        </div>
    )
}

export default Header;