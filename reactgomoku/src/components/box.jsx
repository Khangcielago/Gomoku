import React from "react"

export const Box = ({value, onClick, name, disabled}) => {
	if (value === "X") {
		var style = {
			border: "2px solid red",
			fontSize: "20px",
			color: "red",
		} 
	}
	if (value === "O") {
		 style = {
			border: "2px solid blue",
			fontSize: "20px",
			color: "blue",
		}
	}
	return( 
	 <button 
	name={name}  
	style={style}  
	onClick={!disabled && onClick}> 
	{value}
	</button>
	)}
	

export default Box;