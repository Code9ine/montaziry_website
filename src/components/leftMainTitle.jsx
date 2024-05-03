import React from "react";

const LeftMainTitle = ({ title }) => {
	return (
		<>
			<div className='h-1 w-full bg-gray-300'></div>
			<div className='border-b border-black my-1 w-full uppercase text-sm'>
				{title}
			</div>
		</>
	);
};

export default LeftMainTitle;
