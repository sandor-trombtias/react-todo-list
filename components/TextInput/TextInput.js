import React, { Component } from 'react';
import TextDisplay from '../TextDisplay/TextDisplay'
class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={inputText: 'initial text'};
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({inputText: event.target.value});
  }
  deleteLetter() {
    this.setState({inputText: this.state.inputText.substr(0, this.state.inputText.length - 1)})
  }
  render() {
    return (
      <div>
        <input type="text"
               placeholder="Input some text"
               value={this.state.inputText}
               onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} delete={this.deleteLetter.bind(this)}/>
      </div>
    );
  }
}

export default TextInput;