import React from "react";
import { v4 } from "uuid";

import "./App.css";
import InputForm from "./Items/ItemInput";
import ItemList from "./Items/ItemList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ItemList: [],
    };
  }

  newTodoHandler(itemDescription) {
    const prevItemList = [...this.state.ItemList];
    const newItem = {
      description: itemDescription,
      checked: false,
      id: v4(),
    };
    this.setState({
      ItemList: [...prevItemList, newItem],
    });
  }

  render() {
    return (
      <React.Fragment>
        <InputForm newTodoHandler={this.newTodoHandler.bind(this)} />
        <ItemList itemList={this.state.ItemList} />
      </React.Fragment>
    );
  }
}

export default App;
