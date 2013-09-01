importScripts('n.js');
self.addEventListener('message', function(e) {
	var f = e.data.f;
	var c = e.data.c;
	var max = e.data.max;
	var ntar = e.data.ntar;
	//var tablas = "";
	for (var i=0;i<ntar;i++){
		//var t = generaTargeta(f,c,max);
		self.postMessage({'tabla' : tabla(generaTargeta(f,c,max)) });
		//tablas+=tabla(t);
	}
	self.close();
	//self.postMessage({'salida' : 'el for va en '+i});
}, false);
