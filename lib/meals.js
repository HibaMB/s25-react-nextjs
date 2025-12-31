import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error("Loading meals failed..");
  const records = db.prepare("SELECT * FROM meals").all();
  return records;
}

export async function getMeal(slug) {
  const data = db.prepare(`SELECT * FROM meals where slug = ?`).get(slug);
  return data;
}
