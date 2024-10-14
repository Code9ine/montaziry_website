import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor (optional)
axiosInstance.interceptors.request.use(
	(config) => {
		// You can add custom logic before each request here
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Response interceptor (optional)
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error("Error in Axios response:", error);
		return Promise.reject(error);
	},
);

export default axiosInstance;
