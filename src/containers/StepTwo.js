import React, { useContext } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { MultiStepContext } from './../Context/StepContext';

const StepTwo = () => {
	const { userData, setUserData, setCurrentStep } =
		useContext(MultiStepContext);

	const handleChange = (e, key) => {
		setUserData((userData[key] = e.target.value));
	};

	const handleSubmit = () => {
		if (!userData.fullName && !userData.displayName) return;
		setCurrentStep(3);
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
					required={true}
				/>
			</div>
			<div className='mt-3'>
				<Input
					title='Workspace URL'
					placeholder='Example'
					onChange={(e) => handleChange(e, 'worspaceURL')}
					required={true}
				/>
			</div>
			<div className='mt-3'>
				<Button onClick={handleSubmit} title={'create Workspace'} />
			</div>
		</div>
	);
};

export default StepTwo;
