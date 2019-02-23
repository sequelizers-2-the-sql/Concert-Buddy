// import React, { Component } from 'react';

// class MessageList extends Component {
//     render() {
//         return (
//             <ul className="message-list">
//                 {this.props.messages.map((message, index) => (
//                     <li key={index}>
//                         <h4 className="message-sender"><font color="red">{message.senderId}</font></h4>
//                         <p className="message-text">{message.text}</p>
//                     </li>
//                 ))}
//                 <li></li>
//             </ul>
//         )
//     }
// }
// export default MessageList;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

export default class MessageList extends Component {
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">&larr; Join a room!</div>
        </div>
      );
    }
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            /* TODO: add user picture*/
            <Message
              key={index}
              username= {<font color="red">{message.senderId}</font>}
              //{message.senderId}
              //<font color="red">{message.senderId}</font>
              text={<font color="white">{message.text}</font>}
              //{message.text}
              
            />
          );
        })}
      </div>
    );
  }
}
