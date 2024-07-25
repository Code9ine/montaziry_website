import { Link } from "@/navigation";
import { Card, Image, Text, Badge, Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export function SingleCardWorksBy({ item }) {
	const { title, text, src, id } = item;

	return (
		<Card withBorder radius='md' className='relative hover:bg-gray-100 my-2'>
			<Card.Section>
				<Link href={`/single/${id}`}>
					<Image src={src} height={180} alt='image' />
				</Link>
			</Card.Section>

			<Link
				className=' text-blue-400 font-semibold leading-6 hover:underline mt-1 hover:cursor-pointer'
				href={`/single/${id}`}
				lineClamp={1}>
				{title}
			</Link>

			<Text fz='sm' c='dimmed' lineClamp={4}>
				{text}
			</Text>

			<Button variant='outline' className='mt-2'>
				more
			</Button>
		</Card>
	);
}
