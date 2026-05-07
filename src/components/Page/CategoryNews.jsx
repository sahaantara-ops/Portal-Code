import React, { useEffect , useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CategoryCard from '../Cards/CategoryCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    console.log(id, data);
    
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            return;
        } else if (id == "1"){
        const filteredNews = data.filter((news) => news.others.is_today_pick == true);
        setCategoryNews(filteredNews);
        } else {
         const filteredNews = data.filter((news) => news.category_id == id);
                 console.log(filteredNews);
                 setCategoryNews(filteredNews);
        }
     
        
    
    }, [data,id]);
    return (
        <div className='font-bold'>
          <h2>Total <span className='text-4xl text-fuchsia-700'>{categoryNews.length} found</span></h2>
        
        <div>
            {
                categoryNews.map( (news) => 
                    (<CategoryCard key={news.id} news={news} /> ))
            }
        </div>
        </div>
    );
};

export default CategoryNews;