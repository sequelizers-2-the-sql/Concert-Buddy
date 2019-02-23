import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Input from './ChatInput';
import MessageList from './MessageList';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            currentRoom: { users: [] },
            messages: [],
            users: []
        }
        this.addMessage = this.addMessage.bind(this);
    }

    componentDidMount() {

        console.log('THIS IS USER IN CHAT APP!!!', localStorage.getItem('nickname'));

        const chatManager = new ChatManager({
            instanceLocator: "v1:us1:bba82808-7449-4f24-a517-a97ac38da58a",
            // userId: this.props.currentId,
            userId: localStorage.getItem('nickname'),
            tokenProvider: new TokenProvider({
                url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/bba82808-7449-4f24-a517-a97ac38da58a/token"
            })
        })

        chatManager
            .connect()
            .then(currentUser => {
                console.log('this is the user coming back from chatManager!!!', currentUser);
                this.setState({ currentUser: currentUser })

                return currentUser.subscribeToRoom({
                    roomId: "19411955",
                    messageLimit: 100,
                    hooks: {
                        onMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message],
                            })
                        },
                    }
                })
            })
            .then(currentRoom => {
                console.log('this is the current room', currentRoom);
                this.setState({
                    currentRoom,
                    users: currentRoom.userIds
                })
            })
            .catch(error => console.log('Error!!!', error))
    }


    addMessage(text) {
        console.log(this.state);
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
            .catch(error => console.error('error', error));
    }

    render() {
        return (
            <div>
                {/* <h2 className="header">Let's Talk</h2> */}
                <h2 className="header"><font color="red">Hi There, Ask us anything</font></h2>
                {/* <h1>"You are in chatroom: {this.state.currentRoom}</h1> */}
                {/* <h1>Nickname you've selected is: {message.senderId}</h1> */}
                <MessageList messages={this.state.messages} />
                <Input className="input-field" onSubmit={this.addMessage} />
            </div>
        )
    }
}

export default ChatApp;
