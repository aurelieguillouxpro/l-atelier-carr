

## Ouverture directe en plein ecran depuis la galerie

### Ce qui se passe aujourd'hui
Quand vous cliquez sur une sculpture (ou toute oeuvre) dans la grille, la lightbox s'ouvre d'abord en mode "apercu" avec l'image a gauche et les details (technique, dimensions, annee) a droite. Il faut ensuite cliquer sur le bouton d'agrandissement pour voir l'image en plein ecran.

### Ce qui va changer
Un clic sur une image ouvrira directement la vue agrandie (plein ecran), sans passer par l'etape intermediaire.

### Details techniques
Modification dans le fichier `src/pages/Galerie.tsx` :

- **Ligne 987** : dans le `onClick` de chaque vignette, activer le mode plein ecran en meme temps que la selection de l'oeuvre. Actuellement `onClick={() => setSelectedArtwork(artwork)}` deviendra `onClick={() => { setSelectedArtwork(artwork); setIsFullscreen(true); }}`.

Le bouton d'agrandissement/reduction et le panneau de details resteront fonctionnels : l'utilisateur pourra toujours basculer entre les deux modes une fois la lightbox ouverte.

