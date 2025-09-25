const avanca = document.querySelectorAll ('.btn-proximo');
const reiniciarBtn = document.getEelementoById('bnt-reiniciar');

avanca.forEach(button=> {
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximoPasso ='passo-'+this.getAtrribute('data-proximo');

atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso);

if(proximoElemento){
    proximoElemento.classList.add('ativo');
} else{
    console.error(`Elemento com ID "${proximoPasso}" não encontrado.`)

}
 })
});

//Reinicia o jogo se clicar no botão de reinício
if (reiniciarBtn){
reiniciarBtn.addEventListener('click',() =>{
const atual = document.querySelector('.ativo');
atual.classList.remove('ativo');
document.getElementById('passo-0').classList.add('ativo');
});
}
