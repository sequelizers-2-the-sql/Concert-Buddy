import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import Input from './ChatInput';
import MessageList from './MessageList';
import NewRoomForm from "./NewRoomForm";
import RoomsList from "./RoomsList";
import SendMessageForm from "./SendMessageForm";
//Importing the tokenUrl and instanceLocator from config
import { tokenUrl, instanceLocator } from "../config";
import NickName from './NickName';
import { Container, Row, Col } from "./Container"
import "./ChatApp.css";

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            currentRoom: { users: [] },
            messages: [],
            users: [],
            //2/22/19 enhancements ib
            roomId: null, //room.id isn't defined till we subscribe/join a room
            messages: [], //store our messages
            joinableRooms: [], // All rooms including not subscribed rooms
            joinedRooms: [] // Rooms that the currentuser already subscribed to

        }
        //this.addMessage = this.addMessage.bind(this);
        // this.getRooms = this.getRooms.bind(this);

    }

    componentDidMount() {
        console.log('THIS IS USER IN CHAT APP!!!', localStorage.getItem('nickname'));
        const chatManager = new ChatManager({
            instanceLocator,
            //userId: "Admin",
            userId: localStorage.getItem('nickname'),
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        })
        chatManager.connect().then(currentUser => {
            console.log('this is the user coming back from chatManager!!!', currentUser);
            this.currentUser = currentUser;
            // this.setState({
            //     currentUser:
            //new 2.22.19 start
            this.getRooms()
            // })
        })
    };
    getRooms = () => {
        this.currentUser
            .getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                });
            })
            .catch(err => console.log("error on joinableRooms: ", err));
    };
    //new 2.22.19 end


    ////new code 2/22,19
    subscribeToRoom = roomId => {
        this.setState({ messages: [] });
        this.currentUser
            .subscribeToRoom({
                roomId,
                hooks: {
                    // event listener when a new message is "created/sent"
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message] // add the latest message at the end of the array
                        });
                    }
                }
            })
            //Updating the joinableRooms after subscribing
            .then(room => {
                //also sets our state roomid into the current room we are in
                this.setState({
                    roomId: room.id
                });
                this.getRooms();
            })
            .catch(err => console.log("error on subscribing to room: ", err));
    };

    sendMessage = text => {
        //we will send this down to a child component, so that we get
        // the data from the handleSubmit
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        });
    };

    // createRoom = name => {
    //     this.currentUser
    //       .createRoom({
    //         name
    //       })
    //       .then(room => this.subscribeToRoom(room.id))
    //       .catch(err => console.log("error on create Room: ", err));
    //   };
    //name = this.state.event.artist

    createRoom = name => {
        this.currentUser
            .createRoom({
                name
                // "this.state.event.artist"
            })
            .then(room => this.subscribeToRoom(room.id))
            .catch(err => console.log("error on create Room: ", err));
    };

    //new codeends 2.22.19

    render() {
        return (
            <div>
                <div className="container chat-container">
                    <Row>
                        <Col size="md-12">


                            <NickName

                            />


                            <div className="chatapp">


                                <MessageList
                                    roomId={this.state.roomId}
                                    messages={this.state.messages}
                                />

                                <NewRoomForm createRoom={this.createRoom} />
                                <RoomsList
                                    roomId={this.state.roomId}
                                    subscribeToRoom={this.subscribeToRoom}
                                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                                />
                                <SendMessageForm
                                    disabled={!this.state.roomId}
                                    sendMessage={this.sendMessage}
                                />


                                {/* inverse dataflow ( child to parent)*/}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}; //class ChatApp extends Component ENDS

export default ChatApp;
