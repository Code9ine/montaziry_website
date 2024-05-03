"use client";
import HomeTIle from "@/components/HomeTIle";
import { Container } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return (
		<Container size={"lg"} className='bg-white'>
			<HomeTIle />
		</Container>
	);
};

export default Home;
