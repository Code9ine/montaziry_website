import React from "react";
import { SingleCardWorksBy } from "./singleCardWorksBy";

const WorksBy = () => {
	const news = [
		{
			id: 1,
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			title: "You Have Turned Iran into a Grim Land",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
			linksProps: {
				href: "/",
				target: "_blank",
				rel: "noopener noreferrer",
			},
		},
		{
			id: 2,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
			linksProps: {
				href: "/",
				target: "_blank",
				rel: "noopener noreferrer",
			},
		},
		{
			id: 3,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
			linksProps: {
				href: "/",
				target: "_blank",
				rel: "noopener noreferrer",
			},
		},
		{
			id: 4,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
			linksProps: {
				href: "/",
				target: "_blank",
				rel: "noopener noreferrer",
			},
		},
		{
			id: 5,
			title: "You Have Turned Iran into a Grim Land",
			src: "https://i.imgur.com/Cij5vdL.png",
			more: "/",
			text: " letter from Soroush to Khamenei   Mohammad Nourizad, the brave and free-minded artist, who has opened the way to critical admonitions and admonitory criticism, has invited writers and thinkers to join him; to perform their duty of enjoining virtue and opposing vice; and to do their share in reinforcing the criticism in the hope",
			linksProps: {
				href: "/",
				target: "_blank",
				rel: "noopener noreferrer",
			},
		},
	];

	return (
		<div>
			<a
				href='/'
				className='font-semibold uppercase text-sm  inline-block hover:underline'>
				Works by Dr.Montaziry
			</a>
			{news.map((item, i) => (
				<SingleCardWorksBy
					key={i}
					title={item.title}
					text={item.text}
					linkProps={item.linksProps}
					src={item.src}
					more={item.more}
				/>
			))}
		</div>
	);
};

export default WorksBy;
