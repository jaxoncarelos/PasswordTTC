import { viewAllPasswords } from "$lib/server/databaseUtils";

export async function GET() {
  let values = await viewAllPasswords();
  return new Response(JSON.stringify(values), {
    headers: {
      "content-type": "application/json",
    },
  });
}