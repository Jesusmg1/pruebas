import { describe, expect,it} from "vitest"
import { sum } from "./sum"

describe('Funcion Suma' , () => {

it('Suma debe ser una función',() => {
    expect(typeof sum).toBe('function');
});

it('Suma debe sumar correctamente', () => {
    expect(sum(3,4)).toBe(9);
});


});