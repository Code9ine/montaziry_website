import { Card, Image, Text, Badge, Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export function SingleCardWorksBy({ title, text, src, linkProps }) {
	// const linkProps = {
	// 	href: "https://mantine.dev",
	// 	target: "_blank",
	// 	rel: "noopener noreferrer",

	const router = useRouter();
	// };

	return (
		<Card
			withBorder
			radius='md'
			className='relative hover:bg-gray-100 my-2'>
			<Card.Section>
				<a {...linkProps}>
					<Image src={src} height={180} />
				</a>
			</Card.Section>

			<Text
				className=' text-blue-400 font-semibold leading-6 hover:underline mt-1 hover:cursor-pointer'
				onClick={() => router.push(`/single/${title}`)}
				lineClamp={1}
				{...linkProps}>
				{title}
			</Text>

			<Text fz='sm' c='dimmed' lineClamp={4}>
				{text}
			</Text>

			<Button variant='outline' className='mt-2'>
				more
			</Button>
		</Card>
	);
}
