import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const LocalizedLink = ({ children, ...props }) => {
	const {
		i18n: { language },
	} = useTranslation();
	return (
		<Link
			{...props}
			href={language == "en" ? props.href : `/${language}${props.href}`}>
			{children}
		</Link>
	);
};

export default LocalizedLink;
