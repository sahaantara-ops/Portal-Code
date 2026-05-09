import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../HomeLayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState(null);
    console.log(data, id, news);

    useEffect(()=>{
        const newsDetails = data.find((newsItem) => newsItem.id === id);
        setNews(newsDetails);
    },[data, id]);
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-4'>News Details</h2>
                <NewsDetailsCard news={news}/>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>

         </main>

        </div>
    );
};

export default NewsDetails;