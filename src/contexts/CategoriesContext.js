"use client";
import axiosInstance from "@/lib/axios";
import { createContext, useState, useEffect } from "react";

// Create the Context
export const CategoriesContext = createContext();

// Create a Provider component
export const CategoriesProvider = ({ children, locale }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await axiosInstance.get(`/api/categories?locale=${locale}`);
				setCategories(res?.data?.data || []);
			} catch (error) {
				console.error("Error fetching categories", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, [locale]);

	return (
		<CategoriesContext.Provider value={{ categories, loading }}>
			{children}
		</CategoriesContext.Provider>
	);
};
