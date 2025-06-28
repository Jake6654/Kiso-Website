import { supabase } from "../../../lib/supabaseClient";
import type { NextApiRequest, NextApiResponse } from "next";

// have to declare async function to connect to the database
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    // it queries all rows from the events table in supabase
    const { data, error } = await supabase.from("events").select("*");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { data, error } = await supabase
      .from("events")
      .insert([req.body])
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]); // only allows these two API request
  // when server gets wrong api request
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
