const Student=require('../models/student')
async function getall (){
 
    
    const students = await Student.findAll();
    
    students.forEach(student  => {
      console.log(student.get());
    });
}
module.exports=getall