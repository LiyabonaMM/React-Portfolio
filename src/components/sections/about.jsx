import React, { useEffect, useState } from 'react';
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react';
import profile_img from "../../assets/images/about/profile.jpg";
import SlideUp from '../animations/slideUp';

const roles = ["UI Designer", "Frontend Developer"];

const About = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            const isEnd = displayedText === currentRole;
            const isStart = displayedText === "";

            if (isDeleting) {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
                if (isStart) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            } else {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
                if (isEnd) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const typingSpeed = isDeleting ? 50 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, roleIndex]);

    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-6">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Liyabona Mxhalisa</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a href=""><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a href=""><i><RiTwitterXLine size={20} /></i></a></li>
                                        <li><a href=""><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a href=""><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-6">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>Hello, I’m Liyabona Mxhalisa</h2>
                                <h2>
                                    <span className="typing-effect">{displayedText}</span>
                                   <h2>Based in Cape Town</h2>
                                </h2>
                                <div className="hero-btns">
                                    <a href="#" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Websites</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> UI Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> E-commerce</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> WordPress</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Shopify</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Figma</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    );
};

export default About;
