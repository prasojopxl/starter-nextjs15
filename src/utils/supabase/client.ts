import { createBrowserClient } from "@supabase/ssr";

export const createClient = (
	NEXT_PUBLIC_SUPABASE_URL: string | undefined,
	p0: string,
) =>
	createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	);
