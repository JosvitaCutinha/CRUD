

import { createClient } from "@supabase/supabase-js";

// Use environment variables first, fallback to production values if not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
  (import.meta.env.PROD ? "" : "");

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
  (import.meta.env.PROD ? " : "");

// Debug logging (without exposing keys)
console.log("Supabase URL configured:", !!supabaseUrl);
console.log("Supabase Key configured:", !!supabaseKey);
console.log("Environment:", import.meta.env.MODE);
console.log("Is Production:", import.meta.env.PROD);

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase configuration. Please check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
