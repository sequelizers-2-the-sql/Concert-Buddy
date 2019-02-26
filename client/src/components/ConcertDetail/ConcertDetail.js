import React from "react";
import "./ConcertDetail.css"
import { Link } from "react-router-dom";
import Map from '../Map/index.js'
import DeleteBtn from '../DeleteButton/index'
import ReadMoreReact from 'read-more-react';
 

// This file exports the components for the user's information/My Events page

export function ConcertDetail(props) {
    const chatRoomHref = {
        pathname: "/chatapp",
        state: { displayName: props.event.artist }
    };
    return (<>
        <div className="row">
            <div className="col-md-6">
                <div className="card concert-card">
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.event.artist}</h5>
                        {/* <h5 className="card-text">{props.event.displayName}</h5> */}
                        <p className="card-text font-italic">{props.event.venue} in {props.event.city}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">On {props.event.date}</li>
                        <li className="list-group-item">At {props.event.time}</li>
                        <li className="list-group-item">{props.concert.length} buddies attending!</li>
                        <li className="list-group-item"><ReadMoreReact text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet elementum quam. Vestibulum id est consequat diam porttitor vestibulum. Curabitur erat erat, lacinia eget rhoncus eget, vulputate vitae ligula. Nam placerat purus ac iaculis placerat. Aenean ligula justo, semper sed sem non, rhoncus venenatis odio. Praesent metus ligula, ullamcorper non commodo sit amet, tristique vitae lacus. Nullam augue quam, fringilla vel mattis in, posuere et mi. Vestibulum et turpis et sapien consequat rhoncus. Maecenas in erat mi. Integer gravida blandit turpis, ut efficitur magna hendrerit quis. Nulla vulputate odio ac tortor vulputate"}/></li>

                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Actually, I'm not interested in this concert</a>                    </div>
                    <div className="card-body">
                        <Link to={chatRoomHref} className="card-link">Find ConcertBuddies</Link>
                        <DeleteBtn onClick={() => { props.removeEvent(props.userId, { id: props.event._id }) }} />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <div class="card map-card">
                        <div class="card-body">
                        <Map lat={props.event.latitude} lng={props.event.longitude} />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
    );
}