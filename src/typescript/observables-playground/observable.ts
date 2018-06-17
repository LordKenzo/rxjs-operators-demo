interface Persona {
  nome: string;
};

class DataSource {

  constructor(public ondata: Function,
    public oncomplete: Function,
    public onerror: Function,
    private _id:number = 0) {
    let i = 0;
    this._id = setInterval(() => this.emit(i++), Math.floor( Math.random() * 400) + 1);
  }

  emit(n: number) {
    const limit = 100;
    if (this.ondata) {
      this.ondata({nome: 'Lorenzo'});
    }
    if (n === limit) {
      if (this.oncomplete) {
        this.oncomplete();
      }
      this.destroy();
    }
  }

  destroy() {
    console.log('Destroy Me');
    clearInterval(this._id);
  }
}

interface Observable<T> {
  subscription(
    fn:(value:T)=>any,
    err?:(error:string)=>any,
    done?:(msg: string)=>any): Subscription;
}

interface Observer {
  next(value: any): any;
  error(error: string): any;
  complete(msg: string): any;
}

interface Subscription {
  unsubscribe(): void;
}

function createObservable<T>(observer: Observer): Observable<T> {

  return {
    subscription: function(fn:(value:any)=>any, err:(value:any)=>any, done:(value:string) => any) : Subscription {
      let datasource = new DataSource(
        (e:any) => fn(observer.next(e)),
        (err:any) => err(observer.error(err)),
        () => done(observer.complete('done'))
      );
      return {
        unsubscribe: () => {
          datasource.destroy();
        }
      }
    }
  }
}

const observer = {
  next: (value: any) => value,
  error: (err: any) => err,
  complete: () => 'done'
};

const obs = createObservable<Persona>(observer);
const unsubscribe = obs.subscription(
  x => console.log(x),
  err => console.log('Errrore', err),
  (msg) => console.log('Fatto.', msg)
);

setTimeout(() => unsubscribe.unsubscribe(), 1000);
