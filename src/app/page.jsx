"use client";
import { Container } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return (
		<Container size={"lg"}>
			<div>{t("hello")}</div>
		</Container>
	);
};

export default Home;
