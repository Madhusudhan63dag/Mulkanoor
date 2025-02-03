import React, { useState } from 'react';
import CountUp from 'react-countup';
import useInView from '../../hooks/useInView';

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

const ScrollTriggeredCountUp = ({ end, ...props }) => {
    const [ref, isInView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    return (
        <div ref={ref}>
            {isInView ? (
                <CountUp end={end} duration={2.5} {...props} />
            ) : (
                <span>{0}</span>
            )}
        </div>
    );
};

const StatCard = ({ number, suffix, prefix, label }) => (
    <div className='text-center p-6 rounded-xl bg-gradient-to-br from-white to-transparent backdrop-blur-sm transition-all duration-500 hover:scale-105'>
        <div className='text-4xl md:text-6xl font-bold'>
            <ScrollTriggeredCountUp
                end={number}
                prefix={prefix}
                suffix={suffix}
            />
        </div>
        <p className='text-sm md:text-base mt-2'>{label}</p>
    </div>
);

const HeroBanner = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [statsRef, statsInView] = useInView({ threshold: 0.1 });

    return (
        <div className="relative z-10 px-2 md:px-4 h-full flex justify-start items-start overflow-x-hidden overflow-y-hidden">
            <div className="container mx-auto flex items-center flex-col text-center">
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
                {/* Stats Section */}
                <div ref={statsRef} className={`
                    w-screen bg-white/5 backdrop-blur-md
                    transition-all duration-1000
                    ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}>
                    <div className='flex flex-col md:flex-row items-center justify-around gap-8 py-16'>
                        <StatCard
                            number={7600}
                            suffix="+"
                            label="Farmers Empowered"
                        />
                        <StatCard
                            number={220}
                            prefix="₹ "
                            suffix=" Cr"
                            label="Credit Facilitated"
                        />
                        <StatCard
                            number={40000}
                            suffix="+"
                            label="Acres Cultivated per Season"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
