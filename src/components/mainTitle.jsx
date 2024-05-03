import React from "react";

const MainTitle = ({ title }) => {
	return (
		<>
			<div className='h-1 w-full bg-gray-300'></div>
			<div className='border-b border-black my-1 w-full uppercase text-sm'>
				{title}
			</div>
		</>
	);
};

export default MainTitle;
