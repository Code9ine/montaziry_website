export const formatString = (str) => {
	return str
		.split("_") // Split the string by underscores
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
		.join(" "); // Join the words with spaces
};
