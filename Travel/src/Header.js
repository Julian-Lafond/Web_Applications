import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function Header({ item }) {
    return (
        <div className="travel">
            <img className="fuji" src = {item.imageUrl} alt="Mount fuji"></img>
            <div className="container">
                <div className="header">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    <h4 className="location">{item.location}</h4>
                    <h4 className="google">View on Google Maps</h4>
                </div>
                <h1 className="place">{item.title}</h1>
                <h3 className = "dates">{item.startDate} - {item.endDate}</h3>
                <p className = "description">{item.description}</p>
            </div>

        </div>
    )
}
export default Header;