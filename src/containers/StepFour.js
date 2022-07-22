import React from 'react';
import Button from '../components/Button';

const StepFour = (props) => {
	return (
		<div className='w-64 md:w-[500px] flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center my-3.5'>
				<h1 className='text-2xl font-bold'>Congratulations, Eren!</h1>
				<p className='text-slate-400'>
					You have completed onboarding, you can start using the Eden!
				</p>
			</div>
			<div className='mt-3'>
				<Button title={'Launch Eden'} />
			</div>
		</div>
	);
};

export default StepFour;
