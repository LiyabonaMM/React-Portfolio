import React from 'react';
import { RiBookLine } from "@remixicon/react";
import Title from '../ui/title';
import SlideUp from '../animations/slideUp';
import { workExperience } from '../../utlits/fackData/workExperience';
import logo from "../../assets/images/logo.png"; // Assuming you have a logo image

const Experience = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="text-center">
                            <img src={logo} alt="Logo" className="logo" />
                        </div>
                        <Title>
                            <p>Experience</p>
                            <h2>Professional Resume</h2>
                        </Title>
                    </div>
                </div>
                <div className="resume-items">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="experience-list">
                                {
                                    workExperience.map(({ id, institute, position, years, description }) => (
                                        <Card key={id} institute={institute} position={position} years={years} description={description} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience

const Card = ({ institute, position, years, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <i><RiBookLine /></i>
                </div>
                <div className="content">
                    <span className="years">{years}</span>
                    <h4>{institute}</h4>
                    <span className="company">{position}</span>
                    <p>{description}</p>
                </div>
            </div>
        </SlideUp>
    )
}