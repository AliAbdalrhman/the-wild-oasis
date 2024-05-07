import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vdgejvqadkyjxakajnan.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZ2VqdnFhZGt5anhha2FqbmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwMTE2OTMsImV4cCI6MjAzMDU4NzY5M30.tLk1wQztJjKLNcbSyQRNP2EKi46JjmemYyJ7W3G7Kgk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
