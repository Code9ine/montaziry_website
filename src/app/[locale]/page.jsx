"use client";
import HomeTIle from "@/components/HomeTIle";
import Layout from "@/components/layout";
import AllSections from "@/components/sections/allSections";
import { Container } from "@mantine/core";

const Home = () => {
	return (
		<Layout>
			<Container size={"lg"} className='bg-white'>
				<HomeTIle />
				<AllSections />
			</Container>
		</Layout>
	);
};

export default Home;
