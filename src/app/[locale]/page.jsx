"use client";
import HomeTIle from "@/components/HomeTIle";
import Layout from "@/components/layout";
import AllSections from "@/components/sections/allSections";
import { Container } from "@mantine/core";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations("Index");
	return (
		<Layout>
			<Container size={"lg"} className='bg-white'>
				{t("title")}
				<HomeTIle />
				<AllSections />
			</Container>
		</Layout>
	);
};

export default Home;
