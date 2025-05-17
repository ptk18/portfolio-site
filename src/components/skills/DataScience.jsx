import React from 'react'

const DataScience = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Data Science</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Exploratory Data Analysis</h3>
                    <span className="skills__level">Statistical Analysis, Visualization, Hypothesis Testing</span>

                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Data Cleaning & Preprocessing</h3>
                    <span className="skills__level">Normalization, Encoding, Data Validation</span>

                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Feature Engineering</h3>
                    <span className="skills__level">Feature Selection, Data Augmentation</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DataScience