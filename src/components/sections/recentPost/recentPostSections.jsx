import LeftMainTitle from "@/components/leftMainTitle";
import { Link } from "@/navigation";
import { List } from "@mantine/core";

const RecentPostSections = () => {
	return (
		<>
			<LeftMainTitle title='Recent Posts' />
			<div className='mx-4 mt-5'>
				<List size='sm' className='list-disc'>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Clone or download repository from GitHub
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Install dependencies with yarn
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
							maiores.
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							pariatur commodi aspernatur modi. Architecto, nemo obcaecati
							veniam cupiditate dolore voluptatem minus provident ea hic amet
							doloribus consectetur at? Cumque, voluptates!
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
							optio odio aut? Officia, cumque tempora!
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet.
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
							ipsam doloribus voluptatem autem alias harum asperiores
							repellendus nulla. Tenetur, similique?
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
							accusamus.
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Clone or download repository from GitHub
						</Link>
					</List.Item>
					<List.Item className='my-2'>
						<Link
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Clone or download repository from GitHub
						</Link>
					</List.Item>
				</List>
			</div>
		</>
	);
};

export default RecentPostSections;
