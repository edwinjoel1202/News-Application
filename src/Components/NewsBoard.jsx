import React, { useEffect, useState } from 'react'
import { NewsItem } from './NewsItem';

export const NewsBoard = ({category}) => {

    //create a useState for articles..
    const [articles, setArticles] = useState([]);

    //This useEffect renders only on first render..since the dependency array is empty and acts as constructor
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url)
        .then(response=> response.json())  // resolve logic
        .then(data=> setArticles(data.articles));  // rejected logic
    },[category]);

  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}
