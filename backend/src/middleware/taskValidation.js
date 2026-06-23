const{
    body }= require(
        "express-validator"
    );

    exports.createTaskValidation = [
        body("title")
        .notEmpty()
        .withMessage(
            "Title Required"
        ),
        body("priority")
        .isIn([
            "Low",
            "Medium",
            "High"
        ])
    ];
