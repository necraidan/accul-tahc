# Projet de chat

## Présentation

L'objectif est de réaliser un chat mono-fenêtre en angular et sans code serveur.
L'application est déployée sur vercel à chaque commit : https://accul-tahc.vercel.app

## Choix technique

### Outils de documentation

L'instalation de compodoc permet de générer une documentation à partir du code.

`npm run compodoc:build-and-serve`

![doc_coverage](https://user-images.githubusercontent.com/1424833/196545904-07250950-578f-41d5-9ea8-54fe1da68918.png)

### Tests unitaires

Une petite batterie de tests unitaires sont mis en place avec karma.

`npm run test`

### EsLint et Prettier

Eslint un linter, il marche de paire avec Prettier.
Eslint dicte les règles et Prettier formate le code.

### HMR

Mise en place de la commande Hot Module Replacement pour le développement local.

### Arborescence

J'ai pris le choix de segmenter : les features d'un côté et les composants réutilisables/models/constantes de l'autres.

L'idée est de prévoir une refacto simple et rapide si on doit faire grandir le projet.

### Modules et lazy loading

Dans une optique de performance, j'ai appliqué un _lazy loading_ à deux niveaux :

- de type composant standalone : le home component utilise le lazy loading de composant d'Angular 14 et donne accès à la feature _chat_
- de type module : la feature chat est _lazy loadée_.

  On chargera cette feature uniquement en navigant sur la route la concernant.

### SharedModule et stratégie de smart/dumb components

Le choix d'un _sharedModule_ permet de pouvoir avoir un ensemble de composants (ainsi que de pipes et directives même si ici, cela nous concerne pas), partageable et incluable dans l'ensemble des features/modules demandés.

Les composants sont de type smart/dumb : leur perimètre fonctionnel est petit et très précis, l'intelligence est délégué au composant de feature qui les intègre et ochestre le tout.

### StateService et injection

Le choix d'un service d'état pour gérer les messages permet d'exploiter deux concepts utiles dans notre application :

- le _singleton_ : le service d'état n'existe qu'en une seule instance et est injecté à partir du chatModule

  `providedIn: 'root'` indique qu'il sera injecté par l'injecteur root de notre application.

  Notre _ChatModule_ étant _lazy loadé_ et notre service uniquement utilisé dans celui-ci, il sera alors injecté et inclus dans le bundle de _ChatModule_

- le _behaviorSubject_ : c'est un subject.

  Un subject est à la fois observateur et observable.

  Un behaviorSubject aura en plus un état initial.

  Quand on s'y abonne, on recoit la dernière valeur qui passée dans le flux.

  Grâce à lui, nous pouvons gérer l'état des messages de chat.

### Localstorage

Le _behaviorSubject_ est quand même limité, les données ne sont pas persistées.
Interagir avec le localstorage permet de pouvoir retrouver la liste des messages précédement échanger en les enregistrant dans celui-ci.

### Barrels et index.ts

Les barrels permettent un regroupement et une exposition des éléments sur des points uniques.

### PWA

J'ai ajouté la possibilité à l'application d'être instalable par l'intermédiaire du navigateur (chrome et edge en desktop / chrome/safari/firefox en mobile).
L'application peut également fonctionner en hors ligne quand elle a été lancé au moins une fois (ou installée)

## Perspective d'évolutions

### i18n

L'application peut-être amener à s'internationaliser.
Si c'est le cas, il faudra utiliser un système de fichier de langue comme i18n.
https://angular.io/guide/i18n-overview

### Avoir un serveur pour un véritable échange de messages

Le service d'état devra se brancher à un service de facade qui ira communiquer avec le back pour la gestion des messages.

Le localstorage n'aura plus d'utilité en l'état.

### Modifier/editer et supprimer un message

Les fonctionnalités sont présentes dans le service d'état mais non implémententées dans l'UI.

### ScrollBottom : utiliser un mutationObserver ?

Lors d'instructions très proche dans le temps, on souhaite pouvoir attendre que le DOM est fini de réagir.

Une solution pour pouvoir faire passer une fonction au cycle de détection suivant est l'utilisation d'un _setTimeout_.

ScrollBottom vient regarder si nous sommes en fin de scroll après avoir reçu une nouvelle références de la liste des messages et donc fait muter le DOM.

J'ai découvert l'existence du _mutationObserver_, pour pouvoir réagir en fonction de l'ajout de noeud HTML.
Cette une solution a creuser (je ne connais pas l'impact en performance de ce type d'observer)

https://developer.mozilla.org/fr/docs/Web/API/MutationObserver
