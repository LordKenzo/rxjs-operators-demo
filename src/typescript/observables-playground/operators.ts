import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

console.log('Prova di Observables inside TypeScript');

// Prova di FETCH di Assets/db.json
// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
const url = "assets/db.json";
fetch(url).then(res => res.json()).then(r => console.log(r));

// http://brianflove.com/2018/03/21/master-rxjs-operators/
interface Persona {
  nome: string;
  cognome: string;
};
interface Persone {
  persone: Persona[];
}
function Persone():Observable<Persone> {
  return from(fetch(url)).pipe(
    switchMap(res => from(res.json()))
  );
}
const idSub = Persone().subscribe(
  r => console.log(r.persone[0].nome),
  err => console.error('Errore!!!', err),
  () => console.log('Flusso Valori Observable Completati')
);

// In getPersone() vorrei provare a non prelevare db.json fino a che non faccio la sbuscribe, per verificare fai NetWork su Google Chrome. Nella funzione precedente ho sempre il prelievo di db.json. Qui no:
function getPersone(): Observable<Persone>{
  return new Observable(observer => {
    fetch(url).then(x => x.json()).then(res => observer.next(res))
  });
}
// Se togli la subscribe allora non prelevo il db.json, come succede con HttpClient.get, fino a che non faccio la subscribe:
const obs = getPersone().subscribe(x => console.log(x.persone[0].nome));
obs.unsubscribe();