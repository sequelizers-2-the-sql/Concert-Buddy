import React from "react";

function RadioButton(props) {
    return(
        <ul style={{listStyleType: "none"}}>
        <li>
            <label style={{color: "whitesmoke"}}>
                <input
                
                    type="radio"
                    value="Zip"
                    checked={props.zip}
                    onChange={props.change}
                /> Zip
            </label>        
        </li>
                <li>
                <label style={{color: "whitesmoke"}}>
                    <input
                        type="radio"
                        value="Artist"
                        checked={props.artist}
                        onChange={props.change}
                    /> Artist
                </label>        
            </li>
            </ul>
    )
}

export default RadioButton