import React, { Component } from "react";
import NewsItem from "../NewsItem";
export class News extends Component {
  

  constructor() {
    super();
    console.log("Hello! This is the constructor from News Component");
    this.state = {
      articles : [],
      loading: false,
    };
  }
  async componentDidMount(){
    console.log("cdn");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1bc9f41e68fc42a2953544c907d0d459";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({articles: parsedData.articles})

  }
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>News Lit ~ Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                
                  title={element.title ? element.title : ""}
                  description={element.description}
                  imageUrl={element.urlToImage ? element.urlToImage : "imageURL"}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
