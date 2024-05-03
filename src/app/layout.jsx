"use client";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import {
	ColorSchemeScript,
	DirectionProvider,
	MantineProvider,
  useDirection,
} from "@mantine/core";
import ProgressProvider from "@/providers/progress.provider";
import { mantineTheme } from "@/styles/Theme";
import { HeaderSimple } from "@/components/Navbar";
import { I18nextProvider } from "react-i18next";
import i18n from "../locals/i18n.js";
import { LanguageProvider } from "@/components/LanguageToggle.jsx";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Dr.Montaziry",
//   description: "This is a personal weblog that add content of himself.",
// };

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>

			<body className={inter.className}>
				<I18nextProvider i18n={i18n}>
					<LanguageProvider>
						<DirectionProvider >
							<MantineProvider theme={mantineTheme}>
								<HeaderSimple />
								{children}
								<ProgressProvider />
							</MantineProvider>
						</DirectionProvider>
					</LanguageProvider>
				</I18nextProvider>
			</body>
		</html>
	);
};

export default RootLayout;
