import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contact">
                <h3>Puntos de</h3>
                <p>micros</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Contacto
                </div>
                <div className="sns-links">
                    <a href="https://www.instagram.com/stclaus.cordoba/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=34123456789" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp whatsapp"></i>
                    </a>
                    {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a> */}
                </div>
                
            </div>
            
        </footer>
    )
}

export default Footer;
