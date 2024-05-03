import { Card, Image, Text, Badge, Button } from "@mantine/core";

export function SingleCardWorksBy({ title, text, src, linkProps, more, key }) {
	// const linkProps = {
	// 	href: "https://mantine.dev",
	// 	target: "_blank",
	// 	rel: "noopener noreferrer",
	// };

	return (
		<Card
			withBorder
			radius='md'
			className='relative hover:bg-gray-100 my-2'
			key={key}>
			<Card.Section>
				<a {...linkProps}>
					<Image src={src} height={180} />
				</a>
			</Card.Section>

			<Text
				className=' text-blue-400 font-semibold leading-6 hover:underline mt-1'
				component='a'
				lineClamp={1}
				{...linkProps}>
				{title}
			</Text>

			<Text fz='sm' c='dimmed' lineClamp={4}>
				{text}
			</Text>

			<Button component='a' href={more} variant='outline' className='mt-2'>
				more
			</Button>
		</Card>
	);
}
