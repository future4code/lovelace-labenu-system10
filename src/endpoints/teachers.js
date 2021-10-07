"use strict";
exports.__esModule = true;
exports.createTeacher = void 0;
/**
 POST
 '/teacher'
 */
var createTeacher = function (req, res) {
    try {
        res.statusCode = 400;
        //Funcionalidade aqui
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
};
exports.createTeacher = createTeacher;
