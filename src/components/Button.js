import React from 'react';

const Button = (props) => {
	return (
		<div>
			<button
				className='inline-block 
				px-6 py-2.5 
			 bg-[#6A62E6] 
			 text-white
			   font-medium 
				text-xs leading-tight 
				uppercase rounded 
				shadow-md 
				hover:bg-[#6A26EF] hover:shadow-lg 
				focus:bg-[#6A26EF] focus:shadow-lg focus:outline-none 
				focus:ring-0 active:bg-[#6A26EF] active:shadow-lg transition duration-150 ease-in-out'
				onClick={props.onClick}
			>
				{props.title}
			</button>
		</div>
	);
};

export default Button;
