import React from "react";
import { HeaderSimple } from "./Navbar";
import { Container, Grid } from "@mantine/core";
import HomeCategory from "./homeHeader/HomeCategory";
import { SearchInput } from "./searchInput";
import RecentPostSections from "./sections/recentPost/recentPostSections";
import SocialLinks from "./sections/SocialLinks/SocialLinks";

const Layout = ({ children }) => {
	return (
		<>
			<HeaderSimple />
			<Container size={"lg"} className='bg-white'>
				<Grid className='pt-5 '>
					<Grid.Col span={{ base: 12, md: 6, lg: 8 }}>{children}</Grid.Col>
					<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
						<HomeCategory />
						<SearchInput />
						<RecentPostSections />
						<SocialLinks />
					</Grid.Col>
				</Grid>
			</Container>
			<Container size={"lg"}>
				<div className='my-3'>
					<span>&#169;</span> {new Date().getFullYear()} Ahmad Shekib Montaziry
					:: احمد شکیب منتظری
				</div>
			</Container>
		</>
	);
};

export default Layout;
