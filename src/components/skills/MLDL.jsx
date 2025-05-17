import React from 'react'

const MLDL = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">ML & DL</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Model Development</h3>
                    <span className="skills__level">LLM, ML, DL architectures, Ensemble methods</span>

                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">MLOps</h3>
                    <span className="skills__level">ML Pipeline Orchestration, CI/CD for ML</span>

                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Model Evaluation & Validation</h3>
                    <span className="skills__level">A/B Testing, Performance Metrics</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MLDL