

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://loweckzztsohptnodxgb.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvd2Vja3p6dHNvaHB0bm9keGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0ODg1NzAsImV4cCI6MjA3MzA2NDU3MH0.YourActualKeyHere";

// Debug logging
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key exists:", !!supabaseKey);
console.log("Environment:", import.meta.env.MODE);

export const supabase = createClient(supabaseUrl, supabaseKey);