import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const setNav = () => {
        setIsNavOpen(!isNavOpen);
        if (!isNavOpen) {
            document.body.style.overflow = 'hidden';
        } else { document.body.style = 'scroll' }
    }

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white text-3xl font-bold shadow-md'>Travel Co.</h1>
            <HiMenuAlt3 onClick={setNav} size={25} className='z-20 text-white cursor-pointer' />
            <div className={isNavOpen
                ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 flex flex-col z-10 ease-in duration-300'
                : 'absolute top-0 left-[-100%] ease-in duration-500 z-10'}>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold p-8 text-3xl cursor-pointer'>Home</li>
                    <li className='font-bold p-8 text-3xl cursor-pointer'>Destinations</li>
                    <li className='font-bold p-8 text-3xl cursor-pointer'>Reservations</li>
                    <li className='font-bold p-8 text-3xl cursor-pointer'>Amenities</li>
                    <li className='font-bold p-8 text-3xl cursor-pointer'>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;