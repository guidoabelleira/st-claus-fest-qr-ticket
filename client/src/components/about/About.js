import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Reserva <h3>Natural Norte</h3></h3>
                <p>Av. Juan B. Justo 8000, Córdoba Capital</p>
            </div> 
            <div className="about-img">
                <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.2191825229374!2d-64.18265191794694!3d-31.325319407450532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329b430049f511%3A0xfdccdff2031d248a!2sReserva%20Natural%20Norte!5e0!3m2!1ses-419!2sar!4v1638587765573!5m2!1ses-419!2sar" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
            </div>           
        </div>
    )
}

export default About;