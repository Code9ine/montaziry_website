"use client";
import axiosInstance from "@/lib/axios";
import { formatString } from "@/lib/formatString";
import { Link } from "@/navigation";
import { Text } from "@mantine/core";
import moment from "moment";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Categories = ({ id }) => {
	const t = useTranslations("generals");
	const [posts, setPosts] = useState([]);
	const [categoryTitle, setCategoryTitle] = useState({});
	const [page, setPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const locale = useLocale();

	const fetchData = async () => {
		try {
			const res = await axiosInstance.get(
				`/api/posts?locale=${locale}&filters[category][slug][$eq]=${id}&populate[0]=author_id&pagination[page]=${page}&pagination[pageSize]=${perPage}
`,
			);
			setPosts(res?.data?.data);
		} catch (error) {
			console.error(
				"Error fetching category with posts:",
				error.response?.data || error.message,
			);
		}
	};
	const fetchCategory = async () => {
		try {
			const res = await axiosInstance.get(
				`/api/categories?locale=${locale}&filters[slug][$eq]=${id}`,
			);
			setCategoryTitle(res?.data?.data[0]);
		} catch (error) {
			console.error(
				"Error fetching category with posts:",
				error.response?.data || error.message,
			);
		}
	};

	useEffect(() => {
		fetchData();
	}, [id, page, perPage]);
	// Ensure you update data if any of these values change
	useEffect(() => {
		fetchCategory();
	}, []); // Ensure you update data if any of these values change

	// const posts = [
	// 	{
	// 		id: 1,
	// 		title: "Islamism and Post Islamism",
	// 		created_by: "Admin",
	// 		created_at: "2024-10-03",
	// 		category: "Announcements",
	// 		category_id: 1,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "The Impact of Artificial Intelligence on Society",
	// 		created_by: "John Doe",
	// 		created_at: "2024-09-25",
	// 		category: "Technology",
	// 		category_id: 1,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Climate Change: Challenges and Solutions",
	// 		created_by: "Jane Smith",
	// 		created_at: "2024-09-15",
	// 		category: "Environment",
	// 		category_id: 2,
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "The Future of Space Exploration",
	// 		created_by: "Elon Musk",
	// 		created_at: "2024-09-08",
	// 		category: "Science",
	// 		category_id: 2,
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Artificial General Intelligence: The Next Frontier",
	// 		created_by: "Alan Turing",
	// 		created_at: "2024-08-31",
	// 		category: "Technology",
	// 		category_id: 3,
	// 	},
	// 	{
	// 		id: 6,
	// 		title: "The Role of Blockchain in Finance",
	// 		created_by: "Satoshi Nakamoto",
	// 		created_at: "2024-08-20",
	// 		category: "Finance",
	// 		category_id: 3,
	// 	},
	// 	{
	// 		id: 7,
	// 		title: "Mental Health Awareness: Breaking the Stigma",
	// 		created_by: "Emily Davidson",
	// 		created_at: "2024-08-10",
	// 		category: "Health",
	// 		category_id: 4,
	// 	},
	// 	{
	// 		id: 8,
	// 		title: "Innovations in Renewable Energy",
	// 		created_by: "Tesla Inc.",
	// 		created_at: "2024-07-28",
	// 		category: "Environment",
	// 		category_id: 4,
	// 	},
	// 	{
	// 		id: 9,
	// 		title: "The Evolution of Social Media Platforms",
	// 		created_by: "Mark Zuckerberg",
	// 		created_at: "2024-07-15",
	// 		category: "Technology",
	// 		category_id: 5,
	// 	},
	// 	{
	// 		id: 10,
	// 		title: "Building Sustainable Cities for the Future",
	// 		created_by: "City Planning Committee",
	// 		created_at: "2024-07-03",
	// 		category: "Urban Development",
	// 		category_id: 5,
	// 	},
	// 	{
	// 		id: 11,
	// 		title: "The Rise of Electric Vehicles",
	// 		created_by: "Tesla Inc.",
	// 		created_at: "2024-06-20",
	// 		category: "Technology",
	// 		category_id: 6,
	// 	},
	// 	{
	// 		id: 12,
	// 		title: "Advances in Medical Research",
	// 		created_by: "Dr. Lisa Adams",
	// 		created_at: "2024-06-12",
	// 		category: "Health",
	// 		category_id: 6,
	// 	},
	// 	{
	// 		id: 13,
	// 		title: "The Future of Work: Remote vs. In-person",
	// 		created_by: "HR Department",
	// 		created_at: "2024-05-30",
	// 		category: "Business",
	// 		category_id: 7,
	// 	},
	// 	{
	// 		id: 14,
	// 		title: "Exploring Sustainable Agriculture",
	// 		created_by: "Farmers Association",
	// 		created_at: "2024-05-15",
	// 		category: "Environment",
	// 		category_id: 7,
	// 	},
	// 	{
	// 		id: 15,
	// 		title: "Revolutionizing Education with Technology",
	// 		created_by: "Education Ministry",
	// 		created_at: "2024-05-01",
	// 		category: "Education",
	// 		category_id: 8,
	// 	},
	// 	{
	// 		id: 16,
	// 		title: "The Future of Augmented Reality",
	// 		created_by: "AR Innovations Inc.",
	// 		created_at: "2024-04-20",
	// 		category: "Technology",
	// 		category_id: 8,
	// 	},
	// 	{
	// 		id: 17,
	// 		title: "Tackling Homelessness in Urban Areas",
	// 		created_by: "City Council",
	// 		created_at: "2024-04-05",
	// 		category: "Urban Development",
	// 		category_id: 1,
	// 	},
	// 	{
	// 		id: 18,
	// 		title: "The Impact of Social Media on Mental Health",
	// 		created_by: "Psychologists Association",
	// 		created_at: "2024-03-20",
	// 		category: "Health",
	// 		category_id: 2,
	// 	},
	// 	{
	// 		id: 19,
	// 		title: "Advancements in Quantum Computing",
	// 		created_by: "Quantum Computing Labs",
	// 		created_at: "2024-03-05",
	// 		category: "Technology",
	// 		category_id: 3,
	// 	},
	// 	{
	// 		id: 20,
	// 		title: "Renewable Energy Solutions for Developing Countries",
	// 		created_by: "Green Energy Foundation",
	// 		created_at: "2024-02-20",
	// 		category: "Environment",
	// 		category_id: 4,
	// 	},
	// 	{
	// 		id: 21,
	// 		title: "The Future of Telecommunications",
	// 		created_by: "Telecom Giants",
	// 		created_at: "2024-02-05",
	// 		category: "Technology",
	// 		category_id: 5,
	// 	},
	// 	{
	// 		id: 22,
	// 		title: "Promoting Gender Equality in the Workplace",
	// 		created_by: "Gender Equality Initiative",
	// 		created_at: "2024-01-20",
	// 		category: "Business",
	// 		category_id: 6,
	// 	},
	// 	{
	// 		id: 23,
	// 		title: "Challenges and Opportunities in Remote Work",
	// 		created_by: "Remote Work Association",
	// 		created_at: "2024-01-05",
	// 		category: "Business",
	// 		category_id: 7,
	// 	},
	// 	{
	// 		id: 24,
	// 		title: "The Role of Artificial Intelligence in Healthcare",
	// 		created_by: "Health Tech Innovations",
	// 		created_at: "2023-12-20",
	// 		category: "Health",
	// 		category_id: 8,
	// 	},
	// 	{
	// 		id: 25,
	// 		title: "Sustainable Transportation Solutions",
	// 		created_by: "Green Transport Alliance",
	// 		created_at: "2023-12-05",
	// 		category: "Environment",
	// 		category_id: 1,
	// 	},
	// 	{
	// 		id: 26,
	// 		title: "Addressing Climate Change Through Policy Reform",
	// 		created_by: "Climate Action Coalition",
	// 		created_at: "2023-11-20",
	// 		category: "Environment",
	// 		category_id: 2,
	// 	},
	// 	{
	// 		id: 27,
	// 		title: "The Future of Robotics in Industry",
	// 		created_by: "Robotics Research Institute",
	// 		created_at: "2023-11-05",
	// 		category: "Technology",
	// 		category_id: 3,
	// 	},
	// 	{
	// 		id: 28,
	// 		title: "Supporting Mental Health in Schools",
	// 		created_by: "Education Department",
	// 		created_at: "2023-10-20",
	// 		category: "Education",
	// 		category_id: 4,
	// 	},
	// 	{
	// 		id: 29,
	// 		title: "The Impact of Urbanization on Biodiversity",
	// 		created_by: "Environmental Conservation Society",
	// 		created_at: "2023-10-05",
	// 		category: "Environment",
	// 		category_id: 5,
	// 	},
	// 	{
	// 		id: 30,
	// 		title: "Fostering Innovation in Start-up Ecosystems",
	// 		created_by: "Start-up Incubator",
	// 		created_at: "2023-09-20",
	// 		category: "Business",
	// 		category_id: 6,
	// 	},
	// ];
	return (
		<div>
			<div className='text-[26px]  border-b border-b-black border-solid'>
				{/* Archives for the ‘ {formatString(id)} ’ Category */}
				{t("archivesCategory", { category: categoryTitle?.attributes?.title })}
			</div>
			<div>
				{posts?.map((item, index) => (
					<div
						key={index}
						className=' py-3 border-b border-b-black border-solid'>
						<Link
							href={`/single/${item?.attributes?.slug}`}
							className='text-blue-400 inline-block text-2xl leading-6 hover:underline mt-2 hover:cursor-pointer'>
							{item?.attributes?.title}
						</Link>

						<div className='rounded-sm bg-[#eef5e1] md:flex md:items-center md:w-fit  px-2 '>
							{locale == "en" && (
								<>
									<Text className='text-xs'>
										By
										<span className='text-blue-400 leading-6 hover:underline mt-2 hover:cursor-pointer'>
											{" " +
												item?.attributes?.author_id?.data?.attributes?.name}
										</span>
									</Text>
									<span className='mx-2 text-xs hidden md:block'> • </span>
									<div className='text-xs'>
										{moment(item?.attributes?.publishedAt).format(
											"Do MMMM YYYY",
										)}
									</div>
									<span className='mx-2 text-xs hidden md:block'> • </span>
								</>
							)}

							<Text className='text-xs'>
								{t("category")}:
								<span className='text-blue-400 leading-6 hover:underline mt-2 hover:cursor-pointer'>
									{" " + categoryTitle?.attributes?.title}
								</span>
							</Text>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
