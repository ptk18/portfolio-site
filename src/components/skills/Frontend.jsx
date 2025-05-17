import React from 'react';
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import reactImg from "../../assets/react.png";
import svelteImg from "../../assets/svelte.png";
import jsImg from "../../assets/js2.png";
import figmaImg from "../../assets/figma.png";
import tailwindImg from "../../assets/tailwind.png";
import bootstrapImg from "../../assets/bootstrap.png";
import nextjsImg from "../../assets/nextjs.png";



const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={htmlImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={reactImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={nextjsImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={cssImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={svelteImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={tailwindImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={jsImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={bootstrapImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={figmaImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend