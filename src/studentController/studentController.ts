import { Model, json } from "sequelize";
import { Json } from "sequelize/types/utils";
const sequelize=require('../database/databaseconfig')


const Student=require('../models/student')

export const getall=async function (){
  try {
  const results = await sequelize.query('SELECT * FROM public.get_all_students()', { type: sequelize.QueryTypes.SELECT });
  const students =results// JSON.stringify(results);
  console.log(students);
  return students;
} catch (error) {
  console.error(error);
}
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
    const query = 'SELECT insert_student(:name, :email, :password)';
    const values = { name: name, email: email , password: password};
  
    await sequelize.query(query, { replacements: values });
return ({ status: "success", message: "student inserted"});
  
  } catch (error:any) {
      return JSON.stringify({ status: "error", message: error.message });
  }
}
export const updateStudentById = async (id:Number, updates:JSON) => {
  try {
    let update;
    if(typeof updates === 'object') update=JSON.stringify(updates);
    const result = await sequelize.query(
        'SELECT update_student(:studentId, :updates)',
        {
            replacements: { studentId: id, updates: update },
            type: sequelize.QueryTypes.SELECT,
        },//
    );
    console.log(result)
    return result;
} catch (error) {
    console.error(error);
    throw error;
}
}




