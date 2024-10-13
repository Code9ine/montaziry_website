"use client";
import { useState } from "react";
import {
	Container,
	Group,
	Burger,
	AspectRatio,
	Drawer,
	ScrollArea,
	Divider,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/HeaderMegaMenu.module.css";
import Image from "next/image";
import LangIcon from "@/icons/lang";
import { useRouter } from "../navigation";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const links = [
	{ link: "/", label: "home" },
	{ link: "/biography", label: "biography" },
	{ link: "/books", label: "bibliography" },
	{ link: "/CDs", label: "CDsCollections" },
	{ link: "/audios", label: "audiosCollections" },
	{ link: "/contact", label: "contactUs" },
];

export function HeaderSimple() {
	const [opened, { toggle, close }] = useDisclosure(false);
	const router = useRouter();
	const t = useTranslations("links");
	const pathname = usePathname();
	const locale = useLocale();

	const items = links.map((link, i) => {
		const strippedPathname = pathname.replace(`/${locale}`, "") || "/";
		return (
			<Link
				key={i}
				href={link.link}
				className={classes.link}
				data-active={strippedPathname === link.link || undefined}
				// onClick={() => {
				// 	console.log(pathname, `/${locale}${link.link}`);
				// }}
			>
				{t(link.label)}
			</Link>
		);
	});

	return (
		<>
			<Container size={"lg"} className={classes.container}>
				<div className='top-landing'>
					<AspectRatio ratio={1080 / 350}>
						<Image src={"/images/top-bg.jpg"} alt={"image"} fill={true} />
					</AspectRatio>
				</div>
				<header className={classes.header}>
					<div className={classes.inner}>
						<Group gap={5} visibleFrom='xs'>
							{items}
						</Group>
						<div
							className='hover:cursor-pointer hover:bg-gray-100 p-2 transition-all duration-150 rounded-full text-blue-400'
							onClick={() =>
								router.push("/", { locale: locale == "fa" ? "en" : "fa" })
							}>
							<LangIcon width={22} height={22} />
						</div>

						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom='xs'
							size='sm'
						/>
					</div>
				</header>

				<Drawer
					opened={opened}
					onClose={close}
					size='100%'
					padding='md'
					title='Navigation'
					hiddenFrom='sm'
					zIndex={1000000}>
					<ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
						<Divider my='sm' />

						{items}
					</ScrollArea>
				</Drawer>
			</Container>
		</>
	);
}
