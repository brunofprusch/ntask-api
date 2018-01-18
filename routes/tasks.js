module.exports = app => {

    const Tasks = app.dao.db.models.Tasks;

    app.get("/tasks", (req, res) => {
        
        console.log("Will be find all taks!")
        
        Tasks.findAll({}).then(tasks => {
            res.json({tasks: tasks});
        });

    });
}
