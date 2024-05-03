"use client";
import HomeTIle from "@/components/HomeTIle";
import AllSections from "@/components/sections/allSections";
import { Container } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return (
		<Container size={"lg"} className='bg-white'>
			<HomeTIle />
			<AllSections />
			<br />
			<br />
		</Container>
	);
};

export default Home;
