# Sonar Dashboard - Démonstration de Composants Réutilisables

## Description

Cette application React.js démontre la **réutilisation de composants** en créant une interface inspirée de SonarQube avec 6 cartes de métriques. Le même composant `MetricCard` est utilisé 6 fois avec des propriétés différentes pour afficher diverses métriques de qualité de code.

## Fonctionnalités

- ✅ **Composant réutilisable** : `MetricCard.jsx` utilisé 6 fois
- ✅ **Interface moderne** : Design inspiré de SonarQube avec gradient violet
- ✅ **Animations** : Transitions fluides et animations d'apparition
- ✅ **Responsive** : Compatible desktop et mobile
- ✅ **Icônes** : Chaque type de métrique a son icône
- ✅ **Barre de progression** : Animation pour la métrique de couverture
- ✅ **Grades** : Système de notation A-D avec couleurs

## Structure du Projet

```
src/
├── components/
│   └── MetricCard.jsx    # Composant réutilisable principal
├── App.jsx               # Application principale
├── App.css               # Styles personnalisés
└── ...
```

## Composant MetricCard

Le composant `MetricCard` accepte les propriétés suivantes :

- `title` : Titre de la métrique
- `value` : Valeur affichée
- `subtitle` : Sous-titre descriptif
- `grade` : Note (A, B, C, D) avec couleur
- `type` : Type pour l'icône et la couleur
- `showProgress` : Afficher une barre de progression
- `progressValue` : Valeur de progression (0-100)
- `index` : Index pour l'animation décalée

## Installation et Utilisation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur** :
   ```
   http://localhost:5173
   ```

## Technologies Utilisées

- **React.js** : Framework JavaScript
- **Vite** : Outil de build rapide
- **Tailwind CSS** : Framework CSS utilitaire
- **shadcn/ui** : Composants UI pré-construits

## Démonstration de Réutilisation

L'application montre 6 instances du composant `MetricCard` :

1. **Security** - 0 open issues (Grade A)
2. **Reliability** - 0 open issues (Grade A)
3. **Maintainability** - 1 open issue (Grade A)
4. **Accepted issues** - 0 valid issues
5. **Coverage** - 97.1% avec barre de progression
6. **Duplications** - 0.0% sur 27 lignes

Chaque carte utilise le même composant mais avec des données et configurations différentes, démontrant parfaitement le principe de réutilisation en React.

## Auteur

Créé comme démonstration de bonnes pratiques React.js pour la réutilisation de composants.

