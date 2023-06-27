import * as databaseUtils from '$lib/server/databaseUtils.js'

export async function prerender({ params })
{
  await databaseUtils.initDatabase();
}