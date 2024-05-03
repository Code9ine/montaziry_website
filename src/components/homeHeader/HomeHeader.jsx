import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";

const HomeHeader = () => {
	return (
		<div className='mx-2 bg-gray-100 p-4'>
			<div className='flex'>
				<Image
					src='/images/profile.jpeg'
					alt='image'
					width={200}
					height={300}
				/>
				<div className='ms-5 flex flex-col justify-between'>
					<div>
						<a href='/' className='font-semibold uppercase hover:underline'>
							Lectures
						</a>
						<a
							href='/'
							className='text-blue-400 inline-block text-2xl leading-6 hover:underline mt-2'>
							Justice as a Redundant Concept in Islamic Jurispridence
						</a>
						<p className='leading-5 mt-2'>
							Abdulkarim Soroush’s talk at Dayton University Seminar on Islam
							and Social Justice
						</p>
					</div>
					<div>
						<Button variant='outline' className='mt-2'>
							more
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
