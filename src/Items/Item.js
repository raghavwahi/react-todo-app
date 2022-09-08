import React from "react";

import "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemChecked: this.props.checked,
    };
  }

  itemCheckHandler(event) {
    this.setState({
      itemChecked: event.target.checked,
    });
  }

  render() {
    return (
      <li>
        <div className="item">
          <input
            className="checkbox"
            type="checkbox"
            id={this.props.id}
            defaultChecked={this.state.itemChecked}
            onChange={this.itemCheckHandler.bind(this)}
          />
          <label htmlFor={this.props.id}>{this.props.description}</label>
          {this.state.itemChecked && <p>{"✔"}</p>}
        </div>
      </li>
    );
  }
}

export default Item;
