import Box from "./box";
import React from "react";

const Board = ({value,onClick,row, col, disabled}) => (
    <div style={{
		width: "450px",
		height: "450px",
		margin: "0 auto",
		display: "grid",
		gridTemplate: `repeat(${row}, 30px) / repeat(${col}, 30px)`,
	}}>
    {[...Array(row*col)].map((_, pos) => 
	<Box key={pos} 
	name={pos} 
	onClick={()=>onClick(pos)} 
	value={value[pos]}
	disabled={disabled}/>)}
    </div>
)

export default Board