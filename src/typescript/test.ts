import { from } from 'rxjs';
import './observables-playground/operators';
import './observables-playground/observable';

// Prova di un Generator con from di RxJS
function* idMaker() {
  var index = 0;
  while(index < 10)
    yield index++;
}

export function testTypeScript() {
  var id = idMaker();
  from(id).subscribe(e => console.log(e));
  console.log('ID', id.next());
}

