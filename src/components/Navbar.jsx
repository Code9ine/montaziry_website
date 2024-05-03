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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "../styles/HeaderMegaMenu.module.css";
import Image from "next/image";
import { useLanguage } from "./LanguageToggle";
import LangIcon from "@/icons/lang";

const links = [
	{ link: "/about", label: "Home" },
	{ link: "/learn", label: "Book Collections" },
	{ link: "/community", label: "CDs Collections" },
	{ link: "/community", label: "Audios Collections" },
	{ link: "/pricing", label: "About" },
	{ link: "/pricing", label: "Contact Us" },
];

export function HeaderSimple() {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { toggleLanguage } = useLanguage();
	const { toggleDirection, dir } = useDirection();

	const items = links.map((link, i) => (
		<a
			key={i}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
			}}>
			{link.label}
		</a>
	));

	return (
		<>
			<Container size={"lg"} className={classes.container}>
				<div className='top-landing'>
					<AspectRatio ratio={1080 / 400}>
						<Image src={"/images/top-bg.jpg"} alt={""} fill={true} />
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
								toggleDirection();
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

						<a href='#' className={classes.link}>
							Home
						</a>

						<a href='#' className={classes.link}>
							Learn
						</a>
						<a href='#' className={classes.link}>
							Academy
						</a>
					</ScrollArea>
				</Drawer>
			</Container>
		</>
	);
}
