import React from "react";

export default function Message(props) {
  return (
    /* TODO: add user picture*/
    <div className="message">
      <div className="message-username">{props.username}</div>
      <div className="message-text">{props.text}</div>
    </div>
  );
}
