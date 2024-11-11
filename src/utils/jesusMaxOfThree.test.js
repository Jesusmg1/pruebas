import { describe, expect,it} from "vitest"
import { jesusMaxOfThree } from "./jesusMaxOfThree"

describe('Funcion jesusMaxOfThree' , () => {

it('El numero c es mayor que a y b',() => {
    expect(jesusMaxOfThree(5,3,7)).toBe(7);
});

it('El numero a es mayor que b y c',() => {
    expect(jesusMaxOfThree(5,3,4)).toBe(5);
});

it('El numero b es mayor que a y c',() => {
    expect(jesusMaxOfThree(5,7,6)).toBe(7);
});

it('El numero c es mayor que b y c',() => {
    expect(jesusMaxOfThree(5,7,9)).toBe(9);
}); 


});