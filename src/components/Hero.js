import React from 'react';
import heroImg from '../assets/hero.jpg';
import { useNavigate } from 'react-router';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-screen'>
            <img src={heroImg} className='object-cover top-0 left-0 h-screen w-full' />
            <div className='absolute bg-black/30 top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Cabins</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit sit temporibus doloremque repellendus voluptate, dolore quis nobis. Reprehenderit incidunt debitis cupiditate aut dignissimos doloremque libero maxime velit, autem harum.</p>
                    <button onClick={() => navigate('/reservations')} className='bg-white text-black hover:bg-slate-300'>Reserve Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero