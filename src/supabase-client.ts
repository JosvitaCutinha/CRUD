

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Debug logging (without exposing keys)
console.log("Supabase URL configured:", !!supabaseUrl);
console.log("Supabase Key configured:", !!supabaseKey);
console.log("Environment:", import.meta.env.MODE);

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase configuration. Please check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);