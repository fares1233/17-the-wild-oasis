import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://icmahvhmgatmidkgjeaf.supabase.co";
const supabaseKey = "sb_publishable__WFMr9DAD-7upt7srZBvFA_OEbV3wLU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;