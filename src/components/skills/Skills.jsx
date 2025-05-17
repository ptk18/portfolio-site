import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import MLDSAITools from './MLDSAITools';
import SoftwareEngineering from './SoftwareEngineering';
import MLDL from './MLDL';
import DataScience from './DataScience';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">What I'm good at</span>

        <div className="skills__container container grid">
            <SoftwareEngineering />
            <MLDL />
            <DataScience />
        </div>
        <br/>
        <span className="section__subtitle">Tech Stack</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <MLDSAITools />
        </div>
    </section>
  );
};

export default Skills