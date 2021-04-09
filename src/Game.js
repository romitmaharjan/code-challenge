import React from 'react'
import InputField from './mini-pacman/input'
import OutputDisplay from './mini-pacman/output'
import {Navbar} from 'react-bootstrap'

const Game = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>               
                PACMAN SIMULATION
            </Navbar.Brand>
        </Navbar>
        <div className="row">
        <div className="formCentral">
           <InputField />    
        </div>    
        <div className="outputCentral">
            <OutputDisplay />
        </div>    
        </div>
        </>
    )
}

export default Game;