function sup(x, y){
    if(x> y){
        return x;
    }
    else if(y>x){
        return y;
    }
    else{
        return x;
    }
}
function grau(form){
    if((form.length === 1) &&!(form[0] instanceof Array)){
        return 0;
    }
    else if(form[0] === "~"){
        return grau(form[1]) + 1;
    }
    else if(form[1] === "V"){

        return 1+ sup(grau(form[0]), grau(form[2]));
    }
    else if(form[1] === "."){
        return 1+ sup(grau(form[0]), grau(form[2]));
    }
    else if(form[1] === "->"){
        return 1+ cota(grau(form[0]), grau(form[2]));
    }
    else if(form[1] === "<->"){
        return 1+ cota(grau(form[0]), grau(form[2]));
    }


}

module.exports = grau;