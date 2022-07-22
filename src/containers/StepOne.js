import React, { useContext } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { MultiStepContext } from './../Context/StepContext';

const StepOne = () => {
	const { userData, setUserData, setCurrentStep } =
		useContext(MultiStepContext);

	const handleChange = (e, key) => {
		setUserData((userData[key] = e.target.value));
	};

	return (
		<div className='w-64 md:w-[500px] flex flex-col justify-center items-center'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='mt-6 text-2xl font-bold'>
					Welcome! First things first...
				</h1>
				<p className='text-slate-400'>You can always change them later.</p>
			</div>
			<div className='mt-7'>
				<Input
					title='Full Name'
					placeholder='Steve Jobs'
					value={userData.fullName}
					onChange={(e) => handleChange(e, 'fullName')}
					required={true}
				/>
			</div>
			<div className='mt-3'>
				<Input
					title='Display Name'
					placeholder='Steve'
					value={userData.fullName}
					onChange={(e) => handleChange(e, 'displayName')}
					required={true}
				/>
			</div>
			<div className='mt-3'>
				<Button onClick={() => setCurrentStep(2)} title={'create Workspace'} />
			</div>
		</div>
	);
};

export default StepOne;
