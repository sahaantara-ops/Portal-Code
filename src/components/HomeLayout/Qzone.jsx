import React from 'react';
import image from '../../assets/swimming.png'
import image1 from '../../assets/playground.png'
import image2 from '../../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-3'>
                <img className='w-full' src={image} alt="" />
                <img className='w-full' src={image1} alt="" />
                <img className='w-full' src={image2} alt="" />
              
            </div>
        </div>
    );
};

export default QZone;