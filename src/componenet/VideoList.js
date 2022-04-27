import React from "react";
// import MenuBar from "./menuBar";

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videoData: "" };

    //     channelId: "UC1Cvguk64dfaycWgzKXEVzQ"
    // channelTitle: "SHOXRUX TV"
    // description: "Скачать трек в iTunes: http://hyperurl.co/bolaligim Скачать трек в Google Play: http://hyperurl.co/bolaligim-gp Слушать трек в ..."
    // liveBroadcastContent: "none"
    // publishTime: "2011-02-09T21:25:41Z"
    // publishedAt: "2011-02-09T21:25:41Z"
    // thumbnails: {default: {…}, medium: {…}, high: {…}}
    // title: "SHOXRUX - SALOM [FT.SARVAR] 2006"
  }

  renderList = () => {
    return this.props.data?.data?.items.map((val) => {
      return (
        <div className="seachCard" style={{ display: "flex", margin: "20px" }}>
          <div key={val.id.videoId}>
            <img src={val.snippet.thumbnails.medium.url} alt="youtube video" />
          </div>
          <div style={{ textAlign: "start", padding: "10px" }}>
            <div
              className="title"
              style={{ fontWeight: "550", fontSize: "18px", margin: "8px 0" }}
            >
              {val.snippet.title}
            </div>
            <div className="statistic">
              val <i class="home icon"></i>
            </div>
            <div className="muallif">{val.snippet.channelTitle}</div>
            <div className="description">{val.snippet.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", border: "2px solid red" }}>
        {this.renderList()}
      </div>
    );
  }
}

export default VideoList;
