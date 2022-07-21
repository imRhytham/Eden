import React, { useState } from 'react';
import Input from '../components/Input';

const StepTwo = (props) => {
	const [userData, setUserData] = useState(props.data);

	if (props.currentStep !== 2) {
		return null;
	}

	const handleChange = (e, key) => {
		setUserData((userData[key] = e.target.value));
	};

	return (
		<div className='w-64 md:w-[500px] flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='mt-6 text-2xl font-bold'>
					Lets setyp a home for all your work
				</h1>
				<p className='text-slate-400'>
					You can always create another workspace later.
				</p>
			</div>
			<div className='mt-7'>
				<Input
					title='Workspace Name'
					placeholder='Eden'
					onChange={(e) => handleChange(e, 'workspaceName')}
				/>
			</div>
			<div className='mt-3'>
				<Input
					title='Workspace URL'
					placeholder='Example'
					onChange={(e) => handleChange(e, 'worspaceURL')}
				/>
			</div>
		</div>
	);
};

export default StepTwo;
