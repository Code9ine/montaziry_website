"use client";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import {
	ColorSchemeScript,
	Container,
	DirectionProvider,
	Grid,
	MantineProvider,
	useDirection,
} from "@mantine/core";
import ProgressProvider from "@/providers/progress.provider";
import { mantineTheme } from "@/styles/Theme";
import { HeaderSimple } from "@/components/Navbar";
import { I18nextProvider } from "react-i18next";
import i18n from "../locals/i18n.js";
import { LanguageProvider } from "@/components/LanguageToggle.jsx";
import HomeCategory from "@/components/homeHeader/HomeCategory.jsx";
import { SearchInput } from "@/components/searchInput.jsx";
import RecentPostSections from "@/components/sections/recentPost/recentPostSections.jsx";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Dr.Montaziry",
//   description: "This is a personal weblog that add content of himself.",
// };

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
			</head>

			<body className={inter.className}>
				<I18nextProvider i18n={i18n}>
					<LanguageProvider>
						<MantineProvider theme={mantineTheme}>
							<DirectionProvider>
								<HeaderSimple />
								<Container size={"lg"} className='bg-white'>
									<Grid className='pt-5 '>
										<Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
											{children}
										</Grid.Col>
										<Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
											<HomeCategory />
											<SearchInput />
											<RecentPostSections />
										</Grid.Col>
									</Grid>
								</Container>

								<ProgressProvider />
							</DirectionProvider>
						</MantineProvider>
					</LanguageProvider>
				</I18nextProvider>
			</body>
		</html>
	);
};

export default RootLayout;
