import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "3kjgp7uo",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});