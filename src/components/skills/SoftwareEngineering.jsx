import React from 'react'

const SoftwareEngineering = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Software Engineering</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Software Architecture</h3>
                    <span className="skills__level">Design Patterns, API Development</span>

                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Project Management</h3>
                    <span className="skills__level">Requirements Analysis, Agile, Scrum, Kanban</span>

                </div>
            </div>

            <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                    <h3 className="skills__name">Development Practice</h3>
                    <span className="skills__level">Clean Code, TDD, Documentation</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SoftwareEngineering