import React from 'react'
import ZoomIn from '../animations/zoomIn'
import Title from '../ui/title'

const skillsList = [
    {
        id: 1,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" width={65} height={65} />,
        skill_name: "HTML",
        skill_description: "Proficient in creating structured and semantic web content using HTML."
    },
    {
        id: 2,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" width={65} height={65} />,
        skill_name: "CSS",
        skill_description: "Expert in styling web pages with modern CSS techniques and frameworks."
    },
    {
        id: 3,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width={65} height={65} />,
        skill_name: "JavaScript",
        skill_description: "Skilled in writing efficient and maintainable JavaScript code."
    },
    {
        id: 4,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue.js" width={65} height={65} />,
        skill_name: "Vue.js",
        skill_description: "Experienced in building interactive UIs with Vue.js framework."
    },
    {
        id: 5,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width={65} height={65} />,
        skill_name: "Node.js",
        skill_description: "Proficient in developing backend applications using Node.js."
    },
    {
        id: 6,
        icon: <img src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" alt="MySQL" width={65} height={65} />,
        skill_name: "MySQL",
        skill_description: "Experienced in designing and managing relational databases with MySQL."
    },
    {
        id: 7,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" width={65} height={65} />,
        skill_name: "PHP",
        skill_description: "Skilled in server-side scripting with PHP."
    },
    {
        id: 8,
        icon: <img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" alt="WordPress" width={65} height={65} />,
        skill_name: "WordPress",
        skill_description: "Expert in creating and customizing WordPress sites."
    },
    {
        id: 9,
        icon: <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" width={65} height={65} />,
        skill_name: "Shopify",
        skill_description: "Proficient in building and customizing Shopify stores."
    },
    {
        id: 10,
        icon: <img src="https://i.postimg.cc/Xvcx6396/icons8-seo-64.png" alt="SEO" width={65} height={65} />,
        skill_name: "SEO",
        skill_description: "Skilled in optimizing websites for search engines."
    },
    {
        id: 11,
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width={65} height={65} />,
        skill_name: "Figma",
        skill_description: "Experienced in designing user interfaces and prototypes with Figma."
    },
    {
        id: 12,
        icon: <img src="https://i.postimg.cc/Vv3HLg6x/icons8-design-64.png" alt="UI" width={65} height={65} />,
        skill_name: "UI",
        skill_description: "Specializes in creating visually appealing and user-friendly interfaces."
    },
]

const Skills = () => {
    return (
        <section id="skills" className="skills-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Skills</p>
                            <h2>My Skills</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        skillsList.map(({ icon, id, skill_description, skill_name }) => {
                            return (
                                <div key={id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                    <ZoomIn id={id}>
                                        <div className="skill-item">
                                            {icon}
                                            <h4>{skill_name}</h4>
                                            <p>{skill_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills
