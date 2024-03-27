import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'us',
        category:'sports',
      }
      static propTypes = {
        country : PropTypes.string,
        category : PropTypes.string,
      }
    toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    constructor(props){
        super(props);
        console.log("this is constructor");
        this.state = {
            articles:[],
            loading: false,
            page : 1,
           pageSize : 8
            
        }
        document.title = `${this.toCapitalize(this.props.category) }- NewsApp`;
     
    }
    
    async updateNews(){
        this.props.setProgress(10);
    
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize= ${this.state.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseddata = await data.json();
        this.props.setProgress(70);
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles ,
             totalResults: parseddata.totalResults ,
             loading:false
             
        })
         this.props.setProgress(100);
        
    }
    async componentDidMount(){
      this.updateNews();
        
    }
    
//    handleprevbtn = async ()=>{
//     this.setState({
//         page : this.state.page - 1
        
//     });
//     this.updateNews();
    
//    }
//    handlenextbtn = async ()=>{
//     this.setState({
//         page : this.state.page + 1
//     });
//     this.updateNews();
//    }
   fetchMoreData = async () => {
    this.setState({
        page: this.state.page + 1,
      })
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize= ${this.state.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseddata = await data.json();
      console.log(parseddata);
      this.setState({
          articles:this.state.articles.concat(parseddata.articles) ,
           totalResults: parseddata.totalResults ,
           loading:false
           
      })
  };
  render() {
    return (
        <>
        <div className = "container my-5">
        <h1 className="text-center my-5">{this.props.title}</h1>
        {/* {this.state.loading && <Loading/>} */}
        <InfiniteScroll
          style={{overflow: 'hidden'}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-3" key={element.url}>
        <NewsItems  title={element.title?element.title.slice(0 , 35):""} description = {element.description?element.description.slice(0 , 88):"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
        </div>
        })}
        
        </div>
        </InfiniteScroll>
      </div>
      {/* <div className="container d-flex justify-content-between my-3">
      <button disabled={this.state.page <= 1} type="button" onClick={this.handleprevbtn} className="btn btn-dark">&larr; Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" onClick={this.handlenextbtn} className="btn btn-dark">Next  &rarr;</button>
      </div> */}
        </>
      
     
    )
  }
}

export default News
