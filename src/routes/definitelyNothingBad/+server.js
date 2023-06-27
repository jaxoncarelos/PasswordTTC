import { json } from "@sveltejs/kit";
import * as databaseUtils from "$lib/server/databaseUtils.js";

export async function POST({ request, cookies }) {
  const password = request.body;
  let data = await request.json();
  console.log(data);
  const result = await databaseUtils.savePassword(data);

  return (result && json({ status: 201 })) || json({ status: 400 });
}
