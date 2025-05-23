import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
    },
});

// remove html tags
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "").trim();
}

export const apiURL = process.env.NEXT_PUBLIC_API_URL;
