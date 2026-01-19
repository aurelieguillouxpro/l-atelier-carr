# Configuration de l'envoi d'emails pour le formulaire de contact

Le formulaire de contact utilise **Resend** pour envoyer les emails à `aurelie.guilloux.pro@gmail.com`.

## Configuration requise

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour inclus)
3. Vérifiez votre email

### 2. Configurer un domaine (Recommandé)

Pour un usage professionnel, il est recommandé de configurer votre propre domaine :

1. Dans le dashboard Resend, allez dans **Domains**
2. Ajoutez votre domaine `carrementabstrait.com`
3. Configurez les enregistrements DNS suivants chez votre hébergeur :
   - SPF (TXT)
   - DKIM (TXT)
   - DMARC (TXT)
4. Attendez la vérification (quelques minutes à quelques heures)

**Note :** Si vous n'avez pas de domaine configuré, Resend utilisera `onboarding@resend.dev` comme expéditeur, mais les emails peuvent finir dans les spams.

### 3. Obtenir la clé API Resend

1. Dans le dashboard Resend, allez dans **API Keys**
2. Créez une nouvelle clé API
3. Copiez la clé (elle commence par `re_`)

### 4. Configurer la clé dans Supabase

La clé API Resend doit être ajoutée comme secret dans Supabase :

#### Option A : Via le Dashboard Supabase (Recommandé)

1. Connectez-vous à [app.supabase.com](https://app.supabase.com)
2. Sélectionnez votre projet
3. Allez dans **Edge Functions** (dans le menu latéral)
4. Cliquez sur l'onglet **Secrets**
5. Ajoutez un nouveau secret :
   - **Name:** `RESEND_API_KEY`
   - **Value:** Votre clé API Resend (exemple : `re_123456789`)
6. Cliquez sur **Save**

#### Option B : Via la CLI Supabase

```bash
# Installer la CLI Supabase si nécessaire
npm install -g supabase

# Se connecter
supabase login

# Lier votre projet
supabase link --project-ref your-project-ref

# Ajouter le secret
supabase secrets set RESEND_API_KEY=re_your_api_key
```

### 5. Redéployer la fonction (si nécessaire)

Si vous avez déjà déployé la fonction avant d'ajouter le secret, redéployez-la :

```bash
supabase functions deploy send-contact-email
```

## Test de la configuration

1. Allez sur la page Contact de votre site
2. Remplissez le formulaire avec vos informations
3. Cliquez sur "Envoyer"
4. Vous devriez recevoir un email à `aurelie.guilloux.pro@gmail.com`

## Personnalisation de l'adresse d'envoi

Si vous avez configuré votre domaine dans Resend, vous pouvez modifier l'adresse d'envoi dans le fichier :

`supabase/functions/send-contact-email/index.ts`

Ligne 73, remplacez :
```typescript
from: "Contact Site Web <contact@carrementabstrait.com>",
```

par votre adresse email personnalisée.

## Dépannage

### Les emails n'arrivent pas

1. Vérifiez que la clé API Resend est correctement configurée dans Supabase
2. Vérifiez les logs de la fonction dans Supabase Dashboard > Edge Functions > send-contact-email > Logs
3. Vérifiez votre dossier spam/indésirables
4. Vérifiez que votre domaine est bien vérifié dans Resend (si vous en utilisez un)

### Erreur "Configuration email manquante"

La variable d'environnement `RESEND_API_KEY` n'est pas configurée. Suivez l'étape 4 ci-dessus.

### Les emails arrivent dans les spams

- Configurez un domaine personnalisé dans Resend avec les enregistrements SPF, DKIM et DMARC
- Utilisez une adresse email du même domaine comme expéditeur

## Coûts

- **Resend gratuit :** 100 emails/jour, 3 000 emails/mois
- Au-delà : à partir de 20$/mois pour 50 000 emails

Pour un site portfolio artistique, le plan gratuit est largement suffisant.
