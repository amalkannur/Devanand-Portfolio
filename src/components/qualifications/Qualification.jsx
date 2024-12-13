import React from 'react'
import "./qualification.css"

function Qualification() {
  return (
    <section className='qualification section'>
        <h2 className="section__title"> Qualification </h2>
        <span className='section__subtitle'> My Personal Journey </span>

        <div className="qualification__container container">
            <div className="qualification__tabs"> 
                <div className="qualification__button button--flex qualification__active"> 
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className="qualification__button button--flex"> 
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

                <div className="qualification__sections"> 
                    <div className="qualification__content"> 
                        <div className="qualification__data"> 
                            <div> 
                                <h3 className="qualification__title"> B-Tech </h3>
                                <span className="qualification__subtitle"> APJKTU </span>
                                <div className="qualification__calendar"> 
                                       <i className="uil uil-calendar-alt"> </i>
                                       2017-2021
                                </div>
                            </div>
                            <div> 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"> </span>
                            </div>
                        </div>

                        <div className="qualification__data"> 
                            <div></div>
                            <div> 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"> </span>
                            </div>

                            <div> 
                            <h3 className="qualification__title">Product Content Specialist</h3>
                            <span className="qualification__subtitle"> Mouser Electronics India Pvt Ltd </span>
                                <div className="qualification__calendar"> 
                                       <i className="uil uil-calendar-alt"> </i>
                                       2021-2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data"> 
                            <div> 
                                <h3 className="qualification__title">Experience 2</h3>
                                <span className="qualification__subtitle"> Company name </span>
                                <div className="qualification__calendar"> 
                                       <i className="uil uil-calendar-alt"> </i>
                                       2023-Present
                                </div>
                            </div>
                            <div> 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"> </span>
                            </div>
                        </div>

                        <div className="qualification__data"> 
                            <div></div>
                            <div> 
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"> </span>
                            </div>

                            <div> 
                                <h3 className="qualification__title">  Freelance /Part time </h3>
                                <span className="qualification__subtitle"> TechQuill Technologies </span>
                                <div className="qualification__calendar"> 
                                       <i className="uil uil-calendar-alt"> </i>
                                       2022-Present
                                </div>
                            </div>
                        </div>

                      
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Qualification