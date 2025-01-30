import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Five = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const scrollContainerRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);

    // Add resize listener
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Touch handlers
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!touchStart) return;

        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            scroll(diff > 0 ? 'right' : 'left');
            setTouchStart(null);
        }
    };

    const timelineData = [
        {
            year: "1956",
            title: "Foundation",
            description: "Established as a small cooperative society with 375 members"
        },
        {
            year: "1960",
            title: "First Milestone",
            description: "Started providing agricultural loans to farmers"
        },
        {
            year: "1975",
            title: "Expansion",
            description: "Expanded services to include seed distribution and storage facilities"
        },
        {
            year: "1990",
            title: "Modernization",
            description: "Introduced modern farming techniques and equipment"
        },
        {
            year: "2000",
            title: "Digital Era",
            description: "Implemented computerized systems for better management"
        },
        {
            year: "2010",
            title: "Sustainability",
            description: "Launched organic farming initiatives"
        },
        {
            year: "2023",
            title: "Present Day",
            description: "Serving over 7600+ farmers with comprehensive agricultural solutions"
        }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = direction === 'left' ? -200 : 200;

        container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full bg-transparent py-8 md:py-12 px-2 md:px-8 relative text-white">
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-16">Our Journey Through Time</h2>

            {/* Navigation Buttons - Desktop only */}
            <div className="hidden md:block">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                >
                    <IoIosArrowBack className="text-2xl" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                >
                    <IoIosArrowForward className="text-2xl" />
                </button>
            </div>

            {/* Timeline Container */}
            <div
                ref={scrollContainerRef}
                className="overflow-x-auto hide-scrollbar"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <div className="relative min-w-max flex items-center gap-8 md:gap-16 px-4 md:px-8">
                    {/* Timeline Line */}
                    <div className="absolute top-[35px] md:top-[45px] left-0 right-0 h-[2px] bg-white/20" />

                    {/* Timeline Items */}
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center"
                            onClick={() => setActiveIndex(index)}
                            onMouseEnter={() => !isMobile && setActiveIndex(index)}
                        >
                            {/* Dot */}
                            <div
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 z-10
                                    ${activeIndex === index
                                        ? 'bg-yellow-400 scale-150'
                                        : 'bg-white/50 scale-100'
                                    }`}
                            />

                            {/* Content */}
                            <div className={`mt-6 md:mt-8 w-32 md:w-48 text-center transition-all duration-300
                                ${activeIndex === index ? 'opacity-100 transform translate-y-0' : 'opacity-50'}
                            `}>
                                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">{item.year}</h3>
                                <h4 className="text-base md:text-lg font-semibold mb-1">{item.title}</h4>
                                <p className="text-xs md:text-sm text-white/80">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Five;