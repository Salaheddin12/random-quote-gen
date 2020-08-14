import React from "react";
import {
  CardStyle,
  cardButtonsContainerStyle,
  buttonStyle,
  iconStyle,
  cardSubtitleStyle,
} from "./styles";

function Quote({ color, quote, author, handleClick }) {
  const shareToTweeter = () => {
    window.open(
      `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote}" ${author}`
    );
  };
  const shareToTumblr = () => {
    window.open(
      `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button
      `
    );
  };
  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/dialog/share?
      app_id=894922320998976
      &quote=${quote} - ${author}
      &href=http://developers.facebook.com/docs/reference/dialogs/`
    );
  };

  return (
    <div style={CardStyle}>
      <div className="cardBody" style={{ color: color }}>
        <p className="card-text" style={{ fontSize: 28 }}>
          <i className="fa fa-quote-left" style={{ marginRight: 10 }} />
          {quote}
        </p>
        <h6 className="card-subtitle mb-2" style={cardSubtitleStyle}>
          {author || author === "" ? "- " + author : "Unknown"}
        </h6>
      </div>
      <div
        className="cardButtonsContainer my-5"
        style={cardButtonsContainerStyle}
      >
        <div className="icons m-2">
          <a onClick={() => shareToTweeter()}>
            <i
              className="fa fa-twitter mx-2  p-2"
              style={{ ...iconStyle, backgroundColor: color }}
            ></i>
          </a>
          {/* 
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script> */}
          <a onClick={() => shareToTumblr()}>
            <i
              className="fa fa-tumblr mx-2  p-2"
              style={{ ...iconStyle, backgroundColor: color }}
            ></i>
          </a>
          <a onClick={() => shareToFacebook()}>
            <i
              className="fa fa-facebook mx-2  p-2"
              style={{ ...iconStyle, backgroundColor: color }}
            ></i>
          </a>
        </div>
        <button
          className="btn p-2 "
          onClick={() => handleClick()}
          style={{ ...buttonStyle, backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quote;
