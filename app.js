const express = require('express');

let app = express();

app.get('/',(req,res)=>res.send("bom dia bhoder meu amigo estar funciondando"));
app.get ('/contato',(req,res)=>res.send("pagina contato"));
app.listen(3000,()=>
    console.log("servidor rodando")
);