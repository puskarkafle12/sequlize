import { Model, json } from "sequelize";

const Student=require('../models/student')
export const getall=async function  (){
 
    
    const students = await Student.findAll();
    return students
    
    
}

export const getStudentById=async function  (id:Number){
 
  const student = await Student.findByPk(id);


    return student.get()

}
export const deletestudent=async function (id:Number) {
  const result=await Student.destroy({
    where: {
      id: id
    }
  });
  return result
}
export const insertstudent=async function insertStudent(name:String, email:String, password:String) {
  try {
    const student = await Student.create({
      name: name,
      email: email,
      password: password
    });
    console.log(`Student has been added with id: ${student.id}`);
    return 'added';
  } catch (error) {
    return error;
  }
}
export const updateStudentByName = async (id:Number, updates:JSON) => {
  try {
    const student = await Student.update(updates, {
      where: {
        id: id
      }
    });
    console.log(`Updated student with name ${id}`);
    console.log(student)
    return student;
  } catch (error) {
    console.error(error);
  }
};