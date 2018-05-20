import { ok } from "assert";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";

module.exports = app => {

    const Users = app.dao.db.models.Users,
          cfg = app.libs.config;

    app.get("/users/:id", (req, res) => {
        Users.findById(req.params.id, {
            attributes: ["id", "name", "email", "password"]
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });

    app.delete("/users/:id", (req, res) => {
        Users.destroy({where: {id: req.params.id} })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
    
    app.post("/signin", (req, res) => {
        signin(req, res);
    });

    app.post("/users", (req, res) => {
        createUser(req, res);
    });

    async function signin(req, res) {
        try {
            if (req.body.email && req.body.password) {
                const email = req.body.email;
                const password = req.body.password;

                const user = await Users.findOne({where: {email: email}});
                const isValidPassword = await bcrypt.compare(password, user.password);

                if (!isValidPassword) {
                    throw {code: 401, message: "email or Password invalid"};
                }

                const payload = {id: user.id, email: user.email};
                const token = jwt.encode(payload, cfg.jwtSecret);
                res.json(token);
            } else {
                throw {code: 401, message: "Email or Password can not be empty"};
            }
        } catch (e) {
            res.status(e.code).json({message: e.message});
        }
    }

    async function createUser(req, res) {
        try {
            const salt = await bcrypt.genSalt();
            req.body.password = await bcrypt.hash(req.body.password, salt);
            const result = await Users.create(req.body);
            res.json(result);
        } catch (e) {
            res.status(412).json({msg: error.message});
        }
    }

   
};