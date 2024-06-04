import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vfxsgvoreqhcsfxzyjbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmeHNndm9yZXFoY3NmeHp5amJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjQ3NTMsImV4cCI6MjAzMjc0MDc1M30.hbmJBVwJVyITxjG1Os0t83YKsnYmLnCDSH_9zxxeMjY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
