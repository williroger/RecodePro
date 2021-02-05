
import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

//ATENÇÃO MUDAR PARA LOCALHOST SE DEPOIS DO DIA 07/02
const connection = mysql.createConnection({
    host: "recode-do-user-8425925-0.b.db.ondigitalocean.com",
    user: "roger",
    password: "pywitf4hzkamsxov",
    database: "bd_fs",
    port: "25060",
    sslmode: "REQUIRED"
})


server.get("/api-produtos", (req, res) => {
    connection.query("SELECT * FROM tb_produto", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});

// server.post("/usuarios", (req, res) => {
//     const { name } = req.body;
//     connection.query(`INSERT INTO usuarios(name) values ('${name}')`, (error, result) => {
//         if (error) {
//             res.send("Erro ao inserir usuário")
//         } else  {
//             res.status(201).json({
//                 message: "Usuário cadastrado com sucesso"
//             })
//         }
//     })
// })

server.listen(3333);