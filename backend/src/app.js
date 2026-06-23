const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes =
require("./routes/authRoutes");

const authMiddleware =
require("./middleware/authMiddleware");

const errorMiddleware =
require("./middleware/errorMiddleware");

const taskRoutes =
require("./routes/taskRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(helmet());

app.use(morgan("dev"));


app.get("/", (req, res) => {

    res.send(
        "Task Management API"
    );

});

app.get(
    "/api/profile",
    authMiddleware,
    (req, res) => {

        res.json({

            message:
                "Protected Route",

            user:
                req.user

        });

    }
);
app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/tasks",
    taskRoutes
);

app.use(errorMiddleware);

app.get("/", (req, res) => {

 res.json({

   success: true,

   message:
     "Smart Task API Running"

 });

});



module.exports = app;