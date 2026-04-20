# Instructions pour ajouter des photos à la galerie

## Comment remplacer les images placeholder

1. **Préparer vos photos** :
   - Format recommandé : JPG ou PNG
   - Taille recommandée : 1200x900px (ratio 4:3)
   - Poids : < 500KB par image (compresser si nécessaire)

2. **Ajouter les photos dans ce dossier** :
   - Copier vos photos dans `/public/images/gallery/`
   - Nommer les fichiers de manière descriptive (ex: `education-atelier-2024.jpg`)

3. **Mettre à jour le fichier de contenu** :
   - Ouvrir : `src/modules/content/data/siteContent.ts`
   - Trouver la section `gallery`
   - Remplacer les chemins `/images/gallery/placeholder.svg` par vos photos

Exemple :

```typescript
{
  id: 'gal-01',
  title: 'Actions communautaires',
  description: 'Nos activités sur le terrain',
  items: [
    { src: '/images/gallery/community-distribution-2024.jpg', alt: 'Distribution de kits scolaires' },
    { src: '/images/gallery/community-meeting-2024.jpg', alt: 'Rencontre communautaire' },
    { src: '/images/gallery/community-event-2024.jpg', alt: 'Événement communautaire' }
  ]
}
```

4. **Tester** :

   ```bash
   npm run dev
   ```

   Vérifier que les images s'affichent correctement sur `/gallery`

5. **Déployer** :
   ```bash
   git add .
   git commit -m "Update: ajout photos galerie"
   git push
   ```

## Conseils

- Utilisez des noms de fichiers sans espaces ni accents
- Optimisez vos images avant de les ajouter (TinyPNG, Squoosh, etc.)
- Ajoutez des descriptions `alt` pertinentes pour l'accessibilité
- Gardez une cohérence visuelle (même ratio, même style)
