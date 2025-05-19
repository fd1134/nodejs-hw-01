import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_FOLDER = path.resolve(__dirname, '..', 'db');
export const PATH_DB = path.join(DB_FOLDER, 'db.json');
