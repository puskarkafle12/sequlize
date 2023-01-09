"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('T1', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});
// const connectDb=async()=>{
//     console.log('checking database connection..')
//     try{
//     await sequelize.authenticate();
//     console.log('db connection established')
//     }
//     catch(e){
//         console.log(e);
//         process.exit(1);
//     }
// }
module.exports = sequelize;
