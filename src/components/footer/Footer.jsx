import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer_container container">
            <h1 className="footer__title">Freya</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/phyothikhaing1829/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/ptk18" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>

                <a href="mailto:phyoethikhine143@gmail.com" className="footer__social-link" target="_blank">
                    <i class="uil uil-envelope-alt"></i>
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer