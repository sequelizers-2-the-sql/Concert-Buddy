import React from "react";
import "../EventList/style.css";

// This file exports both the List and ListItem components
//this responsds to the user search
export function List(props) {
  return (
    <hgroup className="mb20">
      <h1>Concerts Below</h1>
        <h2 className="lead"><strong className="text-danger">{props.number}</strong> results were found for the search for <strong className="text-danger">{props.input}</strong></h2>
      </hgroup>
  );
}

export function ListItem(props) {
  return <div>
    <section className="listItem col-xs-12 col-sm-6 col-md-12">
      <article className="search-result row">
        <div className="col-xs-12 col-sm-12 col-md-7 excerpet">
          <h3 className="result-title" onClick={()=>{props.clickHandler(props.event)}}>{props.event.displayName}</h3>
          <p>{props.event.displayName}</p>
          <h1>I think this is the single event when I click on a concert?  No, it's not...</h1>
        </div>
        <span className="clearfix borda"></span>
      </article>
    </section>
    <hr></hr>
  </div>
  
}
