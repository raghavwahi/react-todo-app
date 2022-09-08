import React from "react";

import Item from "./Item";
import "./ItemList.css";

class ItemList extends React.Component {
  render() {
    return (
      <ul className="unordered-list">
        {this.props.itemList.map((item) => (
          <Item
            description={item.description}
            checked={item.checked}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
    );
  }
}

export default ItemList;
