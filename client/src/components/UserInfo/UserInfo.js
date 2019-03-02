import React from "react";
import "./UserInfo.css";
import { Link } from "react-router-dom";
import Map from '../Map/index.js';
import DeleteBtn from '../DeleteButton/index.js';
import Moment from "react-moment";


// This file exports the components for the user's information/My Events page

export function UserEvents(props) {
    const chatRoomHref = {
        pathname: "/chatapp",
        state: { displayName: props.event.artist }
    }
    return (<>
        <div className="row">
            <div className="col-md-6">
                <div className="card concert-card">
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.event.artist}</h5>
                        <p className="card-text font-italic">{props.event.venue} in {props.event.city}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Date: <Moment format="MM-DD-YYYY">{props.event.date}</Moment></li>
                        <li className="list-group-item">Time: {props.event.time}</li>
                        <li className="list-group-item">{props.event.attendees.length - 1} buddies attending!</li>
                        <div className="card-body">
                            <Link to={chatRoomHref} className="card-link">
                                Find ConcertBuddies
                                </Link>
                            <DeleteBtn onClick={() => { props.removeEvent(props.user, { id: props.event._id }) }} />
                        </div>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <div class="card map-card">
                        <div class="card-body">
                            <Map userlat={props.lat} userlng={props.lng} lat={props.event.latitude} lng={props.event.longitude} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>)
};
