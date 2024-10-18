"use client";
import Layout from "@/components/layout";
import axiosInstance from "@/lib/axios";
import { List, Text } from "@mantine/core";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Biography = () => {
	const locale = useLocale();
	const [data, setData] = useState();

	const fetchData = async () => {
		const res = await axiosInstance.get(`/api/biographies?locale=${locale}`);
		setData(res?.data?.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Layout>
			{data?.map((item) => {
				return (
					<div key={item.id}>
						<div className='text-[26px] pb-2 border-b border-b-black border-solid'>
							{item?.attributes?.title}
						</div>
						<BlocksRenderer
							content={item?.attributes?.text}
							blocks={{
								paragraph: ({ children }) => <Text>{children}</Text>,
								list: ({ children }) => (
									<List size='sm' className='list-disc'>
										{children}
									</List>
								),
								"list-item": ({ children }) => (
									<List.Item className='my-2'>{children}</List.Item>
								),
							}}
						/>
					</div>
				);
			})}
		</Layout>
	);
};

export default Biography;
