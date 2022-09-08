import React from "react";

import "./ItemInput.css";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDescription: "",
    };
  }

  submitHandler(event) {
    event.preventDefault();
    event.target.blur();
    
    this.setState({
      itemDescription: "",
    });

    this.props.newTodoHandler(this.state.itemDescription);
  }

  inputChangeHandler(event) {
    this.setState({
      itemDescription: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="inputForm">Enter your TODO:</label>
        <input
          type="text"
          id="inputForm"
          placeholder="Type here"
          value={this.state.itemDescription}
          onChange={this.inputChangeHandler.bind(this)}
        />
        <button type="submit" onClick={this.submitHandler.bind(this)}>
          Add
        </button>
      </form>
    );
  }
}

export default InputForm;
