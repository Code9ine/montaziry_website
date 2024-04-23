import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Dr.Montaziry",
	description: "This is a personal weblog that add content of himself.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
