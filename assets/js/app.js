var img =document.getElementsByClassName('ver');
var cerrar =document.getElementsByClassName('cerrar');
console.log(img);
console.log(cerrar);

  	var showModal=function(e){
 	 	this.parentNode.style.display="none";
 	}

	for(var i=0;i<cerrar.length;i++){
  		cerrar[i].addEventListener("click",showModal);
  	}
	
	document.getElementById("resta").addEventListener("click",function(){
		for(var i=0;i<img.length;i++){
		img[i].style.display="inline-block"	;
		}
	});
	document.getElementById("origen").addEventListener("click",function(){
		document.getElementById("inicio").classList.toggle('visualizar');
	})
	document.getElementById("exti").addEventListener("click",function(){
		document.getElementById("fin").classList.toggle('visualizar');
	})
