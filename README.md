# BizHack AI - Site Vitrine B2B

Site vitrine pour BizHack AI, agence de prospection B2B automatisée.

## Structure du projet

```
BizHackAI.com/
├── index.html          # Page principale (one-page)
├── book.html           # Page de réservation Calendly
├── legal.html          # Mentions légales
├── privacy.html        # Politique de confidentialité
├── terms.html          # CGV
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── main.js         # JavaScript
├── assets/
│   ├── logo.png        # Logo
│   └── profile.png     # Photo profil
├── sitemap.xml         # Sitemap SEO
├── robots.txt          # Robots.txt
└── README.md           # Ce fichier
```

## Placeholders à remplacer

Avant de mettre en production, remplacez les placeholders suivants :

### Contenu
- `[Nom du Système]` → Nom de votre système de prospection
- `[1 500 - 2 500€]` → Prix du setup
- `[900 - 1 500€]` → Prix mensuel
- `[Secteur]`, `[Type d'agence]`, `[X]` → Données des études de cas
- Screenshots dans la section "Process Proof"

### Pages légales
- Adresse complète de l'entreprise
- SIRET / TVA
- Nom de l'hébergeur
- Ville pour la compétence juridique

### Technique
- Lien Calendly : `https://calendly.com/bizhackfr/30min`
- GA4 ID : `G-XXXXXXXXXX`
- Meta Pixel ID : `XXXXXXXXXXXXXXX`

## Développement local

```bash
# Serveur local
python3 -m http.server 8080

# Ouvrir http://localhost:8080
```

## Performance

Le site est optimisé pour :
- Lighthouse > 90 sur tous les scores
- Mobile-first responsive
- SEO-ready avec schema.org

## Stack technique

- HTML5 sémantique
- CSS3 (variables, flexbox, grid)
- JavaScript vanilla (ES6+)
- Fonts : Inter (Google Fonts)
- Calendly embed

## Tracking (désactivé par défaut)

Les placeholders pour GA4 et Meta Pixel sont présents dans le `<head>` mais commentés. Pour les activer :

1. Remplacez les IDs par vos vraies valeurs
2. Décommentez les blocs de code
3. Testez le consentement cookies

## Déploiement

1. Upload tous les fichiers via FTP/SFTP
2. Ou utilisez le gestionnaire de fichiers Hostinger
3. Vérifiez que `public_html` contient index.html à la racine

## Contact

- Email : contact@bizhackai.com
- Site : https://bizhackai.fr
