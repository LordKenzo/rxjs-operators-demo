import { from } from 'rxjs';

export function fromDemo() {
  console.log('Eseguo la Demo di From: converte una promise, un iterabile o un array in un Observable.');
  return from([1,2,3]);
}
