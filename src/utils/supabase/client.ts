import { createBrowserClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

// const cookieStore = await cookies();
export const supabase = createClient();
