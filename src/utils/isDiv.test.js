import { describe, expect,it} from "vitest"
import { div } from "./div"

describe('Funcion División' , () => {

it('División debe ser una función',() => {
    expect(typeof div).toBe('function');
});

it('Division de dos numeros positivos enteros debe dar numero positivo', () => {
    expect(div(4,2)).toBe(2);
});

it('Division de dos numeros negativos enteros debe dar numero positivo', () => {
    expect(div(-4,-2)).toBe(2);
});

it('Division de un numero positivo entero y de un numero negativo entero debe dar numero negativo', () => {
    expect(div(6,-2)).toBe(-3);
});


});