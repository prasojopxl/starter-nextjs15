import axios, { Method } from "axios"

export const fetchData = async (method: Method, url: string, data?: any) => {
    try {
        const headers: Record<string, string> = {};
        headers['Authorization'] = `Bearer ${process.env.KEY_API}`;
        const response = await axios({
            method,
            url: `${process.env.BASE_API}${url}`,
            data,
            headers,
        });
        return response?.data;
    } catch (err) {
        console.error('Request failed:', err);
        throw err;
    }
};