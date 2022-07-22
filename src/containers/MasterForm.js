import React, { useContext } from 'react';
import logo from './../Assets/images/logo.png';
import MultiStepProgressBar from '../components/MultiStepProgressBar';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import { MultiStepContext } from './../Context/StepContext';

const MasterForm = () => {
	const { currentStep } = useContext(MultiStepContext);

	const rendeForm = (step) => {
		switch (step) {
			case 1:
				return <StepOne />;
			case 2:
				return <StepTwo />;
			case 3:
				return <StepThree />;
			default:
				return <StepFour />;
		}
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
			{rendeForm(currentStep)}
		</div>
	);
};

export default MasterForm;
