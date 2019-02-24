import React from "react";
import "./UserInfo.css"

// This file exports the components for the user's information/My Events page

export function UserEvents(props) {
    return (<>
        <div className="card concert-card">
            <div className="card-body">
                <h5 className="card-title">{props.event.artist}</h5>
                <p className="card-text">{props.event.venue}, {props.event.city}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.event.date}</li>
                <li className="list-group-item">{props.event.time}</li>
                <li className="list-group-item">{props.event.attendees.length}</li>
                <li className="list-group-item">tidbit about the band? (do we need a new api?)</li>

            </ul>
            <div className="card-body">
                <a href="/chatapp" className="card-link">Find ConcertBuddies</a>
                <a href="" className="card-link">Delete Event</a>
            </div>
        </div>
    </>
    );
}

// not sure if we want to have the user's username/password/ or additional sign up fields 
// export function UserDetails(props) {
//     return (<>
//         <div className="card concert-card">
//             <div className="card-body">
//                 <h5 className="card-title">User Events</h5>
//                 <p className="card-text">This is where we'll list out the user's concerts.</p>
//             </div>
//             <ul className="list-group list-group-flush">
//                 <li className="list-group-item">Fleetwood Mac</li>
//                 <li className="list-group-item">Fleet Foxes</li>
//                 <li className="list-group-item">Paul Young</li>
//             </ul>
//             <div className="card-body">
//                 <a href="" className="card-link">Find ConcertBuddies</a>
//                 <a href="" className="card-link">Delete Event</a>
//             </div>
//         </div>
//     </>
//     );
// }
