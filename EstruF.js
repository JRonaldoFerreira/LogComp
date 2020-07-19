// Projeto Characteristica;

//Funções e classes auxiliares
var aux = require("./Auxil.js");



//Definição da classe Fórmula;


function FormLog(form1){
    FormLog.prototype.Form = form1;
}

FormLog.prototype ={constructor : FormLog, "Form": undefined,
    get atom() { // A propriedade conjunto de atômicas é privada e não pode ser alterada;
        var atm = require("./num_atom");
        conjatm = atm(this.Form);
    return conjatm;
    },
    set atom(n){
        var atm = require("./num_atom");
        var Formcop = this.Form.slice(0,this.Form.length -1);
    conjatm = atm(tes);

    },  "print":
function printt(){
    for(var i = 0; i<this.Form;i++){
        var str = "";
        str = str + this.Form[i];
    }

}, get complex(){
    var com = require("./complex");
    compl = com(this.Form);
    return compl;
    },
    set complex(n){ //A propriedade complexidade da fórmula é privada e não pode ser alterada;
    var com = require("./complex");
    compl = com(this.Form);
    return compl;
    },
    get subform(){ // A propriedade número de subformulas é privada e não pode ser alterada;
    us = require("./subformMod");
    sub = us(this.Form);
    return sub;
    }, set subform(n){
  sub = us(this.Form);
  return sub;
    }, get num_atom(){ // A propriedade número de atômicas é privada e não pode ser alterada;
    numm = this.atom.length;
    return numm;
    },
    set num_atom(n){
    num = this.atom.length;
    }
};
var atm = require("./num_atom");

// teste

var newform2 = new FormLog([["~",["p"]], "V",["~",["p"]]]);
console.log(newform2.subform);