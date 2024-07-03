import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill, RiDeviceFill, RiBrushLine, RiShoppingCartFill, RiSearchLine, RiShieldFill, RiCodeSSlashFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiDeviceFill size={65} />,
        service_name: "Web Design",
        service_description: "I design and build responsive, user-friendly websites using HTML, CSS, and JavaScript."
    },
    {
        id: 2,
        icon: <RiBrushLine size={65} />,
        service_name: "UI Design",
        service_description: "I create intuitive and visually appealing user interfaces to enhance user experience."
    },
    {
        id: 3,
        icon: <RiShoppingCartFill size={65} />,
        service_name: "E-commerce",
        service_description: "I build and customize e-commerce platforms on WordPress and Shopify."
    },
    {
        id: 4,
        icon: <RiSearchLine size={65} />,
        service_name: "SEO Optimization",
        service_description: "I optimize websites for search engines to improve visibility and drive traffic."
    },
    {
        id: 5,
        icon: <RiShieldFill size={65} />,
        service_name: "Maintenance",
        service_description: "I provide ongoing website maintenance to ensure optimal performance and security."
    },
    {
        id: 6,
        icon: <RiCodeSSlashFill size={65} />,
        service_name: "Custom Development",
        service_description: "I offer custom development services to meet unique client requirements."
    }
]

const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6 mb-4">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
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

export default Services
