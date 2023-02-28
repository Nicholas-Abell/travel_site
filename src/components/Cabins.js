import React from 'react';
import cabinImg1 from '../assets/cabin_1.jpg';
import cabinImg2 from '../assets/cabin_2.jpg';
import cabinImg3 from '../assets/cabin_3.jpg';
import cabinImg4 from '../assets/cabin_4.jpg';

const Cabins = () => {
    return (
        <div className='grid grid-rows-6 grid-cols-2 gap-4 h-[80vh]'>
            <img src={cabinImg1} className='row-span-3 object-cover w-full h-full'/>
            <img src={cabinImg2} className='row-span-2 object-cover w-full h-full'/>
            <img src={cabinImg3} className='row-span-5 object-cover w-full h-full'/>
            <img src={cabinImg4} className='row-span-4 object-cover w-full h-full'/>
        </div>
    )
}

export default Cabins