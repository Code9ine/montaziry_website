import SingleCardCustom from "../singleCardCustom";

const VideosSection = () => {
	const news = [
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
				Videos
			</a>
			{news.map((item, i) => (
				<SingleCardCustom
					title={item.title}
					src={item.src}
					text={item.text}
					more={item.more}
					key={i}
				/>
			))}
		</div>
	);
};

export default VideosSection;
