const express= require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}))

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/postAluno",(req,res)=>{
    nome = nome.push(req.body.nome);
    primeiraNota = primeiraNota.push(req.body.primeira);
    segundaNota = segundanota.push(req.body.segunda);
    notaFinal= notaFinal.push((req.body.primeira + req.body.segunda)/2);
    frequencia= frequencia.push(req.body.frequencia);

    let alunos =[];
    alunos = alunos.push(aluno);
    res.send(for(let i=0; i<nome.length;i++){console.log(nome[i])});
    /*res.render("index.ejs",alunos={
        nome : nome,
        primeira : primeiraNota,
        segunda : segundaNota,
        final : notaFinal,
        frequencia : frequencia
    });*/    
});

app.listen(4000,()=>{console.log("running")});