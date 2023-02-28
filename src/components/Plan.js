import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img src={img1} className='object-cover w-full h-full p-2 row-span-3' />
                <img src={img2} className='object-cover w-full h-full p-2 row-span-2' />
                <img src={img3} className='object-cover w-full h-full p-2 row-span-4' />
                <img src={img4} className='object-cover w-full h-full p-2 row-span-3' />
            </div>
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quam alias sequi nihil itaque tempore temporibus tenetur veniam, quos debitis facere odio aut officiis ex magni harum repudiandae culpa ratione?</p>
                <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis ab excepturi veritatis numquam vero quia facilis quidem repellat! Nemo quis saepe, voluptates quas laudantium quibusdam hic unde labore aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor commodi deserunt possimus optio ducimus sed, minus eaque voluptas ea at laudantium, hic, ad voluptatum sint id! Eius cumque possimus accusantium.</p>
                <button className='border-black hover:shadow-xl hover:bg-slate-100'>Book Your Trip</button>
            </div>
        </div>
    )
}

export default Plan