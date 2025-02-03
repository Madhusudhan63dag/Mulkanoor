import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary h-[50vh] text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="flex items-center">
                                <FaPhone className="mr-2" />
                                <span>+91 123456789</span>
                            </p>
                            <p className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <span>info@mulkanoor.com</span>
                            </p>
                            <p className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>Mulkanoor, Telangana, India</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-secondary">Home</Link></li>
                            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-secondary text-2xl">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-secondary text-2xl">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-secondary text-2xl">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Mulkanoor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
