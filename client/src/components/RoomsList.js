import React, { Component } from "react";

export default class RoomsList extends Component {
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
    return (
      <div className="rooms-list">
        <ul>
          <h3><font color="red">Chat Rooms for your Events</font></h3>

          {orderedRooms.map(room => {
            const active = this.props.roomId === room.id ? "active" : "";
            return (
              <li key={room.id} className={"room " + active}>
                <a
                  onClick={() => this.props.subscribeToRoom(room.id)}
                  //doing this will call the function on click not on render
                  href="#s"
                >
                  # {room.name}
                </a>
              </li>
              
            );
          })}
        </ul>
      </div>
    );
  }
}
