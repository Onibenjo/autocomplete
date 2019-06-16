import React, { Component } from "react";
import "./AutoCompleteText.css";

export class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.items = ["Adams", "Azeez", "Oba", "DollyP", "Mobolaji"];
    this.state = {
      suggestion: [],
      text: ""
    };
  }

  onTextChange = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestion = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestion = items.sort().filter(x => regex.test(x));
    }
    this.setState(() => ({ suggestion, text: value }));
  };

  sellectSuggestion(value) {
    this.setState(() => ({
      text: value,
      suggestion: []
    }));
  }

  showSuggestion() {
    const { suggestion } = this.state;
    if (suggestion.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestion.map(item => (
          <li onClick={() => this.sellectSuggestion(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div className="autocompleteText">
        <p className="hello">Hello</p>
        <input value={text} onChange={this.onTextChange} type="text" />
        {this.showSuggestion()}
      </div>
    );
  }
}

export default AutoCompleteText;
