# Application d'exemple React

L'application sera un PokéDex qui sera relié à la très bonne api __[PokéApi](http://pokeapi.salestock.net/)__.

## Commençons par le début !

React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. 
Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants 
dépendant d'un état et générant une page (ou portion de page) HTML à chaque changement d'état.

Pour ce projet, j'ai utilisé la creation d'application de React à savoir
```
npm install -g create-react-app
create-react-app my-app
```

J'utiliserais pour la suite __[yarn](https://yarnpkg.com/lang/en/)__ qui est pour moi beaucoup plus compréhensible et plus
simple d'utilisation que npm.

## Lancement de l'application

### `yarn start`

Lance l'application en mode développement sur l'url (par défaut) [http://localhost:3000](http://localhost:3000).

### `yarn test`

Lance les tests unitaire de l'application.

### `yarn run build`

Compile l'application pour l'environnement de production.

Le build se charge de créer un nouveau dossier `build` et compilera tous les fichier afin que les performances soit optimales.
Il n'y a cependant pas les outils qui nous sont disponible pour le debug de l'app.