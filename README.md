## Scenario

### Dev environment (OK)

Run `yarn start` and open [http://localhost:3000](http://localhost:3000).

Open the DevTools console to see the following traces:

```
OK  HeaderComponent.js:19
OK  MenuComponent.js:19
OK  MenuComponent.js:28
```

### Prod environment (KO)

Run `yarn build` then `serve -s build`
Open [http://localhost:5000](http://localhost:5000).

Open the DevTools console to see the following traces:

```
OK  HeaderComponent.js:19
OK  MenuComponent.js:19
KO  MenuComponent.js:31
```

## Controllers tree
```
ApplicationController
|
|- HeaderController
   |
   |- MenuController
```
## First analysis

Controllerim uses `constructor.name` as key for controllers.
In this example, after the concatenation, the controllerName value is equal to "t" for every controller.

So in the MenuComponent, the `this.controller.getParentController(HeaderController.name)` is equivalent to  `this.controller.getParentController('t')`.
In the `getControllerFromContext` function of controllerim, this name is used to find the related controller and return the first one which match this name.
In our case, it will be ApplicationController whereas we want to retrieve the HeaderController and so the following verification failed.

```js
if(headerController.iAmHeaderController) {
    console.log('OK');
}
else {
    console.error('KO');
}
```

