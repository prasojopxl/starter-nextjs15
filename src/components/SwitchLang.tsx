"use client";
import React, { useEffect } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useSelectedLayoutSegment } from "next/navigation";

export default function SwitchLang({ color }: { color?: string }) {
	const router: any = useRouter();
	const locale = useLocale();
	const pathName = useSelectedLayoutSegment();
	const pathname = usePathname();

	const textColor = pathName ? "text-c-base" : "text-white";

	const handleChangeLang = (lang: string) => {
		const segments = pathname.split("/");
		if (segments[1]?.length === 2) {
			segments[1] = lang;
		} else {
			segments.splice(1, 0, lang);
		}
		const newPath = segments.join("/");
		router.push(newPath);
	};

	useEffect(() => {
		// if (router.isReady) {
		// 	console.log("asPath:", router.asPath); // debug
		// }
	}, [router.isReady]);

	return (
		<div
			className={`max-w-[60px] focus-visible:ring-0 [&>button]:bg-[rgb(255,255,255)]/0 [&>button]:border-0 [&>button]:shadow-none [&>button]:px-[10px] [&>span]:absolute [&>span]:${textColor} [&>select]:max-w-[74px] dark:data-[placeholder]:${textColor} [&>svg>path]:${textColor} [&>svg>path]:stroke-white!`}
		>
			<Select onValueChange={(value) => handleChangeLang(value)}>
				<div className="relative">
					<SelectTrigger className="w-[80px]  uppercase focus-visible:ring-0; [&_svg:not([class*='text-'])]:text-black">
						<SelectValue
							placeholder={locale}
							className={`placeholder:opacity-100 focus-visible:ring-0 `}
						/>
					</SelectTrigger>
				</div>
				<SelectContent>
					<SelectItem value="en">EN</SelectItem>
					<SelectItem value="id">ID</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
