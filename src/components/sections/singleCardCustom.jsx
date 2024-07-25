import { Link } from "@/navigation";
import { Card, Image, Avatar, Text, Group, Grid } from "@mantine/core";

const SingleCardCustom = ({ item }) => {
	const { title, text, id, src } = item;
	return (
		<Card withBorder radius='md' className='my-2' p={0}>
			<Grid>
				<Grid.Col span={4} className='px-0'>
					<Image
						src={src}
						// src='/images/profile.jpeg'
						h={100}
						w='100%'
						alt='image'
					/>
				</Grid.Col>
				<Grid.Col span={8}>
					<div>
						<Link
							className='text-blue-400 pr-1 font-semibold leading-4 hover:underline my-2 line-clamp-[1]'
							href={`single/${id}`}
							fw={700}>
							{title}
						</Link>
						<Text className='leading-4 text-sm pr-1 ' c='dimmed' lineClamp={4}>
							{text}
						</Text>
					</div>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

export default SingleCardCustom;
