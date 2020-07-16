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
    }g

}
console.log(".");

module.exports = subform_s;