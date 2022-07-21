import React from 'react';
import 'react-step-progress-bar/styles.css';
import { ProgressBar, Step } from 'react-step-progress-bar';

const MultiStepProgressBar = (props) => {
	let stepPercentage = 25;

	if (props.currentStep === 1) {
		stepPercentage = 16;
	} else if (props.currentStep === 2) {
		stepPercentage = 50;
	} else if (props.currentStep === 3) {
		stepPercentage = 83;
	} else if (props.currentStep === 4) {
		stepPercentage = 100;
	} else {
		stepPercentage = 0;
	}

	return (
		<ProgressBar
			percent={stepPercentage}
			height='1px'
			width='300px'
			filledBackground='#6A26EF'
		>
			<Step>
				{({ accomplished, index }) => (
					<div
						className={`text-white flex justify-center items-center h-9 w-9 rounded-full ${
							accomplished ? 'bg-[#6A62E6]' : 'bg-gray-500'
						}`}
					>
						{index + 1}
					</div>
				)}
			</Step>
			<Step>
				{({ accomplished, index }) => (
					<div
						className={`text-white flex justify-center items-center h-9 w-9 rounded-full  ${
							accomplished ? 'bg-[#6A62E6]' : 'bg-gray-500'
						}`}
					>
						{index + 1}
					</div>
				)}
			</Step>
			<Step>
				{({ accomplished, index }) => (
					<div
						className={`text-white flex justify-center items-center h-9 w-9 rounded-full ${
							accomplished ? 'bg-[#6A62E6]' : 'bg-gray-500'
						}`}
					>
						{index + 1}
					</div>
				)}
			</Step>
			<Step>
				{({ accomplished, index }) => (
					<div
						className={`text-white flex justify-center items-center h-9 w-9 rounded-full ${
							accomplished ? 'bg-[#6A62E6]' : 'bg-gray-500'
						}`}
					>
						{index + 1}
					</div>
				)}
			</Step>
		</ProgressBar>
	);
};

export default MultiStepProgressBar;
