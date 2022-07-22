import React, { useContext } from 'react';
import Button from '../components/Button';
import { MultiStepContext } from './../Context/StepContext';

const StepThree = () => {
	const { setCurrentStep } = useContext(MultiStepContext);

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
				<ul className='grid gap-6 w-full md:grid-cols-2'>
					<li>
						<input
							type='radio'
							id='individual'
							name='individual'
							value='individual'
							className='hidden peer'
							required
						/>
						<label
							for='individual'
							className='flex flex-col justify-between items-start h-40
                     p-5 w-full text-gray-500 bg-white rounded-lg border
                   border-gray-200 cursor-pointer 
                   peer-checked:border-[#6A62E6]
                   peer-checked:text-[#6A62E6]
                   hover:text-gray-600'
						>
							<svg
								aria-hidden='true'
								className='ml-3 w-6 h-6'
								fill='currentColor'
								viewBox='0 0 448 512'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z' />
							</svg>
							<div className='block'>
								<div className='w-full text-lg font-semibold'>For myself</div>
								<div className='w-full text-xs'>
									write better. Think more clearly. Stay organized
								</div>
							</div>
						</label>
					</li>
					<li>
						<input
							type='radio'
							id='team'
							name='team'
							value='team'
							className='hidden peer'
						/>
						<label
							for='team'
							className='flex flex-col justify-between items-start h-40
                     p-5 w-full text-gray-500 bg-white rounded-lg border
                   border-gray-200 cursor-pointer 
                   peer-checked:border-[#6A62E6]
                   peer-checked:text-[#6A62E6]
                   hover:text-gray-600
                   '
						>
							<svg
								aria-hidden='true'
								className='ml-3 w-6 h-6'
								fill='currentColor'
								viewBox='0 0 640 512'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z' />
							</svg>

							<div className='block'>
								<div className='w-full text-lg font-semibold'>With my team</div>
								<div className='w-full'>
									Wikis, docs, tasks & projects, all in one place.
								</div>
							</div>
						</label>
					</li>
				</ul>
			</div>
			<div className='mt-3'>
				<Button onClick={() => setCurrentStep(4)} title={'create Workspace'} />
			</div>
		</div>
	);
};

export default StepThree;
