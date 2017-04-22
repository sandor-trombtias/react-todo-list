import React, { Component } from 'react';
import TextDisplay from '../TextDisplay/TextDisplay'
class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={inputText: 'asd'};
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({inputText: event.target.value});
  }
  render() {
    return (
      <div>
        <input type="text"
               placeholder="Input some text"
               value={this.state.inputText}
               onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText}/>
      </div>
    );
  }
}

export default TextInput;