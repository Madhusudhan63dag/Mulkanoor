import React, { useState } from 'react'
import { IoArrowUpCircleOutline } from "react-icons/io5";
import dummy from '../../assets/dummy.jpeg';
export const Third = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Add window resize listener
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = (index) => {
        if (isMobile) {
            // Simple toggle for mobile
            setExpandedCard(expandedCard === index ? null : index);
        }
    }

    const cardsData = [
        {
            date: "1/10/2025",
            name: "Ramachandram",
            role: "Cotton Farmer",
            image: dummy, // Your first image
            content: {
                testimonial: "The service provided by Mulkanoor has been exceptional. Their support has transformed my farming practices.",
                location: "Mulkanoor Village",
                experience: "15 years",
                crops: "Cotton, Rice"
            }
        },
        {
            date: "5/09/2025",
            name: "Pochaiah, Farmer",
            role: "Rice Farmer",
            image: dummy, // Your second image
            content: {
                testimonial: "The training programs have been a game-changer for me. I’ve learned modern techniques that have made my farm more profitable",
                location: "Karimnagar District",
                experience: "20 years",
                crops: "Rice, Vegetables"
            }
        },
        {
            date: "3/08/2025",
            name: "Rajaiah, Farmer",
            role: "Mixed Crop Farmer",
            image: dummy, // Your third image
            content: {
                testimonial: "With the financial support from Mulkanoor Cooperative Society, I was able to invest in a new tractor. This has drastically reduced my labor costs and improved the efficiency of my farming operations. Today, my land productivity has increased, and I’m able to meet the growing demands of the market.",
                location: "Warangal District",
                experience: "10 years",
                crops: "Mixed Crops"
            }
        },
        {
            date: "7/07/2025",
            name: "Korra Chandu, Farmer",
            role: "Organic Farmer",
            image: dummy, // Your fourth image
            content: {
                testimonial: "Thanks to Mulkanoor’s seasonal crop loans and expert guidance, I was able to purchase high-quality seeds and fertilizers on time. My farm’s productivity has skyrocketed, and I’ve seen a steady increase in profits over the last few seasons. I’m now able to plan for the future with confidence",
                location: "Siddipet District",
                experience: "12 years",
                crops: "Organic Vegetables"
            }
        }
    ];

    return (
        <div className="px-4 md:px-8 bg-transparent">
            <div>
                <h1 className='text-2xl md:text-5xl text-center font-medium'>Farmers' Voice : What they Say about Us</h1>
                <div className='mt-8 md:mt-20'>
                    <div className='flex flex-col md:flex-row gap-6 md:gap-3'>
                        {cardsData.map((card, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className={`bg-yellow-200 relative p-4 md:p-5 rounded-xl transition-all duration-300 transform
                                    ${!isMobile && expandedCard === index ? 'md:scale-125 relative z-10 md:mx-14' : 'scale-100'}
                                    ${expandedCard === null ? 'mb-0' : expandedCard === index ? 'mb-8' : 'mb-0'}
                                    ${isMobile ? 'cursor-pointer' : ''}
                                `}
                            >
                                {!isMobile && (
                                    <div
                                        className='absolute -right-2 md:-right-5 -top-4 md:-top-6 bg-white p-3 md:p-5 rounded-[2rem] md:rounded-[3.5rem] cursor-pointer'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedCard(expandedCard === index ? null : index);
                                        }}>
                                        <IoArrowUpCircleOutline className={`text-2xl md:text-4xl ${expandedCard === index ? '-rotate-[140deg] duration-100' : 'rotate-45'}`} />
                                    </div>
                                )}

                                <h1 className='text-xs md:text-sm text-gray-500'>{card.date}</h1>
                                <h1 className='text-xl md:text-2xl pt-6 md:pt-10 pb-2'>{card.name}, {card.role}</h1>

                                <div className='transition-all duration-300 overflow-hidden'>
                                    {expandedCard === index ? (
                                        <div className='p-2 md:p-4'>
                                            <p className='text-gray-700 mb-4 text-sm md:text-base'>"{card.content.testimonial}"</p>
                                            <div className='text-xs md:text-sm text-gray-600'>
                                                <p>Location: {card.content.location}</p>
                                                <p>Farming Experience: {card.content.experience}</p>
                                                <p>Crops: {card.content.crops}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            className='w-full rounded-xl transition-all duration-300'
                                            src={card.image}
                                            alt={`${card.name} - ${card.role}`}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
