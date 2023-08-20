import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    pagesize : PropTypes.number
  }
  static defaulProps = {
    pageSize:20,
    category: 'general'
  }
  async componentDidMount() {
    this.props.setProgress(10);
    // let xmlHttp = new XMLHttpRequest();
    // let key = "I1Bv-n6mn5rIVl9TbO9HrWsricNuxQYPdysN78nL0d4";
    // this.props.setProgress(40);
    // xmlHttp.open("GET", `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=${this.props.category}&lang=en&page=${this.state.page}&page_size=1`,false)
    // xmlHttp.setRequestHeader("x-api-key",key)
    // xmlHttp.send(null)
    // console.log(xmlHttp.responseText)
    // let data = xmlHttp.responseText
    // let data_json= data.json();
    // this.setState({ articles: data_json, totalresults: data_json.totalResults,loading:false});
    // this.props.setProgress(100);
    // this.props.setProgress(70);

    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3838fd4a64784284a12e26464d458913&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    // console.log(url)
    this.setState({loading:true})
    this.props.setProgress(40);
    let data = await fetch(url);
    let parseddata = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parseddata.articles, totalresults: parseddata.totalResults,loading:false});
    this.props.setProgress(100);
  }

   capitalized = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      searchcat:""
    };
    document.title="NewsPanda-"+this.capitalized(this.props.category);
  }


  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=3838fd4a64784284a12e26464d458913&page=${this.state.page + 1}&${this.props.pagesize}`;
    this.setState({page: this.setState.page + 1})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
        page: this.state.page + 1,
        articles: this.state.articles.concat(parseddata.articles),
        loading:false
    })
    
  };
  render() {
    return (
      <div>
        <h2 className="text-center my-2" style={{fontWeight:'light', fontFamily:'poppins', paddingTop:'63px' }} >NewsPanda - Top {this.capitalized(this.props.category)} Headlines</h2>
        <hr />
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
        >
        <div className='container my-3'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return (
                <div className='col-md-3' key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    ImageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    name={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
          </InfiniteScroll>
      </div>
    );
  }
}

export default News;