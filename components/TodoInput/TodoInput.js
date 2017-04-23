import React, { Component } from 'react';
import style from './style.css';
class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={inputText: ''};
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({inputText: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log('submit button pressed')
  }
  render() {
    return (
      <div>
        <input type="text"
               placeholder="Type in your Todo"
               value={this.state.inputText}
               onChange={this.handleChange.bind(this)}
               className={style.input}
        />
        <button className={style.btn}
                onClick={this.handleSubmit.bind(this)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default TextInput;