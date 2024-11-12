import React from 'react'

const style = {
	width: "250px",
	margin: "0 auto",
	display: "grid",
	fontSize: "40px",
	fontWeight: "800",
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)", // Center the button horizontally and vertically
	zIndex: 1, // Make sure it's on top of the grid cells
};

const Refresh = ({onClick, value}) => 
	<button name={"btn"} style={style} onClick={onClick}>{value}</button>

export default Refresh