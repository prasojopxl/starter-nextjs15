import { useTranslations } from "next-intl";
import HelloWorld from "@/components/HelloWorld";
import SwitchLang from "@/components/SwitchLang";

export default function HomePage() {
    const t = useTranslations("general");
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-1">
            <h1>{t("title")}</h1>
            <SwitchLang />
            <HelloWorld />
        </div>
    );
}
