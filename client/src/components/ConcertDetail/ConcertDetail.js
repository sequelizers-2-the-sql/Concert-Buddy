import React, { Component } from "react";
import "./ConcertDetail.css"
import { Link } from "react-router-dom";
import Map from '../Map/index.js'
import DeleteBtn from '../DeleteButton/index'
import Moment from "react-moment";


export class ConcertDetail extends Component {
    state = {
        event: {},
        genre: ""
    };


    
    chatRoomHref = {
        pathname: "/chatapp",
        state: { displayName: this.props.event.artist }
    };

    render() {
        return (<>
            <div className="row">
                <div className="col-md-6">
                    <div className="card concert-card">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{this.props.event.artist}</h5>
                            {/* <h5 className="card-text">{this.props.event.displayName}</h5> */}
                            <p className="card-text font-italic">{this.props.event.venue} in {this.props.event.city}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">On <Moment format="MM-DD-YYYY">{this.props.event.date}</Moment></li>
                            <li className="list-group-item">At {this.props.event.time}</li>
                            <li className="list-group-item">{this.props.concert.length - 1} buddies attending!</li>

                        </ul>
                        <div className="card-body">
                            <Link to={this.chatRoomHref} className="card-link">Find ConcertBuddies</Link>
                            <DeleteBtn onClick={() => { this.props.removeEvent(this.props.userId, { id: this.props.event._id }) }} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <div class="card map-card">
                            <div class="card-body">
                                <Map userlat={this.props.lat} userlng={this.props.lng} lat={this.props.event.latitude} lng={this.props.event.longitude} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
        );
    }
}
