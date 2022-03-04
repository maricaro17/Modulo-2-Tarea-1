let Salariosemanal = 0;
let horas;
let horasextras;


horas = Number(prompt("Ingrese Horas Trabajadas"));
horasextras = horas - 40;

if (horas > 40) {
    Salariosemanal = ((16 * 40) + (20 * horasextras));
}
else {
    Salariosemanal = (16 * horas)
}

alert("Su Salario es " + Salariosemanal);