
function extend(o, p) {
    for(prop in p) { // Para todas as props em p.
        o[prop] = p[prop]; // Adiciona a propriedade em o.
    }
    return o;
}

function defclass(construtora, camps, methods, statics){
    if(camps) extend(construtora.prototype, camps);
    if(methods) extend(construtora.prototype, methods);
    if(statics) extend(construtora, statics);
    return construtora;
}


var inherit = function(p) {
    if (p == null) throw TypeError(); // p deve ser um objeto não null
    if (Object.create) // Se Object.create() está definida...
        return Object.create(p); // então basta usá-la.
    var t = typeof p; // Caso contrário, faz mais alguma verificação de
// tipo
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Define uma função construtora fictícia.
    f.prototype = p; // Configura sua propriedade prototype como p.
    return new f(); // Usa f() para criar um "herdeiro" de p.
};



module.exports = defclass;