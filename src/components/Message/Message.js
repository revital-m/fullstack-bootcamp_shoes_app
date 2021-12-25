import React, { Component } from "react";
import "./Message.css";

class Message extends Component {
  isText = () => {
    return this.props.msgInfo ? (
      <h3 className="message__info">
        {this.props.msgInfo}
        <i className={`message--icon ${this.props.msgInfoIcon}`}></i>
      </h3>
    ) : (
      <></>
    );
  };

  render() {
    return (
      <div className={`message-container ${this.props.msgClass}`}>
        <h1>
          {this.props.msgTitle}
          <i className={`message--icon ${this.props.msgTitleIcon}`}></i>
        </h1>
        {this.isText()}
      </div>
    );
  }
}

export default Message;
