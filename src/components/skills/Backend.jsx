import React from 'react';
import pythonImg from "../../assets/python.png";
import javaImg from "../../assets/java.png";
import cppImg from "../../assets/cpp.png";
import gitImg from "../../assets/git.png";
import dockerImg from "../../assets/docker.png";
import djImg from "../../assets/django.png";
import fastApiImg from "../../assets/fastapi.png";
import mySqlImg from "../../assets/mySql.png";
import mongoDBImg from "../../assets/mongoDB.png";

const Backend = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend | Databases</h3>

    <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={pythonImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={javaImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={cppImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={dockerImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={gitImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={djImg} alt="" className="tech_stack_Img" width="40" height="40" />
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <div>
                        <img src={fastApiImg} alt="" className="tech_stack_Img" width="45" height="30" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={mySqlImg} alt="" className="tech_stack_Img" width="45" height="30" />
                    </div>
                </div>

                <div className="skills__data">
                    <div>
                        <img src={mongoDBImg} alt="" className="tech_stack_Img" width="45" height="30" />
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default Backend