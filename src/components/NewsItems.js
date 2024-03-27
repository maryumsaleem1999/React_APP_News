import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title , description , imageUrl , newsUrl , publishedAt , author , source} = this.props;
    return (
      <div>
        <div className="card my-3">
  <img src={!imageUrl?"https://dims.apnews.com/dims4/default/0e48cf2/2147483647/strip/true/crop/4000x2250+0+209/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F31%2Fe5%2F3ca98913e8480530117d7c97a10a%2F13dc2a62b1c54ed0b1ee8967677e3334":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <div className="box my-3">
    <span className="badge py-2 bg-dark text-light">By {!author ? "unkown" :author}</span><br />
    <span className="badge py-2 my-2 bg-dark text-light">{new Date(publishedAt).toGMTString()}</span>
    </div>
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left:'90%' , zIndex :'1' }}>
   {source}
    </span>
    <a href={newsUrl} target="_blank" className="btn btn-dark">Go somewhere</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItems
