import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { KeyWord: "" };
  }
  onChangeInput = (ev) => {
    this.setState({
      KeyWord: ev.target.value,
    });
  };

  onSumbimForm = (e) => {
    e.preventDefault();
    this.props.getRequestYou(this.state.KeyWord);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSumbimForm}
          className="ui category search container"
        >
          <div
            className="ui icon input"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "31px",
            }}
          >
            <input
              onChange={this.onChangeInput}
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
        {/* <h1>{this.state.KeyWord}</h1> */}
      </div>
    );
  }
}

export default SearchBar;
