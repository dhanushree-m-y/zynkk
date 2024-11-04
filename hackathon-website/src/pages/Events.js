import React from "react";
import './Events.css'; // Import the CSS file

const Events = () => {
    return (
        <div className="main-container">
            <header>
                <nav className="navbar">
                    <div className="logo">Astrix</div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="hackathon.html">Hackathons</a></li>
                        <li><a href="organize.html">Organize</a></li>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
            <div className="filters">
                <h4>Filters</h4>
                <select>
                    <option value="date">Date</option>
                    <option value="category">Category</option>
                    <option value="location">Location</option>
                    <option value="popularity">Popularity</option>
                </select>
                <button>Apply</button>
            </div>
            <div className="events-section">
                <h1>Explore Events</h1>
                <div className="event-cards">
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-music"></i>
                        </div>
                        <div className="content">
                            <h3>Music Fest</h3>
                            <p>Join us for an unforgettable evening of live music.</p>
                            <a href="#more-details">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-code"></i>
                        </div>
                        <div className="content">
                            <h3>Hackathon</h3>
                            <p>Show off your coding skills in this thrilling 24-hour event.</p>
                            <a href="#more-details">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-paint-brush"></i>
                        </div>
                        <div className="content">
                            <h3>Art Workshop</h3>
                            <p>Unleash your creativity in our art workshop with top artists.</p>
                            <a href="#more-details">Learn More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-film"></i>
                        </div>
                        <div className="content">
                            <h3>Film Screening</h3>
                            <p>Catch the premiere of award-winning short films.</p>
                            <a href="#more-details">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
