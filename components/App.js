import React, { Component } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList'
import style from './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className={style.app}>
        <h1> TodoList</h1>
        <TodoInput dispatch={this.props.dispatch} />
        <TodoList
          dispatch={this.props.dispatch}
          todos={this.props.todos}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App)