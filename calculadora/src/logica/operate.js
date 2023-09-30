import Big from "big.js";

export default function operate(numeroUno, numeroDos, operador) {
    const uno = Big(numeroUno || "0");
    const dos = Big(numeroDos || (operador === "/" || operador === "x" ? "1" : "0"));

    if (operador === "+") return uno.plus(dos).toString();
    
    if (operador === "-") return uno.minus(dos).toString();
    
    if (operador === "*") return uno.times(dos).toString();

    if (operador === "/") {
        if (dos.eq(0)) { // Usar .eq para verificar si dos es igual a 0
            alert("No se puede dividir entre cero");
            return "Error"; // Puedes devolver un valor de error
        } else {
            return uno.div(dos).toString();
        }
    }
}
