import { Button, Grid, Image } from "@mantine/core";

import React from "react";

const HomeHeader = () => {
	return (
		<div className='mx-2 bg-gray-100 md:p-4 p-0'>
			<Grid className='flex'>
				<Grid.Col span={5}>
					<Image
						src='https://i.imgur.com/Cij5vdL.png'
						alt='image'
						w='auto'
						h='100%'
					/>
				</Grid.Col>
				<Grid.Col span={7}>
					<div className='flex flex-col justify-between'>
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
				</Grid.Col>
			</Grid>
		</div>
	);
};

export default HomeHeader;
