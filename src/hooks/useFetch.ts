import axios, { type Method } from "axios";
import { useEffect, useState } from "react";
import { api } from "@/lib/utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function useFetch<T>(method: Method, url: string, requestData?: any) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api({
                    method,
                    url,
                    data: requestData,
                });

                setData(response.data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error(String(err)));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [method, url, requestData]);

    return { data, loading, error };
}
// How to use:
// const { data, loading, error } = useFetch("GET", "/endpoint");
// const { data, loading, error } = useFetch("POST", "/endpoint", { name: "John" });

export function useFetchWithDeps<T>(
    method: string,
    url: string,
    deps: any[] = []
) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios({ method, url });
                if (isMounted) {
                    setData(res.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setData(null);
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url, ...deps]);

    return { data, loading, error };
}
