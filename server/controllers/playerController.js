const db = require("../config/db");

// Add Player
const addPlayer = (req, res) => {
    const {
        full_name,
        gender,
        date_of_birth,
        weight_category,
        phone,
        email,
        address
    } = req.body;

    const sql = `
        INSERT INTO players
        (full_name, gender, date_of_birth, weight_category, phone, email, address)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            full_name,
            gender,
            date_of_birth,
            weight_category,
            phone,
            email,
            address
        ],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Error adding player",
                    error: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Player added successfully"
            });
        }
    );
};

const getAllPlayers = (req, res) => {

    const sql = "SELECT * FROM players";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error fetching players"
            });
        }

        res.json({
            success: true,
            players: result
        });

    });

};
const updatePlayer = (req, res) => {

    const { id } = req.params;

    const {
        full_name,
        gender,
        date_of_birth,
        weight_category,
        phone,
        email,
        address
    } = req.body;

    const sql = `
        UPDATE players
        SET
        full_name=?,
        gender=?,
        date_of_birth=?,
        weight_category=?,
        phone=?,
        email=?,
        address=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            full_name,
            gender,
            date_of_birth,
            weight_category,
            phone,
            email,
            address,
            id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success:false,
                    message:"Error updating player"
                });
            }

            if (result.affectedRows === 0) {
    return res.status(404).json({
        success: false,
        message: "Player not found"
    });
}

res.json({
    success: true,
    message: "Player updated successfully"
});

        }
    );

};
const deletePlayer = (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM players WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error deleting player"
            });
        }

        if (result.affectedRows === 0) {
    return res.status(404).json({
        success: false,
        message: "Player not found"
    });
}

res.json({
    success: true,
    message: "Player deleted successfully"
});

    });

};
module.exports = {
    addPlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer
};