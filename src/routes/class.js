"use strict";
exports.__esModule = true;
var express_1 = require("express");
var class_1 = require("../endpoints/class");
var router = (0, express_1.Router)();
router.post('/class', class_1.createClass);
router.post('/class/:idClass/addTeacher', class_1.addTeacherAtClass);
router.post('/class/:idClass/addStudant', class_1.addStudantAtClass); // dados do studant por body
exports["default"] = router;
