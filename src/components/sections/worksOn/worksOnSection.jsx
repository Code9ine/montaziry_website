import React from "react";
import SingleCardCustom from "../singleCardCustom";

const WorksOnSection = () => {
	const workOn = [
		{
			id: 1,
			src: "/images/profile.jpeg",
			more: "/",
			title:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laboriosam labore saepe provident dolore suscipit libero quidem ducimus cupiditate laudantium. Explicabo quae rem cumque molestiae voluptatum? Ipsum quisquam aliquam quaerat.",
		},
		{
			id: 2,
			src: "/images/profile.jpeg",
			more: "/",
			title:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laboriosam labore saepe provident dolore suscipit libero quidem ducimus cupiditate laudantium. Explicabo quae rem cumque molestiae voluptatum? Ipsum quisquam aliquam quaerat.",
		},
		{
			id: 3,
			src: "/images/profile.jpeg",
			more: "/",
			title:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laboriosam labore saepe provident dolore suscipit libero quidem ducimus cupiditate laudantium. Explicabo quae rem cumque molestiae voluptatum? Ipsum quisquam aliquam quaerat.",
		},
	];
	return (
		<div className='mt-5'>
			<a
				href='/'
				className='font-semibold uppercase text-sm  inline-block hover:underline'>
				Works On Dr.Montaziry
			</a>
			{workOn.map((item, i) => (
				<div key={i}>
					<SingleCardCustom item={item} />
				</div>
			))}
		</div>
	);
};

export default WorksOnSection;
