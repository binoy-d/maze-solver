import React from 'react';
import './MazeWrapper.css';
import Tile from './Tile'
function MazeWrapper(){

    var maze = [];

    for(let i = 0; i<25; i++){
        
        maze.push(<Tile size={20}/>)
    }
    return (
        <div className = "maze-wrapper">
            <h1 className = "main-header">This is  a test</h1>
            {maze.map((tile, index)=>
            tile
            )}

            
        </div>

    );
}

export default MazeWrapper;