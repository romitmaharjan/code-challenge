import React from 'react'

export const outputText = (xMove,yMove,face) => {
    let text = xMove+','+yMove+','+face.toUpperCase()
    document.querySelector("#output").innerHTML += '<p>' + text + '</p>'
}

const OutputDisplay = (props) => {
    return(
        <div>
            <h1>Output</h1>
            <p id="output"></p>
        </div>
    )
}

export default OutputDisplay;