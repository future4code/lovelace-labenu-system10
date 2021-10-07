"use strict";
exports.__esModule = true;
exports.addTeacherAtClass = exports.addStudantAtClass = exports.createClass = void 0;
/**
 POST
 /class
 */
var createClass = function (req, res) {
    try {
        res.statusCode = 400;
        //Funcionalidade aqui
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
};
exports.createClass = createClass;
/**
 POST
 '/class/:idClass/addStudant'

 req.params.idClass
 dados do teacher por body
 */
var addStudantAtClass = function (req, res) {
    try {
        res.statusCode = 400;
        //Funcionalidade aqui
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
};
exports.addStudantAtClass = addStudantAtClass;
/**
 POST
 '/class/:idClass/addTeacher'

  req.params.idClass
  dados do studant por body
 */
var addTeacherAtClass = function (req, res) {
    try {
        res.statusCode = 400;
        //Funcionalidade aqui
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
};
exports.addTeacherAtClass = addTeacherAtClass;
