import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        {
            title: 'Home',
            path: '#home'
            // Home no longer has submenu
        },
        {
            title: 'Discover Us',
            path: '#about',
            submenu: [
                { title: 'Our Story', path: '#history' },
                { title: 'Mission & Vision', path: '#mission' },
                { title: 'Leadership', path: '#leadership' },
                { title: 'Milestones', path: '#awards' },
                { title: 'Endorsed by Esteemed Voices', path: '#awards' },
                { title: 'Organization Structure', path: '#awards' },
            ]
        },
        {
            title: 'Farmers Voice',
            path: '#home'
            // Home no longer has submenu
        },
        {
            title: 'Product',
            path: '#services',
            submenu: [
                { title: 'Rice', path: '#agri-support' },
                { title: 'Paddy', path: '#financial' },
                { title: 'Cotton', path: '#training' },
            ]
        },
        {
            title: 'Our Pillars Of Success',
            path: '#products',
            submenu: [
                { title: 'Financial Services', path: '#dairy' },
                { title: 'Agri Inputs', path: '#agricultural' },
                { title: 'Agri Extension Services', path: '#seeds' },
                { title: 'Value-Added Services', path: '#seeds' },
                { title: 'Insurance Services & Pension', path: '#seeds' },
                { title: 'Welfare Services', path: '#seeds' },
            ]
        },
        {
            title: 'Awards & Accolades',
            path: '#home'
            // Home no longer has submenu
        },
        {
            title: 'Our Winning Formula',
            path: '#home'
            // Home no longer has submenu
        }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: '#', color: 'hover:text-blue-400' },
        { icon: <FaTwitter />, url: '#', color: 'hover:text-sky-400' },
        { icon: <FaInstagram />, url: '#', color: 'hover:text-pink-400' },
        { icon: <FaLinkedin />, url: '#', color: 'hover:text-blue-500' },
    ];

    const handleDropdownClick = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className="relative">
            <nav className="fixed w-full top-0 left-0 backdrop-blur-sm bg-white/20 border-b border-white/20 shadow-lg z-50">
                <div className="flex justify-between items-center px-8 py-4">
                    {/* Left - Menu Button - Updated styling */}
                    <button
                        className="text-xl text-black flex items-center gap-5"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <a className='p-3 hover:text-white bg-[#F2EA02]/70 text-xl transition-all duration-300 transform hover:scale-110  rounded-full backdrop-blur-lg'>

                            {isOpen ? <FaTimes /> : <FaBars />}
                        </a>
                        Menu
                    </button>

                    {/* Center - Logo */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={logo} alt="Logo" className="h-20 w-auto drop-shadow-md hover:scale-105 transition-transform" />
                    </div>

                    {/* Right - Social Icons */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                className={`text-gray-800 text-xl ${social.color} transition-colors`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Updated Dropdown Menu */}
            <div className={`
                fixed w-full transform transition-transform duration-300 ease-in-out mt-[76px]
                ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/20 rounded-b-2xl z-40
                max-h-[calc(100vh-76px)] overflow-y-hidden
            `}>
                <div className="max-w-4xl mx-auto py-6 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative bg-white/20 rounded-xl backdrop-blur-sm">
                                {item.submenu ? (
                                    <div className="h-full">
                                        <div
                                            className={`
                                                flex items-center justify-between px-6 py-4 cursor-pointer
                                                hover:bg-white/30 rounded-t-xl transition-all duration-300
                                                ${activeDropdown === index ? 'bg-white/30' : ''}
                                            `}
                                            onClick={() => handleDropdownClick(index)}
                                        >
                                            <span className="text-lg font-medium text-gray-800">{item.title}</span>
                                            <FaChevronDown
                                                className={`transition-transform duration-300 
                                                ${activeDropdown === index ? 'rotate-180' : ''}`}
                                            />
                                        </div>
                                        <div className={`
                                            transition-all duration-300 ease-in-out
                                            ${activeDropdown === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
                                            overflow-hidden bg-white/10
                                        `}>
                                            <ul className="p-4">
                                                {item.submenu?.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <a
                                                            href={subItem.path}
                                                            className="block py-2 px-4 text-gray-600 hover:text-gray-800 
                                                                hover:bg-white/50 rounded-lg transition-all duration-200
                                                                hover:translate-x-2"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        href={item.path}
                                        className="flex items-center px-6 py-4 text-gray-800 
                                            hover:bg-white/30 rounded-xl transition-all duration-300
                                            hover:translate-x-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="text-lg font-medium">{item.title}</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;