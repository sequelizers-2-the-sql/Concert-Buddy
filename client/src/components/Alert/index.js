import React from "react";

export function LoginAlert({ props }) {
    return <div className="alert alert-danger" role="alert">
        Your Username/Password is incorrect! Try again
  </div>
    
}

export function SearchAlert({ props }) {
    return <div className="alert alert-danger" role="alert">
        You need to select either Zip Code or Artist! Try again
  </div>
    
}