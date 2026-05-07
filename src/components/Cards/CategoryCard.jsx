import React from 'react';

const CategoryCard = ({news}) => {
    return (
        <div className='border-2 border-gray-300 rounded-lg p-5 mb-5'>
            <h3 className='text-xl font-medium'>{news.title}</h3>
            <img className='w-full h-64 object-cover my-3' src={news.image_url} alt="" />
        </div>
    );
};

export default CategoryCard;
