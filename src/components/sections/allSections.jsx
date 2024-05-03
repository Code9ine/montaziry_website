import { ActionIcon, Grid, rem, TextInput } from "@mantine/core";
import React from "react";
import WorksBy from "./workByMontaziry";
import InterViewsSection from "./InterViews/interViewsSection";
import NewsSection from "./news/newsSection";
import VideosSection from "./videos/newsSection";
import WorkCitiesSection from "./worksCities/workCitiesSection";
import WorksOnSection from "./worksOn/worksOnSection";
import RecentPostSections from "./recentPost/recentPostSections";
import { IconArrowRight, IconSearch } from "@tabler/icons-react";
import { SearchInput } from "../searchInput";

const AllSections = () => {
	return (
		<Grid>
			<Grid.Col span={4} className='border-r mt-4 pt-0'>
				<WorksBy />
			</Grid.Col>
			<Grid.Col span={4} className='mt-4 pt-0'>
				<InterViewsSection />
				<NewsSection />
				<VideosSection />
				<WorkCitiesSection />
				<WorksOnSection />
			</Grid.Col>
			<Grid.Col span={4} className='pt-0'>
				<SearchInput />
				<RecentPostSections />
			</Grid.Col>
		</Grid>
	);
};

export default AllSections;
