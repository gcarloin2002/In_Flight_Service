import { Pool } from 'pg';

/**
 * This is a singleton class that is used to connect to the database.
 */
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
/**
 * This is a helper function that executes a query on the database.
 * @param text The query to execute.
 * @param params The parameters to pass to the query.
 */
export const query = async (text: string, params?: any[]) => pool.query(text, params);
