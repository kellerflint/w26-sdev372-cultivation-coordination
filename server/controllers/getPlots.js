import pool from "../connection.js";

export const getPlots = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM plots');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching plots:', error);
        res.status(500).json({ error: 'error fetching plots from database' });
    }
}