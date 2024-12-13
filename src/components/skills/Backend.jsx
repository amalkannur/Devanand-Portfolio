import React from 'react'

function Backend() {
  return (
    <div className='skills__content'>
        <h3 className="skills__title"> Backend developer </h3>
        <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Mongo DB </h3>
                    <span className="skills__level"> Basic </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Git </h3>
                    <span className="skills__level"> Advanced </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Node.js </h3>
                    <span className="skills__level"> Basic </span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Express </h3>
                    <span className="skills__level"> Basic </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> Postman </h3>
                    <span className="skills__level"> Basic </span>
                </div>
            </div>

            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name"> API </h3>
                    <span className="skills__level"> Basic </span>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Backend