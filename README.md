projectName

Projet Angular réalisé dans le cadre de l'apprentissage du framework : découpage en composants, Data Binding et Event Binding.

Prérequis
Node.js (version LTS)
Angular CLI : npm install -g @angular/cli
Installation et lancement
bash
npm install
ng serve

L'application est accessible sur http://localhost:4200/.

Structure du projet
src/app/
├── pages/
│   ├── home/      # Page d'accueil
│   └── list/      # Page liste
└── shearedcomponent/
    ├── header/    # En-tête partagé
    └── footer/    # Pied de page partagé
app : composant racine, il assemble le header, le contenu de la page et le footer.
pages : composants correspondant aux pages de l'application.
shearedcomponent : composants réutilisables communs à toutes les pages.
Data Binding

Le Data Binding assure la communication entre la classe TypeScript du composant et son template HTML.

Type	Syntaxe	Sens	Exemple
Interpolation	{{ }}	Composant → Vue	<h1>{{ title }}</h1>
Property binding	[propriété]	Composant → Vue	<img [src]="imageUrl">
Event binding	(événement)	Vue → Composant	<button (click)="onClick()">
Two-way binding	[(ngModel)]	Composant ↔ Vue	<input [(ngModel)]="name">
Interpolation
ts
title = 'Mon application';
html
<h1>{{ title }}</h1>
Property binding
html
<img [src]="imageUrl" [alt]="title">
<button [disabled]="isDisabled">Valider</button>
Event Binding

L'Event Binding permet de réagir aux actions de l'utilisateur (clic, saisie, survol, etc.) en appelant une méthode du composant.

html
<button (click)="onClick()">Cliquer</button>
<input (input)="onInput($event)">
ts
onClick() {
  console.log('Bouton cliqué');
}

onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  console.log(value);
}
Two-way binding

Combine property binding et event binding (nécessite FormsModule dans les imports du composant) :

html
<input [(ngModel)]="name">
<p>Bonjour {{ name }}</p>
Commandes utiles
Commande	Description
ng serve	Lance le serveur de développement
ng generate component nom	Génère un nouveau composant
ng build	Compile le projet pour la production
ng test	Lance les tests unitaires
Auteur

Ranim Ouedrani, ESPRIT School of Engineering