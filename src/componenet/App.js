import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList.js";
import MenuBar from "./MenuBar.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videlist: "" };
  }

  getDataYou = async (kalitSoz) => {
    const key = "AIzaSyDSt8k5zSVhqczm9IW0fwlEsk647UVsPqc";
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: key,
          q: kalitSoz,
        },
      }
    );
    this.setState({ videlist: data });
    console.log(data);
  };

  render() {
    return (
      <div>
        <SearchBar getRequestYou={this.getDataYou} />
        <div style={{ display: "flex" }}>
          <MenuBar />
          <VideoList data={this.state.videlist} />
        </div>
      </div>
    );
  }
}

export default App;
