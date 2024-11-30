import { describe, expect,it} from "vitest"
import { numero } from "./jesus"

describe('Funcion Numero' , () => {

it('Numero debe ser una función',() => {
    expect(typeof numero).toBe('function');
});

it('Numero es un numero positivo y devuelve true', () => {
    expect(numero(3)).toBe(true);
});

it('Numero es un numero negativo y devuelve false', () => {
    expect(numero(-1)).toBe(false);
});

it('Numero si es 0 devuelve nulo', () => {
    expect(numero(0)).toBe(null);
});


});