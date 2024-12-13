import React, { useState } from 'react';
import "./services.css";

const WorkItems = ({item}) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
      setToggleState(index);
  }
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>

        <span className="work__button" onClick={() => toggleTab(1)}>See More <i className="bx bx-right-arrow-alt work__button-icon"></i></span>
        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <img src={item.image} alt="" className='work__img-bigger'/>

                        <h3 className="services__modal-title">{item.title}</h3>

                        <p className="services__modal-description">
                          {item.description}
                        </p>  

                        

                        <div className="services__modal-techStack-container">
                          <i className="uil uil-arrow services__modal-techStack-icon"></i>
                          <p className="services__modal-techStack">{item.techStack}</p>
                        </div>

                        <div className="services__modal-project-link">
                          <i className="uil uil-link-h services__modal-githublink-icon"></i>
                          <a href={item.githublink} className="services__modal-githublink">github</a>
                        </div>



                    </div>
                </div>
    </div>
  )
}

export default WorkItems