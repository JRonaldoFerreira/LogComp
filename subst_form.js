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




function subst(formA, formT, formP){
    if(equivalen(formT, formP) > 0){

        return formA;
    }
    else if(formP.length === 1 && !(formP[0] instanceof Array) && (formP[0] === formT[0])){
     return formA;
    }
    else if(formP[0] === "~"){
    return ["~"].concat([subst(formA,formT,formP[1])]);

    }
    else if(formP[1] === "V"){
        return [subst(formA, formT, formP[0])].concat(["V"]).concat([subst(formA, formT, formP[2])]);
    }
    else if(formP[1] === "."){
        return [subst(formA, formT, formP[0])].concat(["."]).concat([subst(formA, formT, formP[2])]);
    }
    else if(formP[1] === "->"){
        return [subst(formA, formT, formP[0])].concat(["->"]).concat([subst(formA, formT, formP[2])]);
    }
    else if(formP[1] === "<->"){
        [subst(formA, formT, formP[0])].concat(["<->"]).concat([subst(formA, formT, formP[2])]);
    }
    else{
        return formP;
    }

}



module.exports = subst;
