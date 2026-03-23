import pool from "../connection.js";

export const getPlots = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, description, plants FROM plots"
    );

    const plots = rows.map((row) => {
      if (typeof row.plants !== "string") return row;
      try {
        return { ...row, plants: JSON.parse(row.plants) };
      } catch {
        return row;
      }
    });

    res.status(200).json(plots);
  } catch (error) {
    console.error("Error fetching plots:", error);
    res.status(500).json({ error: "error fetching plots from database" });
  }
};