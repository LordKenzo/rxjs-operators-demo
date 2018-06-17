# Guida

https://rxjs-dev.firebaseapp.com/guide/overview
https://rxjs-dev.firebaseapp.com/api

# Branch

Il master è il punto di partenza.
Il typescript-playground mi servirà per fare delle prove in ts e RxJS.
Gli altri branch saranno rispetto alla finalità degli operatori (es. creational) e saranno in vanilla JavaScript (ES6) no Angular!

Per switchare un branch: git checkout <nomebranch>
Per creare un branch: git checkout -b <nomebranch>
Per vedere i branch locali: git branch

# TypeScript

Crea il tsconfig.json:

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "es2015",
      "dom"
    ],
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
    // "experimentalDecorators": true,
    // "emitDecoratorMetadata": true,
  }
}
```

Installa awesome-typescript-loader e typescript e inserisci il resolve in webpack:
resolve: {
    extensions: ['.ts', '.js']
  }

# Range

https://rxjs-dev.firebaseapp.com/api/index/range

Come puoi vedere devi importare 'rxjs'.

