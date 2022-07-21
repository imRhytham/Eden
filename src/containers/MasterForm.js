import React, { useState } from 'react';
import logo from './../Assets/images/logo.png';
import MultiStepProgressBar from '../components/MultiStepProgressBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Button from '../components/Button';

const MasterForm = () => {
	const [userData, setUserData] = useState({
		fullName: '',
		displayName: '',
		workspaceName: '',
		workspaceURL: '',
		isIndividual: true,
	});
	const [currentStep, setCurrentStep] = useState(1);

	const renderNextForm = () => {
		currentStep <= 3 ? setCurrentStep(currentStep + 1) : setCurrentStep(4);
	};

	return (
		<div className='w-64 md:w-[500px] flex flex-col justify-center items-center'>
			<div className='flex flex-row '>
				<img src={logo} alt={'logo'} />
				<h1 className='mt-3 text-3xl font-bold'>Eden</h1>
			</div>
			<div className='my-12'>
				<MultiStepProgressBar currentStep={currentStep} />
			</div>
			<StepOne currentStep={currentStep} data={userData} />
			<StepTwo currentStep={currentStep} data={userData} />
			<StepThree currentStep={currentStep} data={userData} />
			<StepFour currentStep={currentStep} />
			<div className='mt-3'>
				<Button
					onClick={renderNextForm}
					title={currentStep === 4 ? 'Launch Eden' : 'create Workspace'}
				/>
			</div>
		</div>
	);
};

export default MasterForm;
