import React, { Component } from 'react'
import bulk from './bulk.jpg'
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
export class NewsItem extends Component {
  render() {
    let {title,description,ImageUrl,url,author,publishedAt,name}=this.props;
    const gmtDate = new Date(publishedAt).toGMTString();
    return (
      <div className="my-3">
        <div  className="card">
            <img src={ImageUrl?ImageUrl:bulk}  className="card-img-top" alt='...'/>
            <div  className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1'}} > {name}</span>
                <h5  className="card-title">{title}</h5>
                <p  className="card-text">{description}</p>
                <p  className="card-text text-success " style={{fontFamily:'poppins'}} >By {author?author:"Unknown"} on {gmtDate}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
