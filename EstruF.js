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
    },
    get num_conec(){
    var conj_c = [];
    },
    get valoration(){
     varo = require("./sat");
    var_atom = varo(this);
    valora = var_atom[0];
    return valora;
    },
    set valoration(n){
    varo = require("./sat");
    valora =var_atom[0];
    },
    get sat(){
    satt = require("./sat");
    test_s = satt(this);
    return test_s[2]
    },
    set sat(n){
    test_s = satt(this);
    },
    get connect(){
    conjcon = require("./conj_conec");
    conects = conjcon(this.Form);
    return conects;
    },
    set connect(n){
    conects = conjcon(this.Form);
    },
    get numbconnect(){
    numbercon = this.connect.length;
    return numbercon;
    },
    set numbconnect(n){
    numbercon = this.connect.length;
    }
};
var atm = require("./num_atom");

var myform = new FormLog(["~", ["p"]]);
console.log(myform.sat);
console.log(myform.valoration);

console.log(myform.connect);
console.log(myform.numbconnect);

myform.numbconnect = 41;
console.log(myform.numbconnect);

module.exports = FormLog;