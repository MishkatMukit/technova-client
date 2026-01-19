import { faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-gray-800 text-white rounded p-8 lg:p-10">
            <nav className="grid grid-flow-col gap-4">
                <ul class="flex gap-2 lg:gap-6 font-semibold text-lg">
                    <li><a class="text-white hover:text-blue-500" href="#home">Home</a>
                    </li>
                    <li><a class="text-white hover:text-blue-500" href="#products">Products</a></li>
                    <li><a class="text-white hover:text-blue-500" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <nav>
                <h1 class="text-xl py-2">Contact info :</h1>
                <div className="grid grid-flow-col gap-4">
                    <a target="_blank" href="https://www.facebook.com/md.shajedul.5686/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    <a target="_blank" href="https://github.com/MishkatMukit"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a target="_blank" href="https://www.youtube.com/results?search_query=how+to+become+a+web+developer+from+beginner"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                </div>
            </nav>
            <aside>
                <div class="mb-2">
                &copy; Technova. All rights reserved.
            </div>
            <div>
                Designed by Mishkat Mahabub & Muhammad Shajedul Islam
            </div>
            </aside>
        </footer>
    );
};

export default Footer;