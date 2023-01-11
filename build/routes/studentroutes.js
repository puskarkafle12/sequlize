"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentController_1 = require("../studentController/studentController");
var Router = require('express').Router();
Router.get('/getall', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, studentController_1.getall)();
    res.json(result);
}));
Router.get('/getstudentbyid/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, studentController_1.getStudentById)(parseInt(req.params.id));
    res.json(result);
}));
Router.get('/deletestudent/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, studentController_1.deletestudent)(parseInt(req.params.id));
    res.json(result);
}));
Router.post('/insertstudent/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const result = yield (0, studentController_1.insertstudent)(name, email, password);
    res.json({
        message: result
    });
}));
Router.post('/updatestudent/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, update } = req.body;
    console.log(id);
    const result = yield (0, studentController_1.updateStudentByName)(id, update);
    res.json({
        message: 'sucessfully added' + result
    });
}));
module.exports = Router;
