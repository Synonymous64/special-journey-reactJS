import React, { Component } from "react";
import { format } from "date-fns";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsURL, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left: "84%", zindex: 1}}>
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsURL}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <div className="my-2">
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} on {" "}
                  {format(new Date(date), "p, MMMM dd yyyy")}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
