const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Pool } = require('pg');

const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = '123456';
const ADMIN_NAME = 'Maho';

function loadEnvFiles() {
  for (const file of ['.env.local', '.env']) {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) continue;
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (!match) continue;
      let value = match[2];
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(match[1] in process.env)) process.env[match[1]] = value;
    }
  }
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const derived = crypto.scryptSync(password, salt, 64).toString('hex');
  return `scrypt$${salt}$${derived}`;
}

async function main() {
  loadEnvFiles();

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL no encontrada en .env.local ni en .env');
  }

  const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } });

  const schemaPath = path.join(__dirname, 'blog-schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf8');
  await pool.query(schema);
  console.log('Esquema del blog creado (tablas e indices).');

  const existing = await pool.query('SELECT id, email FROM users WHERE email = $1', [
    ADMIN_EMAIL,
  ]);

  if (existing.rows.length > 0) {
    console.log(`El usuario ${ADMIN_EMAIL} ya existe, no se modifica.`);
  } else {
    await pool.query(
      'INSERT INTO users (email, password_hash, name, role) VALUES ($1, $2, $3, $4)',
      [ADMIN_EMAIL, hashPassword(ADMIN_PASSWORD), ADMIN_NAME, 'admin']
    );
    console.log(`Usuario administrador creado: ${ADMIN_EMAIL}`);
  }

  const counts = await pool.query(
    'SELECT (SELECT count(*) FROM users) AS users, (SELECT count(*) FROM categories) AS categories, (SELECT count(*) FROM articles) AS articles'
  );
  console.log('Estado de la BD:', counts.rows[0]);

  await pool.end();
}

main().catch((error) => {
  console.error('Error inicializando la BD del blog:', error.message);
  process.exit(1);
});
