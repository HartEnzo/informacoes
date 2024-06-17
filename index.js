let usuario = [{
    nome:"Rogerio",
    email:"rogerio@gmail.com",
    idade: 66
},
{
    nome: "Rodolfo",
    email:"rodolfo@gmail.com",
    idade: 45
},
];
console.log("Digite seu nome:");
process.stdin.on("data", function(data){
    let nome = data.toString().trim();
    let encontrado;
    for (let i = 0; i < usuario.length; i++) {
        if (usuario[i].nome == nome) {
            encontrado = usuario[i];
        }
    }
   if (encontrado){
    console.log(encontrado);
    } else {
        console.log("Nome não encontrado")
    }
});
