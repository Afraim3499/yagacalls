const { Client } = require('pg');
const DB = 'postgresql://postgres.ghwvwtwktnveqdqivxmy:Rizwan99636%3F@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres';

async function main() {
  const client = new Client({ connectionString: DB, ssl: { rejectUnauthorized: false } });
  await client.connect();

  console.log("=== COMMUNITY_MEMBERS_LOG COLUMNS ===");
  const cols = await client.query(
    "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'community_members_log' ORDER BY ordinal_position"
  );
  console.log(cols.rows);

  console.log("\n=== SAMPLE COMMUNITY MEMBERS LOG ROW ===");
  const sample = await client.query("SELECT * FROM public.community_members_log LIMIT 2");
  console.log(sample.rows);

  await client.end();
}

main().catch(console.error);
