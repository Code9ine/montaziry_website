"use client";
import React from "react";
import LeftMainTitle from "../leftMainTitle";
import { useRouter } from "next/navigation";

const HomeCategory = () => {
	const router = useRouter();

	const categories = [
		{ id: 1, title: "Announcement" },
		{ id: 2, title: "Interviews" },
		{ id: 3, title: "Lectures" },
		{ id: 4, title: "News" },
		{ id: 5, title: "Videos" },
		{ id: 6, title: "Works by Dr.Montaziry" },
		{ id: 7, title: "Works cities Dr.Montaziry" },
		{ id: 7, title: "Works on Dr.Montaziry" },
	];
	return (
		<>
			<LeftMainTitle title='Categories' />
			<div className='my-4'>
				{categories.map((item, i) => (
					<div
						onClick={() => router.push(`/category/${item.id}`)}
						key={i}
						className='text-sm bg-gray-300 px-2 border-l-[6px] border-slate-800 my-[1px] hover:cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-100'>
						{item.title}
					</div>
				))}
			</div>
		</>
	);
};

export default HomeCategory;
