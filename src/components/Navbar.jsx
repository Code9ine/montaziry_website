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
import { useLanguage } from "./LanguageToggle";
import LangIcon from "@/icons/lang";
import { useRouter } from "next/navigation";

const links = [
	{ link: "/", label: "Home" },
	{ link: "/biography", label: "Biography" },
	{ link: "/books", label: "Books Collections" },
	{ link: "/CDs", label: "CDs Collections" },
	{ link: "/audios", label: "Audios Collections" },

	{ link: "/contact", label: "Contact Us" },
];

export function HeaderSimple() {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { toggleLanguage, currentLanguage } = useLanguage();
	const { setDirection, dir } = useDirection();
	const router = useRouter();

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
			{link.label}
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
							className='hover:cursor-pointer hover:bg-gray-400 p-2 transition-all duration-150 rounded-full'
							onClick={() => {
								toggleLanguage();
								console.log(currentLanguage == "en" ? "ltr" : "rtl");
								console.log(currentLanguage == "en" );
								
								setDirection(currentLanguage == "en" ? "ltr" : "rtl");
							}}>
							<LangIcon color='red' width={20} height={20} />
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
