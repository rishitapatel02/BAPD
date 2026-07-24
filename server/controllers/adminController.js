const db = require("../config/db");

const loginAdmin = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";

    db.query(sql, [email, password], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length > 0) {
            return res.json({
                success: true,
                message: "Login Successful"
            });
        }

        return res.json({
            success: false,
            message: "Invalid Email or Password"
        });

    });

};

module.exports = { loginAdmin };