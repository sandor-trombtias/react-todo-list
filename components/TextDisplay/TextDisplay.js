import React, { Component } from 'react'

class TextDisplay extends Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <button onClick={this.props.delete}>Delete one letter</button>
      </div>
    )
  }
}

export default TextDisplay