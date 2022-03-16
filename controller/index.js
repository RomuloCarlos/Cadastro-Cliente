const express= require("express");

const app = express();

//esta sempre deve ser a ultima linha quando usamos o express
app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});
