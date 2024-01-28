import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/db';

/**
 * Next.js API route for getting all employees from the database.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const result = await query('SELECT * FROM food');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
