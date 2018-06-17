// invoca con npm start range
import { range } from 'rxjs';

export function rangeDemo(min = 1, max = 10) {
  console.log('Eseguo la Demo di Range: crea un Observable che emette valori in sequenza specificati da un intervallo.');
  return range(min, max);
}