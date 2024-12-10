import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="uil uil-graduation-cap about__icon"></i>
                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">year 3</span>
            </div>

            <div className="about__box ">
                <i class="uil uil-code-branch about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">30+ projects</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2+ years</span>
            </div>
        </div>
    )
}

export default Info