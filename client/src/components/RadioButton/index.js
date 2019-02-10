import React from "react";

function RadioButton(props) {
    return(
        <ul>
        <li>
            <label>
                <input
                    type="radio"
                    value="Zip"
                    checked={props.zip}
                    onChange={props.change}
                />
                Zip
            </label>        
        </li>
                <li>
                <label>
                    <input
                        type="radio"
                        value="Artist"
                        checked={props.artist}
                        onChange={props.change}
                    />
                    Artist
                </label>        
            </li>
            </ul>
    )
}

export default RadioButton