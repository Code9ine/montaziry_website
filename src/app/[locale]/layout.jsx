import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import {
	ColorSchemeScript,
	DirectionProvider,
	MantineProvider,
} from "@mantine/core";
import ProgressProvider from "@/providers/progress.provider";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({ children, params: { locale } }) => {
	const messages = await getMessages();
	return (
		<html>
			<head>
				<ColorSchemeScript />
			</head>

			<body className={inter.className}>
				{/* <LanguageProvider> */}
				<NextIntlClientProvider messages={messages}>
					<MantineProvider>
						<DirectionProvider
							initialDirection={locale == "en" ? "ltr" : "rtl"}>
							{children}
							<ProgressProvider />
						</DirectionProvider>
					</MantineProvider>
					{/* </LanguageProvider> */}
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
