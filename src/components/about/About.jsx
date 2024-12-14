import React from "react";
import "./about.css";
import AboutImg from "../../assets/passport_pic.jpg";
import Info from './Info'; 

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Introduction</span>
            
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">Just a chill girl who codes by day and plays guitar by… well, whenever the mood strikes ^^ I’m all about finding joy in the little things—like spotting a cute bug (I say only cute bugs :3). Daydreaming and imagining new possibilities? That’s just my second nature.</p>
                
                    <a download="" href="https://drive.google.com/file/d/1060HvjY1NMOWOLQfhqdw6Wlrfu1y8z5o/view?usp=sharing" className="button button--flex">
                        View My CV

                    </a>
                </div>
            </div>
        </section>
    )
}

export default About