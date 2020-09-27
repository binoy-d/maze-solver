import React, {useState} from 'react';
import './Tile.css';

function Tile(){
    const [state, setState] = useState(true);
    const flipState = ()=>{
        setState(!state);
    }
    return (
        <div style={{'background-color':(state?'white':'black')}} className = "tile-wrapper" onClick={flipState}>
            
        </div>

    );
}

export default Tile;