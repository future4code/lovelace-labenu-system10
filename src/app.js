"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var studant_1 = require("./routes/studant");
var teacher_1 = require("./routes/teacher");
var class_1 = require("./routes/class");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.use(studant_1["default"]);
app.use(teacher_1["default"]);
app.use(class_1["default"]);
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("Server is running in http://localhost: " + address.port);
    }
    else {
        console.error("Failure upon starting server.");
    }
});
