import Categories from "@/components/categories/categories";
import Layout from "@/components/layout";
import { Container } from "@mantine/core";
import React from "react";

const Page = ({ params }) => {
	return (
		<Layout>
			<Container size={"lg"} className='bg-white'>
				<Categories id={params.id} />
			</Container>
		</Layout>
	);
};

export default Page;
