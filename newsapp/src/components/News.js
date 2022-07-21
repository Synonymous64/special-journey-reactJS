import React, { Component } from "react";
import NewsItem from "../NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "The unintended side effects of a Grammy nomination",
      description:
        "A new study suggests that artists who are nominated for an award but don't win often stop taking risks.",
      url: "http://www.bbc.co.uk/news/entertainment-arts-62153682",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5623/production/_125915022_gettyimages-1307126058.jpg",
      publishedAt: "2022-07-15T15:22:23.4739269Z",
      content:
        "By Mark SavageBBC Music Correspondent\r\nWhat happens when you win a Grammy? \r\nAfter you've wiped away the tears and thanked your mum, you can expect to sell a lot more records. Even a global blockbust… [+7404 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Ukraine war: Four-year-old Liza killed by Russian attack on Vinnytsia",
      description:
        "Liza was one of three children killed in the attack on Vinnytsia, far from the front line.",
      url: "http://www.bbc.co.uk/news/world-europe-62181726",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/14930/production/_125927248_9fc51c40b783dc671ea9ea00d7e889f5061244fd-1.jpg",
      publishedAt: "2022-07-15T14:37:22.5976574Z",
      content:
        "By Sarah RainsfordEastern Europe correspondent, Vinnytsia\r\nOn a strip of grass in front of the smashed, charred remains of the Jubilee department store there is a pink pushchair lying on its side, sm… [+4292 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Biden offers Palestinians warm words but deep rift remains",
      description:
        "The US president brings words of support to the West Bank, but scant sign of political progress.",
      url: "http://www.bbc.co.uk/news/world-middle-east-62178566",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/140F2/production/_125926128_bidenabbasreutersccb2b967bd8db21fd47622bcdd1243b1ede68fff.jpg",
      publishedAt: "2022-07-15T14:07:17.8858612Z",
      content:
        "By Yolande KnellBBC News, Bethlehem\r\nThe US President Joe Biden came to Bethlehem with sympathy, strong rhetoric on the need for peace between Israel and the Palestinians but no prospect of a politic… [+5180 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Why Biden's Saudi trip has proved so thorny",
      description:
        "On this Middle East tour, the president must walk a foreign policy tightrope.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62144217",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11198/production/_125904007_gettyimages-1241875078.jpg",
      publishedAt: "2022-07-15T13:52:21.3947573Z",
      content:
        "By Barbara Plett UsherBBC State Department correspondent\r\nThe day after the White House announced President Joe Biden's trip to Saudi Arabia, a group of activists gathered to christen the street outs… [+8091 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Heatwave: National emergency declared after first red extreme heat warning",
      description:
        "The heatwave is being treated as a national emergency and contingency plans are in place, No 10 says.",
      url: "http://www.bbc.co.uk/news/uk-62177458",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B54C/production/_125921464_2jh03rf.jpg",
      publishedAt: "2022-07-15T12:52:22.4734513Z",
      content:
        "By Doug FaulknerBBC News\r\nA red extreme heat warning has been issued for the first time by the Met Office for parts of England next week, meaning a risk to life is likely as temperatures could hit 40… [+5900 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Constance Wu says she tried to kill herself after tweets backlash",
      description:
        'The US actress says she attempted suicide due to "internet shaming" following her "careless tweets".',
      url: "http://www.bbc.co.uk/news/entertainment-arts-62175188",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/427E/production/_125922071_hi076901017.jpg",
      publishedAt: "2022-07-15T11:22:22.2852053Z",
      content:
        "Constance Wu has said she tried to kill herself after facing a backlash over comments she made about the renewal of her TV series Fresh Off The Boat.\r\nThe US actress made the revelation in a statemen… [+3355 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Europe heatwave: Thousands escape wildfires in France, Spain and Greece",
      description:
        "Residents and visitors flee towns and villages in France, Spain and Greece as high winds fan fires.",
      url: "http://www.bbc.co.uk/news/world-europe-62175758",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/141F6/production/_125922428_spain.jpg",
      publishedAt: "2022-07-15T10:52:19.442181Z",
      content:
        "By Paul KirbyBBC News\r\nResidents and holidaymakers have fled towns and villages in France as fires are whipped up by high winds and tinder-dry conditions in several countries in Europe.\r\nMore than 10… [+3994 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Sri Lanka swears in Ranil Wickremesinghe as acting leader after mass protests",
      description:
        "Ranil Wickremesinghe takes office after weeks of protests over fuel and food shortages.",
      url: "http://www.bbc.co.uk/news/world-asia-62176758",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11C08/production/_125921727_mediaitem125921726.jpg",
      publishedAt: "2022-07-15T09:37:22.7410909Z",
      content:
        "By Patrick JacksonBBC News\r\nSri Lanka's prime minister Ranil Wickremesinghe has been sworn in as acting president as the country reels from an economic crisis and unrest.\r\nHe replaces Gotabaya Rajapa… [+3278 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Man acquitted of bombing 1985 Air India flight shot dead in Canada",
      description:
        "Ripudaman Singh Malik was accused of involvement in Canada's worst terror attack that killed 329.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62175291",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4792/production/_125922381_847dcf45a9105863bb14ba6a53021c2cf29d39b6.jpg",
      publishedAt: "2022-07-15T09:22:21.6766959Z",
      content:
        "A man acquitted over the bombing of a 1985 Air India flight has been killed in a suspected targeted shooting in Canada, police say.\r\nRipudaman Singh Malik was shot dead in his car in Surrey, British … [+1256 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ivana Trump, Donald Trump's first wife, dies at 73",
      description:
        'The former US president described his ex-wife as a "wonderful, beautiful and amazing woman".',
      url: "http://www.bbc.co.uk/news/world-us-canada-62172028",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
      publishedAt: "2022-07-14T20:07:22.0209389Z",
      content:
        'Ivana Trump, Donald Trump\'s first wife and mother of three of his children, has died aged 73.\r\n"She was a wonderful, beautiful, and amazing woman, who led a great and inspirational life," Mr Trump po… [+525 chars]',
    },
  ];
  constructor() {
    super();
    console.log("Hello! This is the constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Lit ~ Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
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
