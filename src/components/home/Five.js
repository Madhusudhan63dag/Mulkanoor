import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logo from '../../assets/logo.png'; // Import your logo

const Five = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const scrollContainerRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);

    // Add resize and scroll check
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            checkScrollable();
        };

        const checkScrollable = () => {
            const container = scrollContainerRef.current;
            if (container) {
                setIsScrollable(container.scrollWidth > container.clientWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        checkScrollable();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -300 : 300;
        const targetScroll = container.scrollLeft + scrollAmount;

        // Ensure we scroll to item boundaries
        const itemWidth = 250; // Approximate width of each item including gap
        const normalizedScroll = Math.round(targetScroll / itemWidth) * itemWidth;

        container.scrollTo({
            left: normalizedScroll,
            behavior: 'smooth'
        });

        // Update active index based on scroll position
        const newIndex = Math.round(normalizedScroll / itemWidth);
        setActiveIndex(Math.max(0, Math.min(newIndex, timelineData.length - 1)));
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
            year: "1964",
            title: "Growth Phase",
            description: "Membership crossed 1000 farmers"
        },
        {
            year: "1970",
            title: "Infrastructure Development",
            description: "Built first storage facility for grains"
        },
        {
            year: "1975",
            title: "Expansion",
            description: "Expanded services to include seed distribution and storage facilities"
        },
        {
            year: "1982",
            title: "Technology Adoption",
            description: "Introduced mechanized farming equipment"
        },
        {
            year: "1990",
            title: "Modernization",
            description: "Introduced modern farming techniques and equipment"
        },
        {
            year: "1995",
            title: "Financial Growth",
            description: "Credit disbursement reached 50 crores"
        },
        {
            year: "2000",
            title: "Digital Era",
            description: "Implemented computerized systems for better management"
        },
        {
            year: "2005",
            title: "Quality Standards",
            description: "Achieved ISO certification for processes"
        },
        {
            year: "2010",
            title: "Sustainability",
            description: "Launched organic farming initiatives"
        },
        {
            year: "2015",
            title: "Innovation",
            description: "Introduced mobile banking services"
        },
        {
            year: "2023",
            title: "Present Day",
            description: "Serving over 7600+ farmers with comprehensive agricultural solutions"
        }
    ];

    return (
        <div className="w-full bg-transparent py-8 md:py-12 px-2 md:px-8 relative">
            <h2 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-16">Our Journey Through Time</h2>

            <div className="relative">
                {/* Navigation Buttons - Moved outside scroll container and improved z-index */}
                {isScrollable && (
                    <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                        <button
                            onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                            backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                            pointer-events-auto cursor-pointer z-30"
                        >
                            <IoIosArrowBack className="text-3xl" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 
                            backdrop-blur-sm p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110
                            pointer-events-auto cursor-pointer z-30"
                        >
                            <IoIosArrowForward className="text-3xl" />
                        </button>
                    </div>
                )}

                {/* Timeline Container */}
                <div className="flex flex-col gap-8">
                    {/* Timeline Items */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto hide-scrollbar scroll-smooth relative z-10"
                    >
                        <div className="relative min-w-max flex items-center gap-6 md:gap-12 px-4 md:px-8 py-4">
                            {/* Timeline Line with gradient effect */}
                            <div className="absolute top-[45px] md:top-[55px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            {/* Timeline Items */}
                            {timelineData.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center cursor-pointer"
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {/* Logo Container */}
                                    <div className={`
                                        w-14 h-14 md:w-20 md:h-20 rounded-full 
                                        flex items-center justify-center transition-all duration-500
                                        ${activeIndex === index
                                            ? 'bg-white/20 scale-125 shadow-lg shadow-white/10'
                                            : 'bg-white/5 hover:bg-white/10'}
                                    `}>
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="w-10 h-10 md:w-14 md:h-14 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Year and Title Only */}
                                    <div className={`
                                        mt-8 w-36 md:w-52 text-center transition-all duration-500
                                        ${activeIndex === index
                                            ? 'opacity-100 transform translate-y-0'
                                            : 'opacity-40 hover:opacity-60'}
                                    `}>
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">{item.year}</h3>
                                        <h4 className="text-sm md:text-lg font-semibold">{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Active Content Section - Below Timeline */}
                    {activeIndex !== null && (
                        <div className="w-full max-w-2xl mx-auto mt-8 transition-all duration-500 animate-fade-in">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                <p className="text-base md:text-lg  leading-relaxed">
                                    {timelineData[activeIndex].description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Five;