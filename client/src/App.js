import React, { Component } from 'react';
import './App.css';
import { sendMessage, getMessage } from './service/socket';

export default class App extends Component {
  state = {
    messages: '',
    newMessage: '',
  };

  componentDidMount() {
    sendMessage();
    getMessage(messages => {
      this.setState({ messages });
    });
  }

  onMessageChange = e => {
    const newMessage = e.target.value;
    this.setState({ newMessage });
  };

  sendNewMessage = () => {
    sendMessage(this.state.newMessage);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>{this.state.messages}</div>
        <input onChange={this.onMessageChange} type="text" />
        <button onClick={this.sendNewMessage}>Send Message !</button>
      </div>
    );
  }
}
