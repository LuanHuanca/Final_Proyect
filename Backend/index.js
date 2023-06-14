const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require ("cors");

app.use(cors());
app.use(express.json());

//Coneccion a la base de datos
const database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_chifa"
});

//Registrar usuarios en la base de datos
app.post('/register',(req,res)=>{
    const sql = "INSERT INTO cliente (`id_ci_cliente`,`username`,`contrasena`,`email`) VALUES (?)";
    const values = [
        req.body.ci,
        req.body.username,
        req.body.password,
        req.body.email
    ]
    database.query(sql,[values],(err,data) =>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
});

//Registrar usuarios en la base de datos
app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM cliente WHERE `id_ci_cliente` = ? AND `contrasena` = ?";
    database.query(sql,[req.body.ci,req.body.password],(err,data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0 ){
            return res.json("Success");
        }else{
            return res.json("Faile");
        }
    })
});

//Traer los datos de la tabla menu
app.get("/",(request,res)=>{

    database.query('SELECT * FROM menu',
    (error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    }
    );
});

app.listen(5172,()=>{
    console.log("Corriendo en el puerto 5173")
})