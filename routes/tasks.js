module.exports = app => {

    const Tasks = app.models.tasks;

    app.get("/tasks", (req, res) => {
        
        var callback = function(tasks) {
            console.log("Find all tasks: " + JSON.stringify(tasks));
            res.json({tasks: tasks});
        };
        
        console.log("Will be find all taks!")
        Tasks.findAll({}, callback);

    });
}
