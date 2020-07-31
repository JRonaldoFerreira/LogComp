
function tab(form) {
    var conj = [];
    var cont = 1;
    for (var l = 0; l < form.length; l++) { //calculando o número de linhas da tábela verdade
        cont *= 2;
    }
  for(var id = 0; id < form.length;id++){
      conj[id] = [];
  }
    var dd = 1;
    for (var j = 0; j < conj.length; j++) {
        var compp = cont;
        var comp = compp;
        dd *= 2;
        comp = comp / dd;
        var g = 0;
        var z = 0;
        var k ;
        for (k = 0; k < cont;) {
            if (g < comp) {
                for (; g < comp; g++, k++) {
                        conj[j].push(1);
                    z = 0;
                }
            } else {
                if (z < comp) {
                    for (; z < comp; z++, k++) {
                        conj[j].push(0);
                        g = 0;
                    }
                }
            }
        }
    }
    function proval(form){
        var conjmod = [];
        for(var i in conj){
            conjmod[i]= [];
            conjmod[i][0] = form[i];
            conjmod[i][1] = conj[i];
        }
        return conjmod;
    }

    return proval(form);
}

function valoration(form){ //form = fórmula do this.FormP
  var tabform = tab(form.atom);
 var conjatom = form.atom;
 var sec = [];
 var v;
 var secc = [];

 for(var x = 0; x<tabform[0][1].length;x++){
     var valor_v;
     var conjsoluc = [];
     var satto = [];
     var sat = ["Satisfazível"];
     var nosat = ["Não satisfazível"];
     valor_v = ver(form.Form);
     if(valor_v === true){
         if(secc.length === 0){
         secc.push("Satisfazível em:");}
         secc.push(tabform[v][0]);
         secc.push(tabform[v][1][x]);
     }
     sec[x] = valor_v;
     function ver(form){
         if(form.length === 1 && !(form[0] instanceof Array)) {
             for(v = 0; v< conjatom.length;v++){//buscando a proposição atômica no ciclo for
                 if(form[0] === tabform[v][0]){

                     if(tabform[v][1][x] === 1){ // O valor de verdade que será buscado será atualizado na variavel x do ciclo for inicial
                         return true;
                     }
                     else if(tabform[v][1][x] === 0){
                         return false;
                     }
                 }
             }
         }
         else if(form[0] === "~"){
             if((ver(form[1])) === true){
                 return false;
             }
             else {
                 return true;
             }
         }
         else if(form[1] === "V"){
             if((ver(form[0]) === true) || (ver(form[2]) === true)){
                 return true;
             }
             else {
                 return false;
             }
         }
         else if(form[1] === "."){
             if((ver(form[0]) === true) && (ver(form[2]) === true)){
                 return true;
             }
             else {
                 return false;
             }
         }
         else if(form[1] === "->"){
             if(!(ver(form[0]) === true) || (ver(form[2]) === true)){
                 return true;
             }
             else {
                 return false;
             }
         }
         else if(form[1] === "<->"){
             if((!(ver(form[0]) === true) || (ver(form[2]) === true)) && ((!(ver(form[2]) === true) ||ver(form[0]) === true))){
                 return true;
             }
             else{
                 return false;
             }
         }


     }
 }
    satto[0] = sec;
    satto[1] = secc;

    var cont = 0;
        for (var sn in satto[0]) {
            if (satto[0][sn] === false) {
                cont++;
            }
            if (cont === satto[0].length) {
                satto[2] = nosat;
            }
            if(satto[0][sn] === true){
                satto[2] = sat;
                break;
            }
        }

return satto;
}
module.exports = valoration;
var formmm = require("./mainLog");



