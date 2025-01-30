import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Home', path: '#home' },
        { title: 'About Us', path: '#about' },
        { title: 'Our Services', path: '#services' },
        { title: 'Products', path: '#products' },
        { title: 'Contact Us', path: '#contact' }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: '#', color: 'hover:text-blue-400' },
        { icon: <FaTwitter />, url: '#', color: 'hover:text-sky-400' },
        { icon: <FaInstagram />, url: '#', color: 'hover:text-pink-400' },
        { icon: <FaLinkedin />, url: '#', color: 'hover:text-blue-500' },
    ];

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

            {/* Animated Dropdown Menu */}
            <div className={`
                fixed w-full transform transition-transform duration-300 ease-in-out mt-[76px]
                ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/20 rounded-b-2xl z-40
            `}>
                <ul className="max-w-2xl mx-auto py-6">
                    {menuItems.map((item, index) => (
                        <li key={index}
                            className="transform hover:scale-105 transition-all duration-200"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <a
                                href={item.path}
                                className="flex items-center gap-4 px-8 py-4 text-gray-800 hover:bg-white/50 rounded-xl m-2 backdrop-blur-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-lg font-medium">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;