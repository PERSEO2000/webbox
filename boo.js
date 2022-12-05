var alerta = document.getElementById("mostrar");
var des = document.getElementById("descarga");
var url = document.getElementById("ir");
var des2 = document.getElementById("descarga2");
//var ventana = prompt("escribe tu nombre");
//texto.innerHTML=nombre;
swal({
	title:"INFORMACION",
	text:"Esta app esta en dessaroollo ",
	buttons:false,

})

des.onclick = function(){
	location.href="https://play.google.com/store/apps/details?id=dev.smsoft.tmlitevpn"

}

des2.onclick = function(){
	location.href="https://play.google.com/store/apps/details?id=co.strongteam.amlite"



}





alerta.onclick = function(){
	swal({
		
		title:"CONTINUAR",
		icon:"success",
		buttons: {
			confirm:"Confirm",
		}
	}).then((valor)=>{

		if (valor){
			location.href=url.value;
		}
	})
	
}







