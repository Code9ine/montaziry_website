import { Grid } from "@mantine/core";
import React from "react";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeCategory from "./homeHeader/HomeCategory";

const HomeTIle = () => {
	return (
		<Grid className='pt-5 '>
			<Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
				<HomeHeader />
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
				<HomeCategory />
			</Grid.Col>
		</Grid>
	);
};

export default HomeTIle;
