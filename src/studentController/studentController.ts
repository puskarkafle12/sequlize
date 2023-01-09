import { Model } from "sequelize";

const Student=require('../models/student')
export const getall=async function  (){
 
    
    const students = await Student.findAll();
    
    students.forEach(student  => {
      console.log(student.get());
    });
}
export const getStudentById=async function  (id:Number){
 
  const student = await Student.findByPk(id);


    console.log(student.get());

}
export const deletestudent=async function (id:Number) {
  await Student.destroy({
    where: {
      id: id
    }
  });
}
export const insertstudent=async function insertStudent(name:String, email:String, password:String) {
  try {
    const student = await Student.create({
      name: name,
      email: email,
      password: password
    });
    console.log(`Student has been added with id: ${student.id}`);
  } catch (error) {
    console.error(error);
  }
}