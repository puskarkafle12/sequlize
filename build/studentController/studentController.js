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
exports.deletestudent = exports.getStudentById = exports.updateStudentById = exports.insertstudent = exports.getall = void 0;
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
// CREATE OR REPLACE FUNCTION get_all_students()
// RETURNS SETOF students
// AS $$
// BEGIN
// RETURN QUERY SELECT * FROM students;
// END;
// $$ LANGUAGE plpgsql;
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
// CREATE OR REPLACE FUNCTION insert_student(name character varying, email character varying, password character varying)
// RETURNS VOID AS $$
// BEGIN
// INSERT INTO student (name, email, password) VALUES (name, email, password);
// END;
// $$ LANGUAGE plpgsql;
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
// CREATE OR REPLACE FUNCTION update_student(IN student_id INTEGER, IN updates JSON)
// RETURNS TEXT AS $$
// BEGIN
// UPDATE student SET
// name = updates->>'name',
// email = updates->>'email',
// password = updates->>'password'
// WHERE id = student_id;
// IF FOUND THEN
// RETURN 'Successfully updated student';
// ELSE
// RETURN 'No student found with that id';
// END IF;
// END;
// $$ LANGUAGE plpgsql;
//sequilize
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
