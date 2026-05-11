import React, { useEffect, useState } from 'react';

const Home = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    // filter trending news
    const trendingNews = news.filter(item => item.others?.is_trending);

    return (
        <div className="p-5">

            <h2 className="text-2xl font-bold mb-5">
                🔥 Trending News
            </h2>

            <div className="grid gap-4">

                {
                    trendingNews.map(news => (
                        <div
                            key={news.id}
                            className="card bg-base-100 shadow-md p-4"
                        >
                            <img
                                src={news.thumbnail_url}
                                className="rounded-lg h-48 w-full object-cover"
                                alt=""
                            />

                            <h3 className="text-lg font-bold mt-3">
                                {news.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {news.details.slice(0, 120)}...
                            </p>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Home;