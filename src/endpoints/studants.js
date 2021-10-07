"use strict";
exports.__esModule = true;
exports.getStudantAgeByStudantId = exports.createStudant = void 0;
/**
 POST
 '/studant'
 */
var createStudant = function (req, res) {
    try {
        res.statusCode = 400;
        //Funcionalidade aqui
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
};
exports.createStudant = createStudant;
/**
 GET
 '/studant/:id'
 */
var getStudantAgeByStudantId = function (req, res) {
    try {
        res.statusCode = 400;
        //Funcionalidade aqui
    }
    catch (error) {
        res.send(error.message || error.sqlMessage);
    }
};
exports.getStudantAgeByStudantId = getStudantAgeByStudantId;
