# Cabinet Damien Mukesi & Associés — site vitrine

Site statique (HTML, CSS, JavaScript), sans outil de compilation.

## Structure

```
index.html        Accueil (cabinet, domaines, équipe, contact)
contact.html      Page de contact (coordonnées, rendez-vous, formulaire WhatsApp, carte)
404.html          Page d'erreur (GitHub Pages l'utilise automatiquement)
css/style.css     Feuille de style commune
js/main.js        Menu mobile, année du pied de page, formulaire WhatsApp
images/           Photos optimisées et image de partage (og-image.jpg)
favicon.svg       Icône du site
robots.txt        Consignes pour les moteurs de recherche
sitemap.xml       Plan du site
```

## Tester

Ouvrir `index.html` dans un navigateur (connexion Internet nécessaire pour Google Fonts, la carte et WhatsApp).

## Publier sur GitHub Pages

1. Mettre tout le contenu de ce dossier à la racine du dépôt.
2. Dans **Settings → Pages**, choisir la branche et le dossier `/ (root)`.

## À faire avant la publication

- Remplacer `https://VOTRE-DOMAINE` par l'adresse réelle du site dans `index.html`, `contact.html`, `404.html`, `robots.txt` et `sitemap.xml` (recherche et remplacement dans tous les fichiers).
- Confirmer l'intitulé exact des fonctions des avocats (section Équipe de `index.html`).
- Confirmer l'adresse et le point de la carte Google Maps.
- Ajouter les heures d'ouverture et une adresse e-mail si le cabinet souhaite les afficher.
- Ajouter une page de mentions légales si nécessaire.

## Numéro WhatsApp

Le numéro est écrit dans les liens `wa.me` et `tel:` de chaque page, et dans l'attribut `data-whatsapp` du formulaire de `contact.html`. Pour le changer, remplacer `243829999989` et `+243 829 999 989` dans tous les fichiers.
