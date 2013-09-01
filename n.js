function repetido(m){
	var s = m.toString();
	for (var i=0;i<m.length;i++){
		for (var j=0;j<m[0].length;j++){
			var num = m[i][j].toString();
			//console.log('revisando '+num);
			if (s.indexOf(num)!=s.lastIndexOf(num)){
			//console.log('repetido');
				return true;
			}
		}
	}
	return false;			
}
function generaTargeta(f,c,max){
	var matriz;
	do{
		matriz =[];
		for (var i=0;i<f;i++){
			var fila = [];
			for (var j=0;j<c;j++){
				var r = Math.floor(Math.random()*max)+1;
				fila.push(r);
			}
			matriz.push(fila);
		}
	}while (repetido(matriz));
		return matriz;
}
function tabla(m){
	var salida="<table>";
	for (var i=0;i<m.length;i++){
		salida+="<tr>";
		for (var j=0;j<m[0].length;j++){
			salida+="<td><span>"+m[i][j]+"</span></td>";
		}
				//salida+="</tr>";
	}
	salida+="</table>";
	return salida;
}