"use client";
import axiosInstance from "@/lib/axios";
import { Link } from "@/navigation";
import { Button, Grid, Image } from "@mantine/core";
import { useLocale } from "next-intl";
import { useEffect } from "react";

import React from "react";

const HomeHeader = () => {
	const locale = useLocale();

	const fetchPost = async () => {
		const res = await axiosInstance.get(`/api/posts?locale=${locale}`, {
			params: {
				populate: "featured_image",
			},
		});
	};

	useEffect(() => {
		fetchPost();
	}, []);

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
							<Link
								href={`/category/${1}`}
								className='font-semibold uppercase hover:underline hover:cursor-pointer'>
								Lectures
							</Link>
							<Link
								href={`/single/${1}`}
								className='text-blue-400 inline-block text-2xl leading-6 hover:underline mt-2 hover:cursor-pointer'>
								Justice as a Redundant Concept in Islamic Jurispridence
							</Link>
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
