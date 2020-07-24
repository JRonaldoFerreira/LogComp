var mods = require("./subformMod");


function subst(formA, formT, formP){
    if(mods.equivalen(formT, formP) > 0){

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
