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
exports.updateStudentById = exports.insertstudent = exports.deletestudent = exports.getStudentById = exports.getall = void 0;
const sequelize = require('../database/databaseconfig');
const Student = require('../models/student');
const getall = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield sequelize.query('SELECT * FROM public.get_all_students()', { type: sequelize.QueryTypes.SELECT });
            const students = results; // JSON.stringify(results);
            console.log(students);
            return students;
        }
        catch (error) {
            console.error(error);
        }
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
            const query = 'SELECT insert_student(:name, :email, :password)';
            const values = { name: name, email: email, password: password };
            yield sequelize.query(query, { replacements: values });
            return ({ status: "success", message: "student inserted" });
        }
        catch (error) {
            return JSON.stringify({ status: "error", message: error.message });
        }
    });
};
exports.insertstudent = insertstudent;
const updateStudentById = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let update;
        if (typeof updates === 'object')
            update = JSON.stringify(updates);
        const result = yield sequelize.query('SELECT update_student(:studentId, :updates)', {
            replacements: { studentId: id, updates: update },
            type: sequelize.QueryTypes.SELECT,
        });
        console.log(result);
        return result;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.updateStudentById = updateStudentById;
