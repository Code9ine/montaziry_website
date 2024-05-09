import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import {
	ColorSchemeScript,
	DirectionProvider,
	MantineProvider,
} from "@mantine/core";
import ProgressProvider from "@/providers/progress.provider";
import initTranslations from "@/i18n";
import TranslationsProvider from "@/providers/TranslationsProvider";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({ children, params: { locale } }) => {
	const { resources } = await initTranslations(locale);

	return (
		<html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
			<head>
				<ColorSchemeScript />
			</head>

			<body className={inter.className}>
				{/* <LanguageProvider> */}
				<TranslationsProvider
					namespaces={["default"]}
					locale={locale}
					resources={resources}>
					<MantineProvider>
						<DirectionProvider
							initialDirection={locale == "en" ? "ltr" : "rtl"}>
							{children}
							<ProgressProvider />
						</DirectionProvider>
					</MantineProvider>
				</TranslationsProvider>
				{/* </LanguageProvider> */}
			</body>
		</html>
	);
};

export default RootLayout;
