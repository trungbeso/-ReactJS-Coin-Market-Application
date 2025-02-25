import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";
import {faTruckFast} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const videoRef = useRef(null);

    const handleUserInteraction = () => {
        if (videoRef.current) {
            videoRef.current.play();
            document.removeEventListener('click', handleUserInteraction);
        }
    };

    return (
        <div className="*:py-8">
            <div>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-32 object-cover my-6"
                >
                    <source src="/src/assets/footer-video.mp4" type="video/mp4"/>
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="p-10 flex justify-around *:flex-col *:flex *:text-center *:space-y-2
            border-y-1 border-gray-900">
                <nav className="*:hover:text-amber-500">
                    <h6 className="footer-title text-3xl font-bold">Help</h6>
                    <a href="#" className="">Shipping</a>
                    <a href="#" className="">Return + Exchanges</a>
                    <a href="#" className="">FAQ</a>
                    <a href="#" className="">Compare</a>
                </nav>
                <nav className="*:hover:text-amber-500">
                    <h6 className="footer-title text-3xl font-bold">Company</h6>
                    <a href="#" className="">About Us</a>
                    <a href="#" className="">Contact</a>
                    <a href="#" className="">Jobs</a>
                    <a href="#" className="">Press kit</a>
                </nav>
                <nav className="*:hover:text-amber-500">
                    <h6 className="footer-title text-3xl font-bold">Legal</h6>
                    <a href="#" className="">Term of use</a>
                    <a href="#" className="">Privacy policy</a>
                    <a href="#" className="">Cookie policy</a>
                </nav>
            </div>
            <div className="flex justify-around align-middle h-30 items-center">
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faTruckFast} />
                    <p>
                        TrungBeso .Inc
                        <br/>
                        Providing Ecommerce Solution
                    </p>
                </div>
                <div className="md:lace-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-6 py-5 *:hover:text-amber-500">
                        <a href="#" aria-label="Twitter Shop" className="">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" aria-label="Youtube Shop">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="#" aria-label="Facebook Shop">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
