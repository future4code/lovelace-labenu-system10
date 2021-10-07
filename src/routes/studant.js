"use strict";
exports.__esModule = true;
var express_1 = require("express");
var studants_1 = require("../endpoints/studants");
var router = (0, express_1.Router)();
router.post('/studant', studants_1.createStudant);
router.get('/studant/:id', studants_1.getStudantAgeByStudantId);
exports["default"] = router;
