import React from 'react'
import banner from '../../assets/homebannersecond.webp'

const Second = () => {
    return (
        <div className='px-4 md:px-8 py-8 md:py-12 bg-transparent'>
            <div className='flex items-center text-center justify-center flex-col'>
                <h1 className='text-3xl md:text-5xl'>Mulkanoor CoOperative Ecosystem</h1>
                <p className='text-base md:text-lg w-full md:w-1/2 mt-4 md:mt-5 px-2'>
                    For 69+ years, Mulkanoor Coop has transformed into a holistic network of solutions, resources, and assistance for farmers, championing equity, openness, and sustainable development.
                </p>
                <img
                    src={banner}
                    alt="Mulkanoor CoOperative"
                    className='w-full md:w-auto mt-6 md:mt-8 rounded-lg'
                />
            </div>
        </div>
    )
}

export default Second