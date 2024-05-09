import Layout from "@/components/layout";
import SinglePage from "@/components/singlePages/singlePage";
import { Container } from "@mantine/core";
import React from "react";

const Page = ({ params }) => {
	return (
		<Layout>
			<Container size={"lg"} className='bg-white'>
				<SinglePage id={params.single_page_id} />
			</Container>
		</Layout>
	);
};

export default Page;
