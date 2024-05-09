"use client";
import { List, Text } from "@mantine/core";

const Biography = () => {
	return (
		<>
			<div className='text-[26px] pb-2 border-b border-b-black border-solid'>
				Biography
			</div>
			<div>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					vero voluptatum et enim cum praesentium, qui neque deserunt expedita
					alias. Sit mollitia nihil numquam, dolorum hic magnam aliquam velit
					molestiae?
				</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					vero voluptatum et enim cum praesentium, qui neque deserunt expedita
					alias. Sit mollitia nihil numquam, dolorum hic magnam aliquam velit
					molestiae?
				</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					vero voluptatum et enim cum praesentium, qui neque deserunt expedita
					alias. Sit mollitia nihil numquam, dolorum hic magnam aliquam velit
					molestiae?
				</Text>
			</div>

			<div className='text-[26px] pb-2 my-3 border-b border-b-black border-solid'>
				Philosophy of Dr. Montaziry
			</div>
			<div>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
					non ut rerum accusamus itaque natus, temporibus nesciunt vero est,
					excepturi, sapiente officiis sequi placeat doloremque quidem eos.
					Aspernatur, perferendis reiciendis.
				</Text>
			</div>

			<div className='text-[26px] pb-2 my-3 border-b border-b-black border-solid'>
				Quotes by Montaziry
			</div>
			<div>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
					non ut rerum accusamus itaque natus, temporibus nesciunt vero est,
					excepturi, sapiente officiis sequi placeat doloremque quidem eos.
					Aspernatur, perferendis reiciendis.
				</Text>
			</div>

			<div className='text-[26px] pb-2 my-3 border-b border-b-black border-solid'>
				Selected works
			</div>
			<div className='mx-4 mt-5'>
				<List size='sm' className='list-disc'>
					<List.Item className='my-2'>
						Clone or download repository from GitHub
					</List.Item>
					<List.Item className='my-2'>Install dependencies with yarn</List.Item>
					<List.Item className='my-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						maiores.
					</List.Item>
					<List.Item className='my-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						pariatur commodi aspernatur modi. Architecto, nemo obcaecati veniam
						cupiditate dolore voluptatem minus provident ea hic amet doloribus
						consectetur at? Cumque, voluptates!
					</List.Item>
					<List.Item className='my-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod optio
						odio aut? Officia, cumque tempora!
					</List.Item>
					<List.Item className='my-2'>Lorem ipsum dolor sit amet.</List.Item>
					<List.Item className='my-2'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
						ipsam doloribus voluptatem autem alias harum asperiores repellendus
						nulla. Tenetur, similique?
					</List.Item>
					<List.Item className='my-2'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
						accusamus.
					</List.Item>
					<List.Item className='my-2'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					</List.Item>
					<List.Item className='my-2'>
						Clone or download repository from GitHub
					</List.Item>
					<List.Item className='my-2'>
						Clone or download repository from GitHub
					</List.Item>
				</List>
			</div>
		</>
	);
};

export default Biography;
