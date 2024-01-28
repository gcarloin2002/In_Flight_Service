import { query } from '../lib/db';
import {NextApiRequest, NextApiResponse} from "next";

/**
 * Next.js API route for updating an employee's information in the database.
 *
 * @param {NextApiRequest} req - The Next.js API request object containing the updated employee data.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
export default async(req: NextApiRequest, res: NextApiResponse)=> {
    const id:number = req.body.newRow.id;
    const name:string = req.body.newRow.name;
    const vegetarian:boolean = req.body.newRow.vegetarian;
    const halal:boolean = req.body.newRow.halal;
    const amount:number = req.body.newRow.amount;

    try {
        // Perform the database update operation
        const result = await query(
            'UPDATE food SET name = $1, vegetarian = $2, halal = $3, amount = $4 WHERE id = $5',
            [name, vegetarian, halal, amount, id]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: (error as Error).message });
    }
}
