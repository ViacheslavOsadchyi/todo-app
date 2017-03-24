import React from 'react'

function Link ( props ){
	if ( props.active ){
		return (
			<span>{props.children}</span>
		);
	}else{
		return (
			<a href="#" onClick={e=>{
				e.preventDefault();
				props.onClick();
			}}>
				{props.children}
			</a>
		);
	}
}

export default Link;