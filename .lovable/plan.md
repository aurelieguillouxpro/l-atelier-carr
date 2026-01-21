

# Intégration de Google Analytics 4

## Identifiant de mesure
`G-XCX6HL5XNF`

## Modifications à effectuer

### Fichier : `index.html`

Ajouter le script Google Analytics dans le `<head>`, juste après le DNS prefetch existant (ligne 28) :

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XCX6HL5XNF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XCX6HL5XNF');
</script>
```

## Ce qui sera suivi automatiquement

| Donnee                    | Description                              |
|---------------------------|------------------------------------------|
| Pages vues                | Chaque visite de page                    |
| Sessions                  | Durée et nombre de visites               |
| Source du trafic          | D'où viennent vos visiteurs              |
| Appareil                  | Mobile, tablette, ordinateur             |
| Localisation géographique | Pays, ville des visiteurs                |
| Temps passé               | Durée moyenne sur le site                |

## Verification apres deploiement

1. Visitez votre site en production
2. Dans Google Analytics, allez dans **Rapports** puis **Temps reel**
3. Vous devriez voir votre visite apparaitre en direct

## Note technique

L'identifiant GA4 est une cle publique (visible dans le code source de tout site web). Il n'y a aucun risque de securite a l'integrer directement dans le HTML.

