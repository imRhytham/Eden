import React, { useState } from 'react';
import App from '../App';

export const MultiStepContext = React.createContext();

const StepContext = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState({
		fullName: '',
		displayName: '',
		workspaceName: '',
		workspaceUrl: '',
		isIndividual: true,
	});

	return (
		<div>
			<MultiStepContext.Provider
				value={{ currentStep, setCurrentStep, userData, setUserData }}
			>
				<App />
			</MultiStepContext.Provider>
		</div>
	);
};

export default StepContext;
