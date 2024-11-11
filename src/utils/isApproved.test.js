import { describe, expect,it} from "vitest"
import { isApproved, vnota } from "./isApproved"

describe('Funcion isApproved' , () => {

it('La nota esta aprobada',() => {
    expect(isApproved(6)).toBe(true);
});

it('La nota esta suspendida',() => {
    expect(isApproved(3)).toBe(false);
});

it('La nota es nula',() => {
    expect(isApproved(-1)).toBe(null);
});


});