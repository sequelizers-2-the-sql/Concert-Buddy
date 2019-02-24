import React, { Component } from 'react';
import { default as Chatkit } from '@pusher/chatkit-server';
import { withRouter } from 'react-router-dom'
import "./NickName.css";
//Importing the key and instanceLocator from config **ISAAC DON"T forget to exclude this file from going to GIT
import { instanceLocator, key } from "../config";

class NickName extends Component {
    constructor(props) {
        super(props);
        this.state = {
           // username: "",
            nickname: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ nickname: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault()
        const chatkit = new Chatkit({
            instanceLocator,
            key
          })

            chatkit.createUser({
              id: this.state.nickname,
              name: this.state.nickname,
            }).then((currentUser) => {
                    console.log('we made this user!!', currentUser.name);
                    localStorage.setItem("nickname", currentUser.name);
                    this.props.history.push('/chatapp')
              }).catch((err) => {
                  console.log(err.status);
              })
    }
    render() {
        return (
            <div className="form-container">
                <h1>Let's Chat!</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="nickname">What is your nickname?</label>
                    <input type="text" name="nickname" onChange={this.handleChange} className="input" />
                    <button className="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}
export default withRouter(NickName);