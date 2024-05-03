import LeftMainTitle from "@/components/leftMainTitle";
import { List } from "@mantine/core";

const RecentPostSections = () => {
	return (
		<>
			<LeftMainTitle title='Recent Posts' />
			<div className='mx-4 mt-5'>
				<List size='sm' className='list-disc'>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Clone or download repository from GitHub
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Install dependencies with yarn
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
							maiores.
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							pariatur commodi aspernatur modi. Architecto, nemo obcaecati
							veniam cupiditate dolore voluptatem minus provident ea hic amet
							doloribus consectetur at? Cumque, voluptates!
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
							optio odio aut? Officia, cumque tempora!
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet.
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
							ipsam doloribus voluptatem autem alias harum asperiores
							repellendus nulla. Tenetur, similique?
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
							accusamus.
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Clone or download repository from GitHub
						</a>
					</List.Item>
					<List.Item className='my-2'>
						<a
							href='/'
							target='_blank'
							className='text-blue-400  whitespace-break-spaces leading-4 hover:underline'>
							Clone or download repository from GitHub
						</a>
					</List.Item>
				</List>
			</div>
		</>
	);
};

export default RecentPostSections;
