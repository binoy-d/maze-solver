import React from 'react';
import './MazeWrapper.css';
import Tile from './Tile'

import {Container, Row, Col} from 'react-bootstrap'
function MazeWrapper(){
    let dim = 10;
    var maze = [];

    for(let i = 0; i<dim; i++){
        var row = []
        for(let j = 0; j<dim; j++){
            row.push(<Col className = "padding-0 margin-0"><Tile/></Col>)
        }
        maze.push(
            <Row className="w-50 no-gutters">
            {row.map(
                (col, index)=>col
            )}
            </Row>
        );
    }
    return (
        <div className = "maze-wrapper">
            <h1 className = "main-header">This is  a test</h1>
            <Container className = "w-80">
            {maze.map((tile, index)=>
            tile
            )}
            </Container>
            
            

            
        </div>

    );
}

export default MazeWrapper;