import express from "express";
import Tasks from './models/tasks.js'
const router = express.Router();

router.get("/tasks", (req, res) => {

    var callback = function(tasks) {
        console.log("Find all tasks: " + JSON.stringify(tasks));
        res.json({tasks: tasks});
    };
    
    console.log("Will be find all taks!")
    Tasks.findAll({}, callback);
});

module.exports = router;