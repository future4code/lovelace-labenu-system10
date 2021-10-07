"use strict";
exports.__esModule = true;
var express_1 = require("express");
var teachers_1 = require("../endpoints/teachers");
var router = (0, express_1.Router)();
router.post('/teacher', teachers_1.createTeacher);
exports["default"] = router;
