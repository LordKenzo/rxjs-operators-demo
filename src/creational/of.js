import { of } from 'rxjs';

export function ofDemo(collection, obj, fn, stringa) {
  console.log('Eseguo la Demo di Of: crea un Observable che emette valori di qualsiasi tipo, a differenza della Range.');
  return of(collection, obj, fn, stringa);
}
