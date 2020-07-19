

function equivalen(subA, subB) {

     if ((subA.length === 1) && !(subA[0] instanceof Array)&&(subB.length === 1) && !(subB[0] instanceof Array)) {
        if(subA[0] === subB[0]){
            return 1;
        }
        else{
            return 0;
        }
    }
    else if(subA[0] === "~" && !(subB === undefined) && (subB[0]=== "~")){
        return equivalen(subA[1], subB[1]);
    }
    else if(subA[1] === "V" && !(subB === undefined) && subB[1] === "V"){
        return equivalen(subA[0], subB[0]) + equivalen(subA[2],subB[2]);
    }
    else if(subA[1] === "." && !(subB === undefined) && subB[1] === "."){
        return equivalen(subA[0], subB[0]) + equivalen(subA[2],subB[2]);
    }
    else if(subA[1] === "->" && subB[1] === "->"){
        return equivalen(subA[0], subB[0]) + equivalen(subA[2],subB[2]);
    }
    else if(subA[1] === "<->" && subB[1] === "<->"){
        return equivalen(subA[0], subB[0]) + equivalen(subA[2],subB[2]);
    }
    else{
        return 0;
    }

}

function sub_del(form){ //deletando subformulas equivalentes


    for(var i = 0; i<form.length;i++) {
        for(var j = 1; j< form.length;j++) {

            if(form[i] === undefined){
                continue;
            }
            else if (!(i === j)&&(form[i][0] === "~") && (equivalen(form[i], form[j]) === 1)) {

                delete form[j]
            } else if (!(i === j)&&(form[i][1] === "V" || form[i][1] === "." || form[i][1] === "->" || form[i][1] === "<->") && equivalen(form[i], form[j]) === 2) {

                delete form[j];
            }
            else if( !(i === j) &&(!(form[i] === undefined))&&(!(form[j] === undefined)) &&(!(form[i][0] instanceof Array)) && (!(form[j][0] instanceof Array)) && (equivalen(form[i], form[j]) === 1)){

                delete form[j];
            }
        }
    }

    return form;

}

function subform_s(form) { //com repetições

    if ((form.length === 1) && !(form[0] instanceof Array)) {
        return [form[0]];
    } else if (form[0] === "~") {
        return [form].concat(subform_s(form[1]));
    } else if (form[1] === "V") {
        return [form].concat(subform_s(form[0]).concat(subform_s(form[2])));
    } else if (form[1] === ".") {
        return [form].concat(subform_s(form[0]).concat(subform_s(form[2])));
    } else if (form[1] === "->") {
        return [form].concat(subform_s(form[0]).concat(subform_s(form[2])));
    } else if (form[1] === "<->") {
        return [form].concat(subform_s(form[0]).concat(subform_s(form[2])));
    }

}

function subform(form) {
    var subforms_s = subform_s(form);
    var subforms_t = sub_del(subforms_s);
    var form2 = subforms_t;
    var conj = [];
    var cont = 0;
    for (var m = 0; m < form2.length; m++) {
        if (form2[m] === undefined) {
            continue;
        } else {
            conj[cont] = form2[m];
            cont++;
        }
    }
    return conj;
}



module.exports = subform;