This is a demo project to show it is possible to merge several Tanstack Router route trees together while also keeping type safety in-tact.

There are 3 packages in this repo:
- app
- child-a
- child-b

`app` defines the "root" route that will be used at runtime. `child-a` and `child-b` both define and export their own route trees. These trees are then "merged" in `packages/app/src/routeTree.ts` and in `packages/app/src/router.tsx`.


## Install all deps

```
$ pnpm i
```


## Build all packages

```
$ npm run build -w child-a && npm run build -w child-b
```

## Open packages/app/src/router.tsx

Observe:

- All "child" route types merged in "app/src/routes/routeTree.ts"
- All "child" route runtime definitions merged in "app/src/router.tsx"
- There should be a single type error in "app/src/router.tsx" to demonstrate that type checking is working and not being overly permissive.


Notes:
- "child-b" defines search params. The typesafety applies to "app/src/router.tsx"
- Nothing here "runs". This is just to demonstrate how it is possible to merge several route trees together
- This absolutely does not scale and I think the only way this would even be feasible would be to augment the compiler itself to understand how to do this.

## Run typechecker

```
$ npm run types -w app
```