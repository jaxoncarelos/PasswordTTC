import { viewAllPasswords } from "$lib/server/databaseUtils";

export async function GET() {
  const passwords = await viewAllPasswords();
  return {
    body: {
      passwords
    }
  };
}