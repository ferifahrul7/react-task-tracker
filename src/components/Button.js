const Button = ({color,text,onClick}) => {
	return (
		<button 
		onClick={onClick}
		style={{backgroundColor:color}} 
		className="btn py-2 px-4 text-white">
			{text}
			</button>
	)
}


export default Button
