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
    const id:number = req.body.newRow.id;
    const section:number = req.body.newRow.section;
    const name:string = req.body.newRow.name;
    const occupied:boolean = req.body.newRow.occupied;

    try {
        // Perform the database update operation
        const result = await query(
            'UPDATE toilets SET section = $1, name = $2, occupied = $3 WHERE id = $4',
            [section, name, occupied, id]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: (error as Error).message });
    }
}
