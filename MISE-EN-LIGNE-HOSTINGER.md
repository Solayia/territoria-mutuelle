# Mémo — Mise en ligne sur Hostinger (territoriamutuelle.com)

Checklist pour passer le site en production et atteindre ~99–100 sur PageSpeed.

## 1. Déposer les fichiers
- Copier **tout le contenu du dépôt** (branche `dev`) dans le dossier `public_html` de l'hébergement Hostinger.
- Vérifier que le fichier **`.htaccess`** est bien présent à la racine de `public_html` (il active la compression, le cache et les redirections). Sur certains explorateurs de fichiers, penser à **afficher les fichiers cachés** (ceux commençant par un point).

## 2. Domaine + HTTPS
- Pointer le domaine **territoriamutuelle.com** vers l'hébergement (dans hPanel → Domaines).
- Activer le **certificat SSL gratuit** (hPanel → Sécurité → SSL). Attendre qu'il soit « actif ».
- Le `.htaccess` force ensuite automatiquement **https://territoriamutuelle.com** (et redirige `www` → sans `www`).

## 3. Ce que le `.htaccess` règle automatiquement (points PageSpeed « rouges »)
- ✅ **Compression Brotli/Gzip** de tous les fichiers texte (HTML, CSS, JS, SVG).
- ✅ **Cache navigateur 1 an** sur les fichiers statiques (CSS, JS, images, polices) → règle le point « Utiliser des durées de mise en cache efficaces ». C'est sûr car nos fichiers sont versionnés (`style.css?v=…`) : un changement de version force le rechargement.
- ✅ **En-têtes de sécurité** (nosniff, X-Frame-Options, Referrer-Policy…).

> À faire côté Hostinger si l'option existe : activer **HTTP/2 ou HTTP/3** (souvent par défaut) et le **cache LiteSpeed** (hPanel) — gain supplémentaire sur le blocage du rendu.

## 4. Après la mise en ligne (référencement)
1. **Google Search Console** (search.google.com/search-console) : ajouter la propriété `territoriamutuelle.com`, vérifier le domaine, puis **soumettre le sitemap** : `https://territoriamutuelle.com/sitemap.xml`.
2. **Bing Webmaster Tools** : idem (importe depuis Search Console en 1 clic).
3. Vérifier l'indexation avec `site:territoriamutuelle.com` sous quelques jours.
4. Relancer **PageSpeed Insights** sur l'URL de prod pour confirmer les scores.

## 5. Backlinks (le facteur décisif pour dépasser territoria.fr)
- Obtenir un lien depuis **groupe-apicil.com** et **territoria.fr** (page partenaires / marque).
- Liens depuis les **associations partenaires** (ANDCDG, SNDGCT, ADRHGCT, ADT-INET, France Urbaine…).
- Créer une **fiche Google Business**, un **LinkedIn TERRITORIA mutuelle**, et à terme une entrée **Wikidata** (les IA s'appuient dessus pour identifier l'entité).

## 6. Entretien
- Publier **1 actualité par semaine** (structure déjà prête dans `articles.js`).
- Re-générer/mettre à jour `sitemap.xml` (dates) à chaque ajout important.
