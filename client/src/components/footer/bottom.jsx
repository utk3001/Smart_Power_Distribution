import React from 'react'
import "./Bottom.css"

const bottom = () => {
    return (
        <div className='footerBody'>
            <div className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

                </ul>
                <p>&copy;2023 BTP | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default bottom