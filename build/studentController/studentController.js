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
exports.updateStudentByName = exports.insertstudent = exports.deletestudent = exports.getStudentById = exports.getall = void 0;
const Student = require('../models/student');
const getall = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const students = yield Student.findAll();
        return students;
    });
};
exports.getall = getall;
const getStudentById = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const student = yield Student.findByPk(id);
        return student.get();
    });
};
exports.getStudentById = getStudentById;
const deletestudent = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield Student.destroy({
            where: {
                id: id
            }
        });
        return result;
    });
};
exports.deletestudent = deletestudent;
const insertstudent = function insertStudent(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const student = yield Student.create({
                name: name,
                email: email,
                password: password
            });
            console.log(`Student has been added with id: ${student.id}`);
            return 'added';
        }
        catch (error) {
            return error;
        }
    });
};
exports.insertstudent = insertstudent;
const updateStudentByName = (name, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield Student.update(updates, {
            where: {
                name: name
            }
        });
        console.log(`Updated student with name ${name}`);
        console.log(student);
        return student;
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateStudentByName = updateStudentByName;
