import React, { useState } from 'react'
import "./services.css"

function Services() {
    const [toggleState, setToggleState] = useState(0) 

    const toggleTab = (index)=>{ 
          setToggleState(index)
    }

  return (
    <section className='services section' id='services'>
            <h2 className='section__title'>  Services </h2>
        <span className="section__subtitle"> What I offer</span>
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title"> Website <br /> Content: </h3>
                </div>

                <span className="services__button" onClick={()=>{ 
                    toggleTab(1)
                }}> 
                    View More <i className="uil uil-arrow-right services__button-icon"> </i>
                </span>
                <div className={toggleState===1 ?"services__modal active-modal" : "services__modal" }> 
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{ 
                            toggleTab(0)
                        }}></i>
                        <h3 className='services__modal-title'> SEO-friendly content. </h3>
                        <p className="services__modal-description"> 
                            Service with more than 2 years of experience. Providing quality work with clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                    Crafting SEO-friendly content for websites
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                impactful social media posts, email campaigns
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                Delivering well-researched technical guides 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> Technical <br /> Writing </h3>
                </div>

                <span className="services__button" onClick={()=>{ 
                    toggleTab(2)
                }}>  
                    View More <i className="uil uil-arrow-right services__button-icon"> </i>
                </span>
                <div className={toggleState===2 ? "services__modal active-modal" : "services__modal "}> 
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{ 
                            toggleTab(0)
                        }}></i>
                        <h3 className='services__modal-title'> Accurate information for complex products. </h3>
                        <p className="services__modal-description"> 
                            Service with more than 2 years of experience. Providing quality work with clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                    Crafting SEO-friendly content for websites
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                impactful social media posts, email campaigns
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                Delivering well-researched technical guides 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title"> Technical <br /> Writing </h3>
                </div>

                <span className="services__button" onClick={()=>{ 
                    toggleTab(3)
                }}  > 
                    View More <i className="uil uil-arrow-right services__button-icon"> </i>
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }> 
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={()=>{ 
                            toggleTab(0)
                        }}></i>
                        <h3 className='services__modal-title'> Accurate information for complex products. </h3>
                        <p className="services__modal-description"> 
                            Service with more than 2 years of experience. Providing quality work with clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                    Crafting SEO-friendly content for websites
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                impactful social media posts, email campaigns
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info"> 
                                Delivering well-researched technical guides 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default Services