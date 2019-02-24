import React from "react";
import "./UserInfo.css"

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
                            <img class="card-img-top" src=".../100px180/" alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">Google Map goes here</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>

    </>)     
    };
