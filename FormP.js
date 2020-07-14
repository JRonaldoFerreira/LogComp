// Projeto Characteristica;

//Funções e classes auxiliares
var aux = require("./Auxil.js");



//Definição da classe Fórmula;


function FormLog(form1){
    FormLog.prototype.Form = form1;
}

FormLog.prototype ={constructor : FormLog, "Form": undefined,
    get atom() {
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
    }
};
var atm = require("./num_atom");


var newfom = new FormLog(["~", ["p"]]);

console.log(newfom.complex);

var tes = 7;
newfom.complex = tes;
console.log(newfom.complex);