

function Comlexform(formu) {


    function num_a(form2){
        if(form2 === undefined){ //caso seja formula vazia;
            return undefined;
        }
        if(form2.length === 1 && !(form2[0] instanceof Array)) {
            var conjunto = [];
            var gua = form2;
            conjunto.push(form2[0].slice(0));
            return conjunto;
        }

        else {
            if (form2[0] === "~") {
                return num_a(form2.slice(1, 2));
            }
            else if (form2[1] === ".") {
                var subform1 = [];
                var subform2 = [];
                subform1 = num_a(form2.slice(0, 1));
                subform2 = num_a(form2.slice(2));
                var formul = subform1.concat(subform2);
                return formul;

            } else if (form2[1] === "V") {
                var subform1 = [];
                var subform2 = [];
                subform1 = num_a(form2.slice(0, 1));
                subform2 = num_a(form2.slice(2));
                var formul = subform1.concat(subform2);
                return formul;

            } else if (form2[1] === "->") {
                var subform1 = [];
                var subform2 = [];
                subform1 = num_a(form2.slice(0, 1));
                subform2 = num_a(form2.slice(2));
                var formul = subform1.concat(subform2);
                return formul;

            } else if (form2[1] === "<->") {
                var subform1 = [];
                var subform2 = [];
                subform1 = num_a(form2.slice(0, 1));
                subform2 = num_a(form2.slice(2));
                var formul = subform1.concat(subform2);
                return formul;

            }
            else if(form2[0] instanceof Array){
                return num_a(form2[0]);
            }
        }

    }
    var control = num_a(formu);
    for (var i = 0; i < control.length; i++) {
        for (var j = 1; j<control.length&& j>i; j++) {
            if (control[i] === control[j]) {
                delete control[j];
            }
        }
    }
   return control;
}


module.exports = Comlexform;


