import { rangeDemo, ofDemo, fromDemo } from './creational';

console.log('Esercizi di RxJS 6');
rangeDemo(2, 5)
  .subscribe(e => console.log(`Range ${e}`))

ofDemo([1,2,3,4,5], {nome: 'Lorenzo'}, function cbOfDemo() {
  return 'Hello';
}, 'Ciao')
  .subscribe(item => {
    if ( typeof item === 'function') {
      console.log(item());
    } else {
      console.log(item);
    }
  });

fromDemo()
  .subscribe(e => console.log(e));

