import React from "react";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMenu = () => {
    return (
      <div style={{ border: "2px solid red" }}>
        <div className="menuIcon">
          <i class="home icon"></i>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderMenu()}</div>;
  }
}

export default MenuBar;
