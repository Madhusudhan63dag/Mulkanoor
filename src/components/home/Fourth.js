import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
// Import all your images
import historyImage from '../../assets/dummy1.jpeg' // Replace with actual history image
import missionImage from '../../assets/dummy2.jpeg' // Replace with actual mission image
import visionImage from '../../assets/dummy3.jpeg'  // Replace with actual vision image
import valuesImage from '../../assets/dummy5.jpeg'  // Replace with actual values image

const Fourth = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const dropdownData = [
        {
            title: "Solar Power Plant",
            content: "Cooperative Society has installed a 500 KWp solar power plant for running the cotton ginning and pressing unit and parboiled rice mill with the financial assistance from NCDC",
            image: historyImage
        },
        {
            title: "State Electricity Board",
            content: "In the early years the society villages and farms have got electrified by Depositing voluntary debentures to the State Electricity Board.",
            image: missionImage
        },
        {
            title: "Micro Irrigation project",
            content: "Promoted Micro Irrigation project by sanctioning sprinklers and drip irrigation loans to 500 members.",
            image: visionImage
        },
        {
            title: "Animal Health Camps",
            content: "Conducted Animal Health Camps in 14 villages in association with Animal Husbandry Department",
            image: valuesImage
        },
        {
            title: "Organized Eyecamp",
            content: "Organized Eyecamp for members and facilitated 150 Cataract operations for society members free of cost.",
            image: valuesImage
        },
        {
            title: "Pension to Senior Member",
            content: "Pension to Senior Members: Society members above 65 years can withdraw dividend distributed on the shares and interest earned on thrift deposit on monthly basis.",
            image: valuesImage
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Get current image based on open dropdown
    const currentImage = openIndex !== null ? dropdownData[openIndex].image : dropdownData[0].image;

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center gap-8 md:gap-16 p-4 md:p-8">
            {/* Left side - Image with transition */}
            <div className="w-full md:w-1/2">
                <div className="relative h-[300px] md:h-[600px] rounded-2xl shadow-xl overflow-hidden">
                    <img
                        src={currentImage}
                        alt="Mulkanoor Cooperative"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    />
                    {/* Optional overlay for smooth transition */}
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
                </div>
            </div>

            {/* Right side - Dropdowns */}
            <div className="w-full md:w-1/2 space-y-4">
                {dropdownData.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            border border-white/20 rounded-xl overflow-hidden backdrop-blur-sm
                            ${openIndex === index ? 'border-yellow-400/50' : ''}
                        `}
                    >
                        <button
                            onClick={() => handleToggle(index)}
                            className={`
                                w-full p-4 md:p-6 flex items-center justify-between
                                hover:bg-white/10 transition-colors
                                ${openIndex === index ? 'bg-white/10' : ''}
                            `}
                        >
                            <span className="text-xl md:text-2xl font-medium">{item.title}</span>
                            <IoIosArrowDown
                                className={`text-2xl transition-transform duration-300 
                                    ${openIndex === index ? 'rotate-180' : ''}`
                                }
                            />
                        </button>
                        {/* Dropdown content */}
                        <div className={`
                            overflow-hidden transition-all duration-300 bg-white/5
                            ${openIndex === index ? 'max-h-48 p-4 md:p-6' : 'max-h-0'}
                        `}>
                            <p className=" text-base md:text-lg">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Fourth