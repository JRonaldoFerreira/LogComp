
function complex_form(form){
    if(form === undefined){
        return 0;
    }
    if((form.length === 1) &&!(form[0] instanceof Array)){
        return 1;
    }
    else if(form[0] === "~"){
        var conj;
        conj = form[1];
        return 1 + complex_form(conj);
    }
    else if(form[1] === "V"){
        var conj1, conj2;
        conj1 = form[0];
        conj2 = form[2];
        return 1 + complex_form(conj1) + complex_form(conj2);
    }
    else if(form[1] === "."){
        var conj11, conj22;
        conj11 = form[0];
        conj22 = form[2];
        return 1 + complex_form(conj11) + complex_form(conj22);
    }
    else if(form[1] === "->"){
        var conj111, conj222;
        conj111 = form[0];
        conj222 = form[2];
        return 1 + complex_form(conj111) + complex_form(conj222);
    }
    else if(form[1]=== "<->"){
        var conj1111, conj2222;
        conj1111 = form[0];
        conj2222 = form[2];
        return 1+ complex_form(conj1111)+ complex_form(conj2222);
    }
    else{

    }

}
var formu = [["x"],".",["~",[["p"], ".", ["z"]]]];
console.log(complex_form(formu));


module.exports = complex_form;



