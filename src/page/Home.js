import React, { useState } from 'react';
import banner from '../assets/homebanner.webp';
import HeroBanner from '../components/home/HeroBanner';
import Second from '../components/home/Second';
import { Third } from '../components/home/Third';

const Home = () => (
    <div className="relative pt-24">
        <div
            className="fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: `url(${banner})`,
                height: "100vh",
                zIndex: -1
            }}
        >
            <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Section */}
        <div className="relative">
            <div className="min-h-screen">
                <HeroBanner />
            </div>

            <div className="">
                <div className="container mx-auto px-4 py-16">
                    <Second />
                </div>
                <div className="container mx-auto px-4 py-16">
                    <Third />
                </div>
            </div>
        </div>
    </div>
);

export default Home;