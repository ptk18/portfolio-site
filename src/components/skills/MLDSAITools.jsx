import React from 'react';
import pandasImg from "../../assets/pandaspd.png";
import numpyImg from "../../assets/numpy.png";
import sciLearnImg from "../../assets/scikit-learn.png";
import tensorImg from "../../assets/tensorflow.png";
import seabornImg from "../../assets/seaborn.png";
import matplotImg from "../../assets/matplotlib.png";
import opencvImg from "../../assets/opencv.png";
import hfImg from "../../assets/huggingface.png";
import nltkImg from "../../assets/nltk.png";

const MLDSAITools = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">ML | DS | AI</h3>

    <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={tensorImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={numpyImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={sciLearnImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={pandasImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={seabornImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={matplotImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={opencvImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={nltkImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

               <div className="skills__data">
                    <div>
                        <img src={hfImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default MLDSAITools