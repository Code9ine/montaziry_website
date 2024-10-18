"use client";
import { useState, useEffect } from "react";
import LeftMainTitle from "../leftMainTitle";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import axiosInstance from "@/lib/axios";

const HomeCategory = () => {
	const t = useTranslations("generals");
	const [categories, setCategories] = useState([]);
	const locale = useLocale();

	const fetchData = async () => {
		const res = await axiosInstance.get(`/api/categories?locale=${locale}`);
		setCategories(res?.data?.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<LeftMainTitle title={t("categories")} />
			<div className='my-4'>
				{categories?.map((item, i) => (
					<Link key={i} href={`/category/${item.id}`}>
						<div
							className={`text-sm bg-gray-300 px-2 ${
								locale == "fa" ? "border-r-[6px]" : "border-l-[6px]"
							}  border-slate-800 my-[1px] hover:cursor-pointer hover:bg-blue-400 hover:text-white transition-all duration-100`}>
							{item?.attributes?.title}
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default HomeCategory;
