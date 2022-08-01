import React, { Component } from "react";
import NewsItem from "../NewsItem";
// import Spinner from "./Spinner";
export class News extends Component {
  constructor() {
    super();
    // console.log("Hello! This is the constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // console.log("cdn");
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1bc9f41e68fc42a2953544c907d0d459&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  handlePrevClick = async () => {
    // console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1bc9f41e68fc42a2953544c907d0d459&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  handleNextClick = async () => {
    // console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1bc9f41e68fc42a2953544c907d0d459&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    console.log("render");
    return (

      <div className="container my-3">
        <h2 className="text-center">News Lit ~ Top HeadLines</h2>
        {/* <Spinner/> */}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description}
                  imageUrl={
                    element.urlToImage ? element.urlToImage : "imageURL"
                  }
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;