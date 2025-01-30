import React, { useState } from 'react';


const impactMetrics = {
    farmersEmpowered: '7600+',
    creditFacilitated: 'Rs 220 crores',
    landCultivated: '40,000+'
};

const cardData = [
    {
        title: "Empowering",
        content: "Celebrating 69+ remarkable years of empowering farmers and nurturing the Mulkanoor Cooperative family with dedication, trust, and prosperity."
    },
    {
        title: "Farmers",
        content: "For 69+ years, Mulkanoor Cooperative Society has been transforming farmers' lives through unwavering support, innovative practices, and a commitment to sustainable growth and prosperity."
    },
    {
        title: "Broader community",
        content: "Vision & Mission Page."
    },
    {
        title: "Rooted in trust and collaboration",
        content: `Driving holistic progress to uplift farmers, their families, and the community, Mulkanoor Cooperative Society stands as a beacon of trust, innovation, and collaboration. Together, we thrive as one family, rooted in trust, unity, and mutual growth.

Impact Metrics:
• ${impactMetrics.farmersEmpowered} farmers empowered
• ${impactMetrics.creditFacilitated} credit facilitated to farmer members
• ${impactMetrics.landCultivated} acres of land/season cultivated sustainably`
    }
];

const Card = ({ title, content, className = '', isHovered, onHover }) => (
    <div
        className={`
            min-w-[200px] flex-1 bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg 
            transition-all duration-700 ease-out
            transform hover:shadow-2xl
            ${isHovered ? 'md:flex-grow-[3] scale-105' : 'md:flex-grow-[1] scale-100'}
            ${!isHovered && onHover ? 'md:flex-grow-[0.7] scale-95' : ''}
            ${className}
        `}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
    >
        <h1 className='text-2xl md:text-4xl mb-4 md:mb-10 transition-transform duration-500'>{title}</h1>
        <div className={`
            transition-all duration-700 ease-in-out
            transform
            ${isHovered
                ? 'opacity-100 max-h-[500px] translate-y-0'
                : 'opacity-0 max-h-0 translate-y-10 overflow-hidden'
            }
        `}>
            <p className={`
                text-start 
                transition-all duration-500
                ${title === 'rooted in trust and collaboration' ? 'text-xs md:text-sm' : 'text-lg md:text-2xl'}
            `}>
                {content}
            </p>
        </div>
    </div>
);

const HeroBanner = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="relative z-10 px-2 md:px-4 h-full flex justify-start items-start">
            <div className="container mx-auto text-white flex items-center flex-col text-center">
                <h1 className='text-3xl md:text-5xl font-bold mb-8 md:mb-16'>Empowering Farmers Enriching Communities</h1>
                <div className='flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0 w-full h-auto md:h-[70vh]'>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            isHovered={hoveredIndex === index}
                            onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
