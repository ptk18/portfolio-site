import React, {useState} from 'react';
import "./services.css"

const Info = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-graduation-cap about__icon"></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">senior-year</span>
                <br />
                <span className="about__details__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right about__details__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Education</h3>
                        <p className="services__modal-description">
                            I studied for two and a half years at the University of Technology (Yatanarpon Cyber City) in Myanmar. Later, I was awarded a full tuition scholarship to study Software Engineering at King Mongkut's Institute of Technology Ladkrabang, Thailand.
                        </p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-university services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">King Mongkut's Institute of Technology LatKrabang, Thailand</h3>
                                    <span className="about__subtitle">B.Eng. Software Engineering (Specializing in Artificial Intelligence)</span><br />
                                    <span className="about__subtitle">Aug 2022 - Present</span>
                                </p>
                                
                            </li>
                            <br />

                            <li className="services__modal-service">
                                <i className="uil uil-university services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">University of Technology (Yatanarpon Cyber City), Myanmar</h3>
                                    <span className="about__subtitle">B.Eng. Information Science and Technology</span><br />
                                    <span className="about__subtitle">Dec 2017 - Feb 2019</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about__box">
                <i class="uil uil-briefcase-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">5+</span>
                <br />
                <span className="about__details__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right about__details__button-icon"></i></span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Experience</h3>
                        <br />

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Data Scientist</h3>
                                    <span className="about__subtitle">PropTech Builders</span><br />
                                    <span className="about__subtitle">Jul 2025 - Present</span>
                                </p>
                                
                            </li>
                            <br />
                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Research Assistant</h3>
                                    <span className="about__subtitle">Language Understanding Laboratory</span><br />
                                    <span className="about__subtitle">June 2025 - Present</span>
                                </p>
                                
                            </li>
                            <br />
                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Teaching Assistant</h3>
                                    <span className="about__subtitle">AI Programming Course, Software Engineering, KMITL</span><br />
                                    <span className="about__subtitle">Jul 2025 - Present</span>
                                </p>
                                
                            </li>
                            <br />
                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Teaching Assistant</h3>
                                    <span className="about__subtitle">Circuits & Electronics Course, Software Engineering, KMITL</span><br />
                                    <span className="about__subtitle">Jul 2025 - Present</span>
                                </p>
                                
                            </li>
                            <br />
                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Data Scientist (Intern)</h3>
                                    <span className="about__subtitle">PropTech Builders</span><br />
                                    <span className="about__subtitle">Apr 2025 - Jun 2025</span>
                                </p>
                                
                            </li>
                            <br />
                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Teaching Assistant</h3>
                                    <span className="about__subtitle">Software Engineering Principle Course, Software Engineering, KMITL</span><br />
                                    <span className="about__subtitle">Dec 2024 - Mar 2025</span>
                                </p>
                                
                            </li>
                            <br />

                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Full Stack Software Engineer (Intern)</h3>
                                    <span className="about__subtitle">Siam NSK Steering Systems Co., Ltd.</span><br />
                                    <span className="about__subtitle">Apr 2024 - Jun 2024</span>
                                </p>
                            </li>
                            <br />

                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">Teaching Assistant</h3>
                                    <span className="about__subtitle">Introduction To Logic Course, Software Engineering, KMITL</span><br />
                                    <span className="about__subtitle">Jul 2023 - Nov 2023</span>
                                </p>
                                
                            </li>
                            <br />

                            <li className="services__modal-service">
                                <i className="uil uil-suitcase services__modal-icon"></i>
                                <p className="services__modal-info">
                                    <h3 className="about__title">English Language Teaching Assistant</h3>
                                    <span className="about__subtitle">Teacher Su International School, Myanmar</span><br />
                                    <span className="about__subtitle">May 2022 - May 2023</span>
                                </p>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about__box ">
                <i class="uil uil-code-branch about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">30+ projects</span>
                <br />
                <span
                    className="about__details__button"
                    onClick={() => window.location.href = 'https://github.com/ptk18'}
                    >
                    View More
                    <i className="uil uil-arrow-right about__details__button-icon"></i>
                </span>
            </div>
        </div>
    )
}

export default Info