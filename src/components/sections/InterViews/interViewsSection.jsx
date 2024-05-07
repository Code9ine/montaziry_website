import SingleCardCustom from "../singleCardCustom";

const InterViewsSection = () => {
	const interViews = [
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
		{
			id: 4,
			src: "/images/profile.jpeg",
			more: "/",
			title:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, repellat!",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et laboriosam labore saepe provident dolore suscipit libero quidem ducimus cupiditate laudantium. Explicabo quae rem cumque molestiae voluptatum? Ipsum quisquam aliquam quaerat.",
		},
	];
	return (
		<div>
			<a
				href="/"
				className="font-semibold uppercase text-sm  inline-block hover:underline"
			>
				InterViews
			</a>
			{interViews.map((item, i) => (
				<div key={i}>
					<SingleCardCustom
						title={item.title}
						src={item.src}
						text={item.text}
						more={item.more}
					/>
				</div>
			))}
		</div>
	);
};

export default InterViewsSection;
