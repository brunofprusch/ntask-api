import { ok } from "assert";

module.exports = app => {

    const Tasks = app.dao.db.models.Tasks;

    /*
    app.get("/tasks", (req, res) => {
        
        console.log("Will be find all taks!")
        
        Tasks.findAll({})
            .then(tasks => {
                res.json({tasks: tasks});
            });
    });
    */

    app.route("/tasks")
        .all((req, res, next) => {
            if (req.body) {
                delete req.body.id;
            }
            next();
        })
        .get((req, res) => {
            const result = Tasks.findAll({})
                .then(result => {
                    res.json(result);
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });                
        })
        .post((res, req) => {

        });

    app.route("/tasks/:id")
        .all((req, res) => {
        // Middleware de pré-execução das rotas
        })
        .get((req, res) => {
        // "/tasks/1": Consulta uma tarefa
        })
        .put((req, res) => {
        // "/tasks/1": Atualiza uma tarefa
        })
        .delete((req, res) => {
        // "/tasks/1": Exclui uma tarefa
        });
}
