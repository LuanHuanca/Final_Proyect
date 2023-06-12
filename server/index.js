// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// const cors = require ("cors");

// app.use(cors());
// app.use(express.json())

// //Coneccion a la base de datos
// const database = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"db_chifa"
// });


// app.post("/register",(request,res)=>{
//     const ci = request.body.ci;
//     const username = request.body.username;
//     const password = request.body.password;
//     const email = request.body.email;


//     database.query('INSERT INTO cliente (id_ci_cliente,username,contrasena,email) VALUES (?,?,?,?)', [ci,username,password,email],
//     (error,result)=>{
//         if(error){
//             console.log(error);
//         }else{
//             res.send("Cliente Registrado con exito!!!");
//         }
//     }
//     );
// });

// app.listen(5173,()=>{
//     console.log("Corriendo en el puerto 5173")
// })