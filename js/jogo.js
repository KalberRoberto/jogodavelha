const jogador1 = "x"
const jogador2 = "o";
var jogada = jogador1;
var fimDeJogo = false;
var contador=0;

vezDoJogador();
preencher();


function vezDoJogador(){
	if (fimDeJogo){return;}
	if(jogada==jogador1){
		var j = document.querySelectorAll("div.vez img")[0];
        j.setAttribute("src", "imagens/c.jpg");
	}else{
		var j = document.querySelectorAll("div.vez img")[0];
        j.setAttribute("src", "imagens/x.jpg");
	}
}

function preencher(){
	 var campos = document.getElementsByClassName("c");
	 for (var i = 0; i < campos.length; i++) {
	 	campos[i].addEventListener("click", function(){
			if (fimDeJogo){return;}

			if (this.getElementsByTagName("img").length==0){
				if (jogada == jogador1){
					this.innerHTML= "<img src = 'imagens/x.jpg' border='0'>";
					this.setAttribute("jogada",jogador1);
					jogada = jogador2;
				}else{
					this.innerHTML="<img src = 'imagens/c.jpg' border='0'>";
					this.setAttribute("jogada",jogador2);
					jogada = jogador1;
				}
				vezDoJogador();
				vitoria();
			}
			
		});
	 	}

}

async function vitoria(){
	var ganhador ="";
	var j = {
		c1:'',
		c2:'',
		c3:'',
		c4:'',
		c5:'',
		c6:'',
		c7:'',
		c8:'',
		c9:'',
		};
	
	for (i in j) {
		j[i] = document.getElementById(i).getAttribute("jogada");
	}

	 
	if ((( j.c1 == j.c2 && j.c2 == j.c3) || (j.c1 == j.c4  &&  j.c4 == j.c7) || (j.c1 == j.c5 && j.c5 == j.c9)) && j.c1!=""){
		ganhador=j.c1 ;
	}else if(((j.c5==j.c7 && j.c5 == j.c3) || (j.c2==j.c5 && j.c5 == j.c8) || (j.c4==j.c5 && j.c5 == j.c6)) &&j.c5!=""){
		ganhador=j.c5;
	}else if(((j.c7==j.c8 && j.c8==j.c9) || (j.c9==j.c6 && j.c6 == j.c3)) && j.c9!=""){
		ganhador=j.c9;
	}else if (j.c1!="" && j.c2!="" && j.c3!="" && j.c4!="" && j.c5!="" && j.c6!="" && j.c7!="" && j.c8!="" &&j.c9!=""){
		alert("JOGO EMPATOU");
	}
	if(ganhador!= ""){
		fimDeJogo=true;
		alert("O ganhador foi:>>>" + ganhador +"<<<")
	}
}
 
 function reiniciar() {
    fimDeJogo = false;
    jogada = jogador1;
   	vezDoJogador();
     var campos = document.getElementsByClassName("c");
	 for (var i = 0; i < campos.length; i++) {
        campos[i].setAttribute("jogada", "");
        campos[i].innerHTML= "";			
    }
   }
