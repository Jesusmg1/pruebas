export function isAmountBounded(value) {
    const valor = value;
 
    if (valor >= 1 && valor <= 1000) {
      return true
    } else {
      if (valor < 1 || valor > 1000) {
        return false
      } 
    }
  }