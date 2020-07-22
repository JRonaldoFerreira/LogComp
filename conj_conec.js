function conjconect(form){
    var conj_conec = [];
    if(form.length === 1 && !(form[0] instanceof Array)){
        return undefined;
    }
 else if(form[0] === "~" && !(form[1] instanceof Array)){
    return conj_conec.push(form.slice(0,1));
   }
 else if(form[1] === "V" && !(form[1] instanceof Array) ){

    conj_conec.push(form.slice(1,2));
    return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
}
    else if(form[1] === "." && !(form[1] instanceof Array) ){

        conj_conec.push(form.slice(1,2));
        return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
    }
    else if(form[1] === "->" && !(form[1] instanceof Array) ){

        conj_conec.push(form.slice(1,2));
        return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
    }
    else if(form[1] === "<->" && !(form[1] instanceof Array) ){

        conj_conec.push(form.slice(1,2));
        return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
    }
 else if(form[0] === "~"){
     conj_conec.push(form.slice(0,1));
     return conj_conec.concat(conjconect(form[1]));
   }
 else if(form[1] === "V"){
     return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
 }
    else if(form[1] === "."){
        return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
    }
    else if(form[1] === "->"){
        return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
    }
    else if(form[1] === "<->"){
        return conj_conec.concat(conjconect(form[0])).concat(conjconect(form[2]));
    }

}



function conjconect_m(form) {
    var conj = conjconect(form);
    var conjcon = [];
    var conjequan = [];
    var cont = 0;
    var quant = 0;

    for (var i = 0; i < conj.length; i++) {
        for (var j = i+1; j<conj.length; j++) {
            if (!(conj[j] === undefined )&& !(conj[i] === undefined) && conj[i][0] === conj[j][0]) {
                delete conj[j];

            }
            if(!(conj[i] === undefined)){
                quant++;
            }
        }
    }
    for(var b in conj){
        if(!(conj[b] === undefined)){
            conjcon[cont] = conj[b][0];
            cont++;
        }
    }
    conjequan[0]= conjcon;
    conjequan[1] = quant;

        return conjequan;

}



module.exports = conjconect_m;