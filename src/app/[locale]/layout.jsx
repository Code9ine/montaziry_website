import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import {
	ColorSchemeScript,
	DirectionProvider,
	MantineProvider,
} from "@mantine/core";
import ProgressProvider from "@/providers/progress.provider";
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });
import { getMessages } from "next-intl/server";
import { CategoriesProvider } from "@/contexts/CategoriesContext";

const RootLayout = async ({ children, params: { locale } }) => {
	const messages = await getMessages();

	console.log("locale", locale);

	return (
		<html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
			<head>
				<ColorSchemeScript />
			</head>

			<body className={inter.className}>
				{/* <LanguageProvider> */}
				<NextIntlClientProvider messages={messages}>
					<MantineProvider>
						<DirectionProvider
							initialDirection={locale == "en" ? "ltr" : "rtl"}>
							<CategoriesProvider locale={locale}>
								{children}
							</CategoriesProvider>
							<ProgressProvider />
						</DirectionProvider>
					</MantineProvider>
				</NextIntlClientProvider>
				{/* </LanguageProvider> */}
			</body>
		</html>
	);
};

export default RootLayout;
