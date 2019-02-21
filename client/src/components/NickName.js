import React, { Component } from 'react';
import { default as Chatkit } from '@pusher/chatkit-server';
import { withRouter } from 'react-router-dom'

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
            instanceLocator: "v1:us1:bba82808-7449-4f24-a517-a97ac38da58a",
            key: "b45deb0b-fb92-473a-86b6-28b3866ae055:BZhEh5QKDNYunYk7GTKn0DZjXaVzTKDuHWXGbmnzTio="
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