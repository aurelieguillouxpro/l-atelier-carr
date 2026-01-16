# Schémas Sanity pour le site MC Chaillou

Ces schémas doivent être ajoutés à votre projet Sanity Studio.

## Configuration du Studio via GitHub

1. Créez un nouveau repo GitHub pour votre Sanity Studio
2. Initialisez avec : `npx sanity@latest init --project zczmkr8c --dataset production`
3. Copiez les schémas ci-dessous dans le dossier `schemaTypes/`
4. Déployez sur Vercel ou Netlify

## Schémas à créer

### pressArticle.ts
```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pressArticle',
  title: 'Article de presse',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'source',
      title: 'Source (journal)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Ex: Avril 2025',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'link',
      title: 'Lien vers l\'article',
      type: 'url'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'source'
    }
  }
})
```

### exhibition.ts
```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'exhibition',
  title: 'Exposition',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'venue',
      title: 'Lieu',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Ville',
      type: 'string',
      description: 'Ex: Mesquer (44)'
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Ex: Avril 2025'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'isUpcoming',
      title: 'À venir',
      type: 'boolean',
      initialValue: false
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'venue'
    }
  }
})
```

### testimonial.ts
```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Rôle / Source',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'role'
    }
  }
})
```

### artwork.ts
```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Œuvre',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Peinture', value: 'peinture'},
          {title: 'Sculpture', value: 'sculpture'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'year',
      title: 'Année',
      type: 'string'
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string'
    }),
    defineField({
      name: 'technique',
      title: 'Technique',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
})
```

### pageContent.ts
```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageContent',
  title: 'Contenu de page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Identifiant de page',
      type: 'string',
      options: {
        list: [
          {title: 'Accueil', value: 'home'},
          {title: 'À propos', value: 'about'},
          {title: 'Galerie', value: 'gallery'},
          {title: 'Expositions', value: 'exhibitions'},
          {title: 'Presse', value: 'press'},
          {title: 'Contact', value: 'contact'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Titre principal',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'quote',
      title: 'Citation',
      type: 'text'
    }),
    defineField({
      name: 'quoteAuthor',
      title: 'Auteur de la citation',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'pageId'
    }
  }
})
```

## index.ts (schemaTypes)
```typescript
import pressArticle from './pressArticle'
import exhibition from './exhibition'
import testimonial from './testimonial'
import artwork from './artwork'
import pageContent from './pageContent'

export const schemaTypes = [
  pressArticle,
  exhibition,
  testimonial,
  artwork,
  pageContent
]
```
