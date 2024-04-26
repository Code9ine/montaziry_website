import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import ProgressProvider from "@/providers/progress.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr.Montaziry",
  description: "This is a personal weblog that add content of himself.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <head>
          <ColorSchemeScript />
        </head>
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {children}
          <ProgressProvider />
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
