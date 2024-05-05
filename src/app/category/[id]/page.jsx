import Categories from "@/components/categories/categories";
import { Container } from "@mantine/core";
import React from "react";

const Page = ({ params }) => {
	return (
		<Container size={"lg"} className='bg-white'>
			<Categories id={params.id} />
		</Container>
	);
};

export default Page;
