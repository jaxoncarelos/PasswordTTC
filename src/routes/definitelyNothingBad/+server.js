import { json } from '@sveltejs/kit'
import * as databaseUtils from '$lib/server/databaseUtils.js'

export async function POST({ request, cookies })
{
  const { password } = await request.json();

  const result = await databaseUtils.savePassword(password);

  return result && json({status: 201}) || json({status: 400});
}