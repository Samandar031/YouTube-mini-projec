import React from "react";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMenu = () => {
    return (
      <div style={{ width: "80px", height: "90vh" }}>
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            marginTop: "20px",
          }}
        >
          <i class="home icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="location arrow icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="home icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="play icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="dochub icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="sliders horizontal icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="cut icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="sliders horizontal icon"></i>
        </div>{" "}
        <div
          className="menuIcon"
          style={{
            fontSize: "24px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
          }}
        >
          <i class="cut icon"></i>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderMenu()}</div>;
  }
}

export default MenuBar;
