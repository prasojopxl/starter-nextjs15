"use client";
import { useEffect, useState } from "react";

export function useCookies() {
    const [cookies, setCookies] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const parseCookies = () => {
            const parsed: { [key: string]: string } = {};
            const cookieArray = document.cookie.split("; ");

            for (const cookie of cookieArray) {
                const [key, value] = cookie.split("=");
                if (key && value) parsed[key] = decodeURIComponent(value);
            }

            setCookies(parsed);
        };

        parseCookies();
    }, []);

    const getCookie = (name: string): string | null => {
        return cookies[name] || null;
    };

    const setCookie = (name: string, value: string, days?: number) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = `; expires=${date.toUTCString()}`;
        }
        document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
        setCookies(prev => ({ ...prev, [name]: value }));
    };

    const deleteCookie = (name: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        setCookies(prev => {
            const updatedCookies = { ...prev };
            delete updatedCookies[name];
            return updatedCookies;
        });
    };

    return { cookies, getCookie, setCookie, deleteCookie };
}
