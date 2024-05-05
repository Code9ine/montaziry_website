"use client";
import { Button, Grid, Image, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

import React from "react";

const HomeHeader = () => {
	const router = useRouter();
	return (
		<div className='mx-2 bg-gray-100 md:p-4 p-0'>
			<Grid className='flex'>
				<Grid.Col span={{ base: 12, md: 6, lg: 5 }}>
					<Image
						src='https://i.imgur.com/Cij5vdL.png'
						alt='image'
						w='auto'
						h='100%'
					/>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6, lg: 7 }}>
					<div className='flex flex-col justify-between'>
						<div>
							<Text
								onClick={() => router.push(`/category/${1}`)}
								className='font-semibold uppercase hover:underline hover:cursor-pointer'>
								Lectures
							</Text>
							<Text
								onClick={() => router.push(`/single/${1}`)}
								className='text-blue-400 inline-block text-2xl leading-6 hover:underline mt-2 hover:cursor-pointer'>
								Justice as a Redundant Concept in Islamic Jurispridence
							</Text>
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
