import React from 'react';
import { RiDownloadLine } from '@remixicon/react';
import profile_img from "../../assets/images/about/profile.jpg";
import SlideUp from '../animations/slideUp';

const Banner = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-sm-12">
                            {/*  START HERO DESIGN AREA  */}
                            <SlideUp>
                                <div className="hero-content rmb-25">
                                    <h1>About Me <span>Liyabona Mxhalisa</span></h1>
                               
                                    <p>
                                        I am a passionate UI Designer and Frontend Developer with a knack for creating elegant solutions in the least amount of time. I have a love for clean, modern, and user-friendly interfaces, and I thrive in environments that allow me to continuously learn and grow.
                                    </p>
                                    <p>
                                        When I'm not coding or designing, you can find me exploring the beautiful landscapes of Cape Town, reading about the latest design trends, or experimenting with new technologies. I believe in the power of collaboration and am always excited to take on new challenges and projects.
                                    </p>
                                   
                                </div>
                            </SlideUp>
                            {/*  / END HERO DESIGN AREA  */}
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            {/*  START HERO IMAGE AREA  */}
                            <SlideUp>
                                <div className="about-image-part text-center">
                                    <img src={profile_img} alt="About Me" />
                                    <h2>Liyabona Mxhalisa</h2>
                                    <div className="about-btn btn-one text-center">
                                        <h6>Available for Work</h6>
                                        <div className="circle pulse color-pulse"></div>
                                    </div>
                                </div>
                            </SlideUp>
                            {/*  / END HERO IMAGE AREA  */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
