import { createClient } from "@/utils/supabase/client";
import { cookies } from "next/headers";

export default async function page() {
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	);
	const { data } = await supabase.from("siswa").select("*");
	return (
		<div className="flex min-h-screen items-center justify-center bg-green-50 p-2">
			<div className="text-center">
				<h1 className="text-2xl font-bold mb-4">Data Siswa</h1>
				<ul className="list-disc list-inside">
					{data?.map((siswa) => (
						<li key={siswa.id} className="mb-2">
							{`${siswa.name} `}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
