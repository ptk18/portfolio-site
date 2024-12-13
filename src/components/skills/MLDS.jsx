import React from 'react'

const MLDS = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">ML | DS | AI</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Pandas</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Numpy</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">OpenCV</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Scikit-learn</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>


        </div>
    </div>
</div>
  )
}

export default MLDS