

import { createClient } from "@supabase/supabase-js";

// Use environment variables first, fallback to production values if not set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
  (import.meta.env.PROD ? "https://loweckzztsohptnodxgb.supabase.co" : "");

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
  (import.meta.env.PROD ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvd2Vja3p6dHNvaHB0bm9keGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0ODg1NzAsImV4cCI6MjA3MzA2NDU3MH0.v1LGKBYzsNdYWVd0-sfJ4iFjyYhDqA2wmcs-O8OWQVw" : "");

// Debug logging (without exposing keys)
console.log("Supabase URL configured:", !!supabaseUrl);
console.log("Supabase Key configured:", !!supabaseKey);
console.log("Environment:", import.meta.env.MODE);
console.log("Is Production:", import.meta.env.PROD);

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase configuration. Please check your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);