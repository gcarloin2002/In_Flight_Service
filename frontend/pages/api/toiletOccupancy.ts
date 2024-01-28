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
    try {
        // Perform the database update operation
        const result = await query(
            'SELECT occupied from toilets'
        );
        const toiletOccupancy = result.rows.map((row) => Boolean(row.occupied));

    // Send the modified response with boolean values
    res.json({ toiletOccupancy });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: (error as Error).message });
    }
}
