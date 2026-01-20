import pool from "../connection.js";

// we will need to decide on how we store plots before we can save them.
export const savePlots = async (req, res) => {
    try {
        const plots = req.body;
        const {name, description, plants} = await pool.query('INSERT INTO plots (name, description, plants) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), plants = VALUES(plants)', [name, description, plants]);
        res.json({name, description, plants});
    } catch (error) {
        console.error('Error saving plots:', error);
        res.status(500).json({ error: 'error saving plots to database' });
    }
}