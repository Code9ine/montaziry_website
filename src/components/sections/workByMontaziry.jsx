import React from "react";
import { SingleCardWorksBy } from "./singleCardWorksBy";
import { Text } from "@mantine/core";
import { useRouter } from "next/navigation";

const WorksBy = () => {
	const router = useRouter();
	const news = [
		{
			id: 1,
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			title: "You Have Turned Iran into a Grim Land",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
		},
		{
			id: 2,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
		},
		{
			id: 3,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
		},
		{
			id: 4,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
		},
		{
			id: 5,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
		},
	];

	return (
		<div>
			<Text
				onClick={() => router.push(`/category/${4}`)}
				className='font-semibold uppercase text-sm  inline-block hover:underline hover:cursor-pointer'>
				Works by Dr.Montaziry
			</Text>
			{news.map((item, i) => (
				<div key={i}>
					<SingleCardWorksBy item={item} />
				</div>
			))}
		</div>
	);
};

export default WorksBy;
