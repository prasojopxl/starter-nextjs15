import { useTranslations } from "next-intl";
import HelloWorld from "@/components/HelloWorld";
import SwitchLang from "@/components/SwitchLang";

export default function HomePage() {
	const t = useTranslations("general");
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-1 bg-blue-50">
			<h1>{t("title")}</h1>
			<SwitchLang />
			<HelloWorld />
		</div>
	);
}
