"use client";
import { useState } from "react";
import {
	Container,
	Group,
	Burger,
	AspectRatio,
	Button,
	useDirection,
	Drawer,
	Collapse,
	ScrollArea,
	Divider,
	rem,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "../styles/HeaderMegaMenu.module.css";
import Image from "next/image";
import LangIcon from "@/icons/lang";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

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
	const [active, setActive] = useState(links[0].link);
	const { setDirection } = useDirection();
	const router = useRouter();
	const { i18n, t } = useTranslation();

	const items = links.map((link, i) => (
		<Text
			key={i}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={() => {
				router.push(link.link);
				setActive(link.link);
				close();
			}}>
			{t(link.label)}
		</Text>
	));

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
							onClick={() => {
								i18n.changeLanguage(i18n.language === "en" ? "fa" : "en");
								setDirection(i18n.language === "fa" ? "rtl" : "ltr");
							}}>
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
