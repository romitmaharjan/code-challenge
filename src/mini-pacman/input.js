import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { notify } from 'react-notify-toast'
import { move, left, right } from './move'
import { outputText } from './output'
import { directions, commands, maxXAxis, maxYAxis, minYAxis, minXAxis } from './constants'

const InputField = () => {

const [access, toggleAccess] = useState(false)
const [xMove, setXMove] = useState('')
const [yMove, setYMove] = useState('')
const [face, setFace] = useState('')
let changedDirection

    const handleSubmit = (event) => {
        event.preventDefault();
        const instruction = document.querySelector('#inputInstructions').value
        const word = instruction.substring(0, instruction.indexOf(" "))
        const command = instruction.substring(0,instruction.length)
        const rest = (instruction.substring(instruction.indexOf(" ")+1, instruction.length)).split(',');

        const xAxis=parseInt(rest[0])
        const yAxis=parseInt(rest[1])
        const direction=rest[2]
        
        if(access===false){
        if(word.toUpperCase()==="PLACE"){
            if(xAxis <= maxXAxis && xAxis >= minXAxis && yAxis <= maxYAxis && yAxis >= minYAxis){
                for(let i = 0; i < directions.length; i++){
                    if(directions[i] === direction.toUpperCase()){
                        toggleAccess(true)
                        notify.show("PACMAN successfully placed on the grid, please pass other instructions", "success", 6000)
                        document.querySelector("#history").innerHTML += '<p>' + instruction.toUpperCase() + '</p>'
                        setXMove(xAxis)
                        setYMove(yAxis)
                        setFace(direction)
                    }
                }        
            }else {
                notify.show("Please pass the correct co-ordinates to PLACE the PACMAN", "error", 6000)
            }
        } else {
            notify.show("Please pass the correct input to PLACE the PACMAN", "error", 6000)
        }
    }

    if(access===true){
        for(let i=0; i<commands.length; i++){
            if(commands[i]===command.toUpperCase()){
                document.querySelector("#history").innerHTML += '<p>' + instruction.toUpperCase() + '</p>'
                if(command.toUpperCase()==='MOVE'){
                    let movement = move(xMove, yMove, face)
                    setXMove(movement.xMovement)
                    setYMove(movement.yMovement)
                }
                if(command.toUpperCase()==='LEFT'){
                    changedDirection = left(face)                    
                    setFace(changedDirection)                   
                }
                if(command.toUpperCase()==='RIGHT'){
                    changedDirection = right(face)                    
                    setFace(changedDirection)                       
                }
                if(command.toUpperCase()==='REPORT'){
                    outputText(xMove,yMove,face)
                }
            }
        }
    }

    }

    return(
        <>
        <div>
            <h1>Input</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control 
                            type="text"
                            id="inputInstructions"
                            name="inputInstructions"
                            autoComplete="off"
                            required
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary" block>Go!</Button>
                </Form>
            <hr />
            <h1>Input History</h1>
                <p id="history"></p>
        </div>
        </>
    )
}

export default InputField;