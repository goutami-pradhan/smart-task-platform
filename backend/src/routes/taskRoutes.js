const express =
require("express");

const router =
express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {
createTask,

 getTasks,

 getTaskById,

 updateTask,

 deleteTask

 } = require("../controllers/taskController");

 //Create Task
router.post(
    "/",
    authMiddleware,
    createTask
);

//Get All Tasks
router.get(
    "/",
    authMiddleware,
    getTasks
);

router.put(
 "/:id",
 authMiddleware,
 updateTask
);

router.delete(
 "/:id",
 authMiddleware,
 deleteTask
);

//Get Single Task
router.get(
 "/:id",
 authMiddleware,
 getTaskById
);

module.exports = router;