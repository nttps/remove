import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Dev<i className="fa fa-heart heart"/> by</span><a href="https:gistda.or.th">IT GISTDA</a>
            {/* <span className="text-muted">Dev By IT GISTDA <i className="fa fa-heart heart"/> by</span><a href="https://www.serdarbudak.com.tr">IT</a> */}
          </div>
        </footer>
      </div>
    );
  }
}
