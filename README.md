# 🍔 Burger Quiz — jeu à deux équipes

Jeu web statique (HTML/CSS/JS, aucun serveur) pour animer un Burger Quiz façon soirée télé, sur un écran ou un vidéoprojecteur. Le MJ pilote tout au clavier ou à la souris.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Le jeu (interface + logique). Pas besoin d'y toucher. |
| `questions.js` | **Toutes les questions.** C'est le seul fichier à modifier. |
| `README.md` | Ce mode d'emploi. |

## Les 5 manches

1. **🍗 Nuggets** : 4 choix, les équipes jouent à tour de rôle. +1 par bonne réponse.
2. **🧂 Sel ou poivre** : « Pokémon ou médicament ? », « Star Wars ou fromage ? »… Les équipes buzzent, le MJ révèle puis donne le point.
3. **🍔 Menus** : chaque équipe choisit un menu (Jeux vidéo, Ciné, Séries, Musique) et répond à ses 5 questions.
4. **🧾 L'addition** : 45 secondes chrono par équipe, questions rapides en rafale.
5. **💀 Burger de la mort** : un joueur écoute 10 questions, puis donne les 10 réponses dans l'ordre. Une erreur = perdu. Sans faute = +25 points.

Puis l'écran **🏆 Résultats** désigne les gagnants.

## Raccourcis du MJ

| Touche | Action |
|---|---|
| `Entrée` / `→` | Continuer, question suivante |
| `Espace` | Révéler la réponse |
| `A` `B` `C` `D` | Réponse donnée par l'équipe (Nuggets) |
| `1` `2` `0` | Point équipe 1 / équipe 2 / personne (Sel ou poivre) — choisir une équipe ou un menu |
| `V` / `X` | Bonne / mauvaise réponse |
| `P` | Pause du chrono (L'addition) |
| `F` | Plein écran |
| `M` | Couper / remettre le son |
| `H` | Afficher l'aide |

- Les chiffres marchent aussi sans Maj sur un clavier AZERTY, et sur le pavé numérique.
- Pour corriger un score : survole le score d'une équipe et clique sur `+` ou `−`.
- La barre du bas permet de sauter directement à n'importe quelle manche.
- Les scores sont gardés si la page est rechargée (bouton « Reprendre » à l'accueil).

## Modifier les questions

Ouvre `questions.js` (Visual Studio ou le crayon ✏️ sur GitHub).

- **Nuggets** : mets toujours la **bonne réponse en premier** dans `choix`. Le jeu mélange tout seul à l'affichage. Garde un nombre pair de questions pour que les équipes en aient autant.
- **Sel ou poivre** : `reponse` est le numéro de l'option (`0` = 1re, `1` = 2e, `2` = 3e). Tu peux mettre 3 options, par exemple `["Pokémon", "Médicament", "Les deux"]`.
- **Menus** : `parEquipe: 1` = chaque équipe joue un menu. Mets `2` pour qu'elles en jouent deux.
- **L'addition** : `duree` = secondes de chrono. Une liste par équipe.
- **Burger de la mort** : une liste de 10 questions par équipe, `points` = le gros lot.
- `info` (facultatif) : l'anecdote affichée après la réponse.

Pièges classiques : une virgule oubliée entre deux blocs `{ ... }`, ou des guillemets `"` dans un texte (utilise plutôt `« »`). Si l'écran reste vide après une modification, c'est presque toujours ça.

## Mise en ligne sur GitHub Pages

1. Crée un dépôt (par exemple `burger-quiz`) et dépose les 3 fichiers à la racine.
2. **Settings → Pages** → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)` → **Save**.
3. Au bout d'une minute, le jeu est en ligne sur `https://TON-PSEUDO.github.io/burger-quiz/`.

## Intégration dans Odoo

Dans l'éditeur du site Odoo, ajoute un bloc **HTML / Code intégré** et colle :

```html
<iframe src="https://TON-PSEUDO.github.io/burger-quiz/"
        style="width:100%; height:85vh; border:0; border-radius:12px;"
        allow="fullscreen; autoplay" allowfullscreen></iframe>
```

`allow="fullscreen"` est indispensable pour que la touche `F` (plein écran) fonctionne dans l'iframe.

Le nom « Burger Quiz » est celui d'une émission TV : si le jeu est visible publiquement sur le site de l'entreprise, tu peux changer le titre affiché dans `questions.js` (`CONFIG.titre`).
