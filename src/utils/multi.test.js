import { describe, expect,it} from "vitest"
import { multi } from "./multi"

describe('Funcion multi' , () => {

it('Multi debe ser una función',() => {
    expect(typeof multi).toBe('function');
});

it('Multi debe multiplicar correctamente dos numeros positivos', () => {
    expect(multi(2,2)).toBe(4);
});

it('Multi debe multiplicar correctamente dos numeros negativos', () => {
    expect(multi(-3,-2)).toBe(6);
});

it('Multi debe multiplicar correctamente un numero positivo y otro negativo', () => {
    expect(multi(2,-1)).toBe(-2);
});


});