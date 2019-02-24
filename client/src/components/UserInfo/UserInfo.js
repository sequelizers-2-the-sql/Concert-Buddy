import React from "react";
import "./UserInfo.css"
import Map from '../Map/index.js'

// This file exports the components for the user's information/My Events page

export function UserEvents(props) {
    return (<>
        <div className="row">
            <div className="col-md-6">
                <div className="card concert-card">
                    <div className="card-body">
                        <h5 className="card-title">{props.event.artist}</h5>
                        <p className="card-text">{props.event.venue} in {props.event.city}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">On {props.event.date}</li>
                        <li className="list-group-item">At {props.event.time}</li>
                        <li className="list-group-item">{props.event.attendees.length} buddies attending!</li>
                        <li className="list-group-item">tidbit about the band? (do we need a new api?)</li>
                        <div className="card-body">
                            <a href="/chatapp" className="card-link">Find ConcertBuddies</a>
                            <a href="" className="card-link">Delete Event</a>
                        </div>
                    </ul>
                </div>
            </div>
                <div className="col-md-6">
                    <div>
                        <div class="card map-card">
                            <div class="card-body">
                                <Map lat={props.event.latitude} lng={props.event.longitude}/>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>

    </>)     
    };
