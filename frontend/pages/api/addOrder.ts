import { query } from '../../lib/db';
import {NextApiRequest, NextApiResponse} from "next";

/**
 * Next.js API route for adding a new employee to the database.
 *
 * @param {NextApiRequest} req - The Next.js API request object.
 * @param {NextApiResponse} res - The Next.js API response object.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
export default async(req: NextApiRequest, res: NextApiResponse)=> {
    const id:number = req.body.newOrder.id;
    const userid:number = req.body.newOrder.userid;
    const orderconfirmed:boolean = req.body.newOrder.orderconfirmed;
    console.log(req.body);

    try {
        // Perform the database update operation
        const result = await query(
            'INSERT INTO orders(id, userid, orderconfirmed) VALUES ($1, $2, $3)',
            [id, userid, orderconfirmed]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: (error as Error).message });
    }
}
