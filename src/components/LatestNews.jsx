import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNewsData(data));
    }, []);

    // Trending news only
    const breakingNews = newsData.filter(
        news => news.others?.is_trending === true
    );

    return (

        <div className='flex items-center gap-5 bg-base-200 p-3'>

            <p className='text-base-100 bg-secondary px-3 py-2 font-bold'>
                Latest
            </p>

            <Marquee pauseOnHover={true} speed={60}>
                {
                    breakingNews.map(news => (
                        <p
                            key={news.id}
                            className='font-bold mr-10'
                        >
                            🔥 {news.title}
                        </p>
                    ))
                }
            </Marquee>

        </div>
    );
};

export default LatestNews;