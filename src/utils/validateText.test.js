import { describe, expect,it} from "vitest"
import { validateText } from "./validateText"

describe('Funcion validar texto' , () => {

    it('validar texto debe estar entre 6 y 10 caracteres',() => {
        expect(validateText("holaaa")).toBe(true);
    });

    it('validar texto no esta entre 6 y 10 caracteres',() => {
        expect(validateText("pe")).toBe(false);
    });
   
    
    });