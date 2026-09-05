# Générateur de QR Code en JavaScript

Mini-projet interactif développé pour apprendre à manipuler le DOM en JavaScript natif, intégrer une bibliothèque externe côté navigateur et maîtriser la gestion de l'asynchrone via des fonctions de rappel (*callbacks*).

---

## 🎯 Objectifs pédagogiques

Ce projet a permis de comprendre et de mettre en pratique :
- **La différence d'environnement (Node.js vs Navigateur)** : comprendre pourquoi `require()` et les `node_modules` ne s'exécutent pas nativement dans un navigateur sans bundler, et apprendre à intégrer une bibliothèque via un CDN.
- **La manipulation du DOM** :
  - Sélection d'éléments avec `document.getElementById()`.
  - Écoute d'événements avec `addEventListener('click', ...)`.
  - Lecture dynamique de la saisie utilisateur avec `.value`.
  - Injection sécurisée et dynamique de balises HTML avec `innerHTML` et les littéraux de gabarits (*template literals* avec backticks).
- **L'asynchronisme en JavaScript** :
  - Utilisation du pattern *error-first callback* `(err, url) => { ... }`.
  - Compréhension du cycle d'exécution asynchrone et de la portée des variables (*scope*).
  - Manipulation des images sous forme de chaînes de données **Data URL** (Base64).
- **Le CSS moderne & 3D** :
  - Mise en place d'une interface cyberpunk / glassmorphism.
  - Gestion de la profondeur avec `perspective`, `transform-style: preserve-3d` et `translateZ`.

---

## 🛠️ Stack technique

- **HTML5** : structure minimale et sémantique.
- **CSS3** : interface futuriste en perspective 3D, néons et glassmorphism.
- **JavaScript (Vanilla / ES6+)** : logique de traitement et gestion des événements.
- **Bibliothèque QRCode** : script pré-compilé pour le navigateur (`qrcode@1.4.4`).

---

## 🚀 Utilisation locale

1. Cloner ou télécharger les fichiers du projet (`index.html`, `style.css`, `lecon1.js`).
2. Ouvrir le fichier `index.html` directement dans un navigateur (ou via l'extension **Live Server** sur VS Code).
3. Saisir une URL ou un texte dans le champ de saisie.
4. Cliquer sur **Générer** pour afficher instantanément le QR code scannable.
