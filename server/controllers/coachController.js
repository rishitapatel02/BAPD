const db = require("../config/db");

// Add Coach
const addCoach = (req, res) => {

    const {
        full_name,
        specialization,
        experience,
        phone,
        email,
        address
    } = req.body;

    const sql = `
        INSERT INTO coaches
        (full_name, specialization, experience, phone, email, address)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            full_name,
            specialization,
            experience,
            phone,
            email,
            address
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Error adding coach",
                    error: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Coach added successfully"
            });

        }
    );

};
const getAllCoaches = (req, res) => {

    const sql = "SELECT * FROM coaches";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error fetching coaches"
            });
        }

        res.json({
            success: true,
            coaches: result
        });

    });

};
const updateCoach = (req, res) => {

    const { id } = req.params;

    const {
        full_name,
        specialization,
        experience,
        phone,
        email,
        address
    } = req.body;

    const sql = `
        UPDATE coaches
        SET
        full_name=?,
        specialization=?,
        experience=?,
        phone=?,
        email=?,
        address=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            full_name,
            specialization,
            experience,
            phone,
            email,
            address,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Error updating coach"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Coach not found"
                });
            }

            res.json({
                success: true,
                message: "Coach updated successfully"
            });

        }
    );

};
const deleteCoach = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM coaches WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error deleting coach"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Coach not found"
            });
        }

        res.json({
            success: true,
            message: "Coach deleted successfully"
        });

    });

};

module.exports = {
    addCoach,
    getAllCoaches,
    updateCoach,
    deleteCoach
};