// lenght utilizado para contar caracteris
//replace é utilizado para substituir caraacteris
//replace all é utizidado para substituir todos os caracteris 
//const nome = "daniel";
//console.log(nome.replace("a","i"));
//const frase = "o antonio foi na padaria";
// conosole.log(nome.replaceAll("antonio","i"));
// /n nova linha 
// toUppercase letras minusculas
// toLowercase letrs maisculas
function imprimiringrdientes(porcoes) {
    return`${porcoes*100} ovos\n`;
}


function fazereceita(){
const receita= `ola meu nome é daniel e eu gosto muito de jogar video game e futebol`;

let receitaNov =receita.replaceAll("a","u");
receitaNov = receitaNov.replaceAll("e","u");
return receitaNov;
}

const imprimireceita= imprimiringrdientes(10);
const dj= fazereceita();

let final = imprimireceita + dj;
console.log(final)
