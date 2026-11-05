const express = require("express");
const Task = require("../models/task.js")

const router = express.Router();
const {client, getCache, setCache, delCache} = require("../config/cache.js");



router.get("/tasks", async (req, res) => {
    try {
        // redis :
        const key = "tasks";
        const cached = await getCache(key);
        if (cached) {
            console.log("cached")
            return res.render("pages/tasks.ejs", { tasks: cached, title: "tasks-list" }); 
        }

        const tasks = await Task.find();
        await setCache(key , tasks , 60);
        return res.render("pages/tasks.ejs", { tasks: tasks, title: "tasks-list" }); 

    } catch (error) {
        console.log("GET /tasks " , error.message);
    }
})

router.get("/tasks/create", (req, res) => {
    try {
        return res.render("pages/createTask.ejs", { title: "create a new task" });
    } catch (error) {
        console.log("GET /tasks/create ",error.status);
    }
});

router.get("/tasks/:id/edit", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        return res.render("pages/editTask.ejs",
            { task: task, title: "edit task - " + task._id }
        );
    } catch (error) {
        console.log("GET /tasks/:id/edit " ,error.message);
    }
})

router.post("/tasks", async (req, res) => {
    try {
        const task = { title: req.body.title, description: req.body.description };
        const createTask = new Task(task);
        await createTask.save();
        await delCache("tasks");
        res.redirect("/tasks");
    } catch (error) {
        console.log("POST /tasks ",error.message);
    }
});

router.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        return res.render("pages/taskDetails.ejs",
            { task: task, title: "Task details - " + task._id })
    } catch (error) {
        console.log("GET /tasks/:id " ,error.message);
    }
});


router.put("/tasks/:id", async (req, res) => {
    try {
        const newTask = { title: req.body.title, description: req.body.description };
        const task = await Task.findByIdAndUpdate(req.params.id, newTask);
        await delCache("tasks")
        res.redirect("/tasks");
    } catch (error) {
        console.log("PUT /tasks/:id " , error.message);
    }
});
// this route mark a task as finished or not  
router.patch("/tasks/:id/toggle" , async (req , res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.isFinished = req.body.isFinished;
        await task.save();
        await delCache("tasks");
        res.redirect("/tasks");
    } catch (error) {
        console.log("PATCH /tasks/:id/toggle " , error.message);
    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        await delCache("tasks");
        res.redirect("/tasks");
    } catch (error) {
        console.log("DELETE /tasks/:id " , error.message);
    }
});


module.exports = router;