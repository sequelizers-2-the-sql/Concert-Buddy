import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 1 }} className="btn btn-secondary">
      {props.children}
      <br></br>
    </button>
    
  );
}
