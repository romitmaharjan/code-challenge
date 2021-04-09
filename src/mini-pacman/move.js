import { maxXAxis, maxYAxis, minYAxis, minXAxis, directions, grid } from './constants'

export const move = (xMove, yMove, face) => {
    let xMovement = xMove
    let yMovement = yMove
    if(face.toUpperCase()==='NORTH'){
        yMovement += 1;
    }
    if(face.toUpperCase()==='SOUTH'){
        yMovement -= 1;
    }
    if(face.toUpperCase()==='EAST'){
        xMovement += 1;
    }
    if(face.toUpperCase()==='WEST'){
        xMovement -= 1;
    }

    if(xMovement > maxXAxis || xMovement < minXAxis || yMovement > maxYAxis || yMovement < minYAxis){
        xMovement = xMove
        yMovement = yMove
    }
    return {xMovement, yMovement}
}

export const left = (face) => {
    let faceValue
    for(let i=0; i<directions.length; i++){
        if(face.toUpperCase()===directions[i]){
            faceValue = i;
        }
    }
    if(faceValue===3){
        faceValue = 0;
    } else {
        faceValue += 1;
    }
    
    for(let i = 0; i<directions.length; i++){
        if(faceValue===grid[i]){
            faceValue = directions[i];                            
        }
    }
    return (faceValue)
}

export const right = (face) => {
    let faceValue
    for(let i=0; i<directions.length; i++){
        if(face.toUpperCase()===directions[i]){
            faceValue = i;
        }
    }
    if(faceValue===0){
        faceValue = 3;
    } else {
        faceValue -= 1;
    }
    
    for(let i = 0; i<directions.length; i++){
        if(faceValue===grid[i]){
            faceValue = directions[i];                            
        }
    }
    return (faceValue)
}

