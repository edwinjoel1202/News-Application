import React from 'react'
import image from '../assets/news.jpg'

export const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h6 className="card-title">{title.slice(0,40)}</h6>
            <p className="card-text">{description?description.slice(0,90): "No Description Found !"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}
