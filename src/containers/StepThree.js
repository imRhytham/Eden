import React from 'react';
import Input from '../components/Input';

const StepThree = (props) => {
	if (props.currentStep !== 3) {
		return null;
	}
	return (
		<div className='w-64 md:w-[500px] flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='mt-6 text-2xl font-bold'>
					How are you planning to use Eden?
				</h1>
				<p className='text-slate-400'>
					We'll streamline your setup experience accordingly.
				</p>
			</div>
			<div className='mt-7'>
				<Input title='Workspace Name' placeholder='Eden' />
			</div>
			<div className='mt-3'>
				<Input title='Workspace URL' placeholder='Example' />
			</div>
		</div>
	);
};

export default StepThree;
