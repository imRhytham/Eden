import React from 'react';

const Input = (props) => {
	return (
		<div className=''>
			<label
				htmlFor='input'
				className='inline-block mb-2 text-gray-700 font-bold'
			>
				{props.title}
				<input
					className='block
        			w-full
        			px-3
        			py-1.5
        			text-base
        			font-normal
     			 text-gray-700
       		 bg-white bg-clip-padding
        			border border-solid border-gray-300
        			rounded
        			transition
        			ease-in-out
       		 focus:text-gray-700 focus:bg-white focus:border-[#6A62E6] focus:outline-none'
					onChange={props.onChange}
					id='input'
					value={props.value}
					placeholder={props.placeholder}
					required={props.required}
				/>
			</label>
		</div>
	);
};

export default Input;
