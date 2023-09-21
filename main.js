var imagens = ["arvore.jpg.crdownload","arvore1.png","arvore2.JPG","arvore3.jpg"];

var frases = ["As árvores fornecem oxigênio", 
"As árvores fornecem matéria prima", 
"As árvores fornecem frutos", 
"As árvores fornecem sombras"];

var i = 0;

function proximo(){
i++;
document.getElementById("arvore").src=imagens[i];
document.getElementById("mensagem").innerHTML=frases[i];
}