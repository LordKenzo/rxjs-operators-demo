# Guida

https://rxjs-dev.firebaseapp.com/guide/overview
https://rxjs-dev.firebaseapp.com/api

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

