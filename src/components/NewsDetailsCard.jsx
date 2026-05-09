import { Link } from 'react-router';
import React from 'react';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className='space-y'>
            <img className="w-full h-[350px] object-cover" src={news?.image_url} alt={""} />
            <h3 className='text-2xl mt-8'>{news?.title}</h3>
            <p className='mt-3'>{news?.details}</p>
            <Link className="btn btn-primary mt-3"
             to= {`/category/${news?.category_id}`}>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;