import { describe, expect,it} from "vitest"
import { isAmountBounded, value} from "./isAmountBounded"

describe('Funcion isAmountBounded' , () => {

it('El valor esta entre 1 y 1000',() => {
    expect(isAmountBounded(2)).toBe(true);
});

it('La nota esta suspendida',() => {
    expect(isAmountBounded(1001)).toBe(false);
});


});