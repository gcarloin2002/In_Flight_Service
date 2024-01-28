import { query } from '../../lib/db';
import {NextApiRequest, NextApiResponse} from "next";

/**
 * Next.js API route for updating an employee's information in the database.
 *
 * @param {NextApiRequest} req - The Next.js API request object containing the updated employee data.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
export default async(req: NextApiRequest, res: NextApiResponse)=> {
    const id:number = req.body.id;

    try {
        // Perform the database update operation
        var result = await query('SELECT amount FROM food WHERE id = $1', [id]);
        const currentQuantity = result.rows[0].amount;
        const newQuantity = Math.max(0, currentQuantity - 1);
        result = await query(
            'UPDATE food SET amount = $1 WHERE id = $2 RETURNING *',
            [newQuantity, id]
          );
        res.json(result.rows);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: (error as Error).message });
    }
}
