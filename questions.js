/* =====================================================================
   BURGER QUIZ — BANQUE DE QUESTIONS
   ---------------------------------------------------------------------
   Tu peux modifier ce fichier librement (Visual Studio, ou directement
   sur GitHub avec le crayon ✏️).

   RÈGLES D'ÉCRITURE
   - NUGGETS : mets TOUJOURS la bonne réponse EN PREMIER dans "choix".
     Le jeu mélange les réponses tout seul à l'affichage.
   - SEL OU POIVRE : "reponse" = numéro de l'option
       0 = 1re option, 1 = 2e option, 2 = 3e option (ex. « Les deux »).
   - "info" est facultatif : c'est l'anecdote affichée après la réponse.
   - N'oublie pas la virgule entre deux blocs { ... }.
   - Pour mettre des guillemets dans un texte, utilise « » (plus simple).
   ===================================================================== */

const CONFIG = {
  titre: "Burger Quiz",
  equipes: ["Ketchup", "Mayo"]   // noms par défaut (modifiables à l'accueil)
};


/* ---------------------------------------------------------------------
   MANCHE 1 — NUGGETS
   4 choix, les équipes jouent à tour de rôle (question 1 = équipe 1,
   question 2 = équipe 2, etc.). Garde un nombre PAIR de questions.
   --------------------------------------------------------------------- */
const NUGGETS = {
  points: 1,
  questions: [
    {
      question: "Mario doit son prénom à…",
      choix: [
        "Mario Segale, le propriétaire d'un entrepôt de Nintendo aux États-Unis",
        "Le grand-père de Shigeru Miyamoto",
        "Une pizzeria de Kyoto où mangeait l'équipe",
        "Mario Kart, sorti avant lui"
      ],
      info: "En 1981, Nintendo of America louait un entrepôt à un certain Mario Segale. Il serait venu réclamer un loyer en retard… et les employés ont donné son prénom au petit bonhomme de Donkey Kong."
    },
    {
      question: "Avant d'être une star, Brad Pitt a été payé pour…",
      choix: [
        "Se déguiser en poulet géant devant un fast-food",
        "Tester des matelas pour un magasin de meubles",
        "Faire le sosie de Tom Cruise dans des mariages",
        "Laver les chiens des stars d'Hollywood"
      ],
      info: "Il faisait l'homme-poulet pour la chaîne El Pollo Loco, à Los Angeles."
    },
    {
      question: "Au Japon, Pac-Man s'appelait « Puck-Man ». Pourquoi a-t-il été renommé aux États-Unis ?",
      choix: [
        "Par peur que des petits malins transforment le P en F sur les bornes",
        "Parce que « Puck » était déjà une marque de palets de hockey",
        "Parce que « Pac » était le surnom du patron de Namco",
        "À cause d'une faute de frappe sur la toute première borne"
      ],
      info: "Le constructeur craignait que les bornes d'arcade se fassent taguer. On comprend pourquoi."
    },
    {
      question: "Le Creeper de Minecraft est né…",
      choix: [
        "D'un bug : le créateur voulait faire un cochon",
        "D'un dessin d'enfant envoyé par un fan",
        "D'un brocoli oublié dans le frigo du studio",
        "D'un concours de monstres sur Internet"
      ],
      info: "En codant le cochon, Notch a inversé la hauteur et la longueur. Résultat : une créature toute en hauteur… devenue le Creeper."
    },
    {
      question: "Pour les cris des vélociraptors de Jurassic Park, l'ingénieur du son a enregistré…",
      choix: [
        "Des tortues en train de s'accoupler",
        "Son propre chat en train de vomir",
        "Un bébé qui faisait ses dents",
        "Une porte de grange rouillée"
      ],
      info: "Gary Rydstrom a mélangé plusieurs animaux, dont des tortues en plein… moment intime."
    },
    {
      question: "La voix de Chewbacca dans Star Wars, c'est surtout…",
      choix: [
        "Des grognements d'ours, mixés avec un morse, un lion et un blaireau",
        "L'acteur qui imitait une vache, la tête dans un seau",
        "Un aspirateur passé au ralenti",
        "Le réalisateur qui se gargarisait"
      ],
      info: "Ben Burtt, le magicien du son de Star Wars, a surtout enregistré des ours."
    },
    {
      question: "Dans Titanic, qui a vraiment dessiné le portrait de Rose ?",
      choix: [
        "James Cameron, le réalisateur",
        "Leonardo DiCaprio, entre deux prises",
        "Kate Winslet, toute seule devant un miroir",
        "Un dessinateur de BD belge"
      ],
      info: "Les mains qu'on voit dessiner à l'écran sont celles de Cameron. Il est gaucher, DiCaprio non : l'image a été inversée au montage."
    },
    {
      question: "Dans Les Deux Tours, Aragorn shoote dans un casque et hurle. Pourquoi ce cri sonne-t-il si vrai ?",
      choix: [
        "Viggo Mortensen venait de se casser deux orteils",
        "Il avait marché sur un Lego oublié dans le décor",
        "Le casque était rempli de béton pour lui faire une blague",
        "Il venait d'apprendre qu'il n'aurait pas de cheval"
      ],
      info: "Il a continué la scène malgré la douleur… et c'est cette prise qui est dans le film."
    },
    {
      question: "Quand Nintendo a été créé, en 1889, l'entreprise vendait…",
      choix: [
        "Des cartes à jouer",
        "Des parapluies",
        "Des sushis surgelés",
        "Des chaussettes chauffantes"
      ],
      info: "Des cartes « hanafuda », un jeu traditionnel japonais. Nintendo en fabrique encore aujourd'hui."
    },
    {
      question: "D'où vient le nom de scène de Lady Gaga ?",
      choix: [
        "D'une chanson de Queen, « Radio Ga Ga »",
        "Du premier mot prononcé par sa petite sœur",
        "D'un parfum de luxe des années 80",
        "D'un personnage des Simpson"
      ],
      info: "Un clin d'œil à « Radio Ga Ga » de Queen, qu'on lui chantait parce qu'elle avait un style à la Freddie Mercury."
    },
    {
      question: "Avec qui Snoop Dogg a-t-il animé une émission de cuisine à la télé ?",
      choix: [
        "Martha Stewart, la reine américaine des arts ménagers",
        "Gordon Ramsay",
        "Philippe Etchebest",
        "Le chef de la cantine de la Maison-Blanche"
      ],
      info: "« Martha & Snoop's Potluck Dinner Party », à partir de 2016. Ils sont vraiment amis."
    },
    {
      question: "Dans quelle série Ed Sheeran a-t-il fait une apparition en soldat ?",
      choix: [
        "Game of Thrones",
        "The Walking Dead",
        "Vikings",
        "Kaamelott"
      ],
      info: "Saison 7, épisode 1 : il chante autour d'un feu de camp devant Arya Stark."
    },
    {
      question: "Dans Psychose d'Hitchcock (1960), le sang de la célèbre scène de la douche était…",
      choix: [
        "Du sirop de chocolat",
        "Du jus de betterave",
        "Du ketchup",
        "Du vrai sang de bœuf"
      ],
      info: "Le film est en noir et blanc : le sirop de chocolat rendait mieux à l'écran que le faux sang."
    },
    {
      question: "En 2014, qu'a provoqué le clip « Gangnam Style » sur YouTube ?",
      choix: [
        "Il a fait exploser le compteur de vues, prévu pour 2,1 milliards maximum",
        "Une panne mondiale de YouTube pendant trois jours",
        "L'interdiction de la danse du cheval en Corée",
        "La création du bouton « Je n'aime pas »"
      ],
      info: "Le compteur était bloqué à 2 147 483 647 vues. YouTube a dû passer à un compteur beaucoup plus grand."
    },
    {
      question: "Les chaussures rouges et blanches de Sonic ont été inspirées par…",
      choix: [
        "Les bottes de Michael Jackson et les couleurs du Père Noël",
        "Les baskets de Marty McFly",
        "Des chaussures de clown",
        "Le maillot de l'équipe du Japon"
      ],
      info: "Son créateur Naoto Ohshima a mélangé les bottes de Michael Jackson (époque « Bad ») et le rouge et blanc du Père Noël."
    },
    {
      question: "D'où vient le nom « Daft Punk » ?",
      choix: [
        "D'une critique qui avait descendu leur ancien groupe",
        "Du nom de leur chat",
        "D'une marque de casques de moto",
        "D'un sort dans Harry Potter"
      ],
      info: "Un journaliste anglais avait qualifié leur premier groupe de « daft punky thrash ». Ils ont recyclé l'insulte."
    },
    {
      question: "Avant de s'appeler Stranger Things, la série devait s'appeler…",
      choix: [
        "Montauk",
        "Hawkins",
        "Le Monde à l'envers",
        "Eleven"
      ],
      info: "C'est le nom d'une ville près de New York, où l'histoire devait se passer au départ."
    },
    {
      question: "Pourquoi les propriétaires de la vraie maison de Walter White (Breaking Bad) ont-ils installé une clôture ?",
      choix: [
        "Des fans jetaient des pizzas sur le toit",
        "Des fans venaient cuisiner dans le garage",
        "L'équipe de tournage refusait de partir",
        "Les lamas du voisin s'échappaient dans le jardin"
      ],
      info: "Pour refaire la scène culte où Walter balance une pizza sur le toit. Les propriétaires ont craqué."
    },
    {
      question: "Quel objet intrus est apparu par erreur dans un épisode de la saison 8 de Game of Thrones ?",
      choix: [
        "Un gobelet de café à emporter",
        "Un smartphone",
        "Une paire de baskets",
        "Un plateau de sushis"
      ],
      info: "Posé sur la table pendant un banquet. HBO l'a effacé numériquement quelques jours plus tard."
    },
    {
      question: "Sur le tournage de Star Wars, quel surnom avait Dave Prowse, l'acteur dans le costume de Dark Vador ?",
      choix: [
        "« Darth Farmer », à cause de son gros accent de campagne",
        "« Darth Gâteau », parce qu'il grignotait entre les prises",
        "« Darth Dodo », parce qu'il s'endormait dans le costume",
        "« Darth Taxi », parce qu'il ramenait l'équipe en voiture"
      ],
      info: "Son accent était tellement rustique qu'on a remplacé sa voix par celle de James Earl Jones."
    }
  ]
};


/* ---------------------------------------------------------------------
   MANCHE 2 — SEL OU POIVRE
   Chaque série a 2 ou 3 options. Les équipes buzzent.
   --------------------------------------------------------------------- */
const SEL_OU_POIVRE = {
  points: 1,
  series: [
    {
      titre: "Marvel, DC, ou les deux ?",
      options: ["Marvel", "DC", "Les deux"],
      items: [
        { texte: "Black Manta",     reponse: 1, info: "L'ennemi juré d'Aquaman, avec son énorme casque." },
        { texte: "Captain Marvel",  reponse: 2, info: "Chez Marvel, c'est Carol Danvers. Chez DC, c'était le nom d'origine de Shazam ! DC a fini par le renommer pour éviter la confusion." },
        { texte: "Black Widow",     reponse: 0, info: "Natasha Romanoff, membre des Avengers." },
        { texte: "Sandman",         reponse: 2, info: "Chez Marvel, l'homme de sable ennemi de Spider-Man. Chez DC, le Maître des rêves de Neil Gaiman, adapté en série sur Netflix." },
        { texte: "Black Adam",      reponse: 1, info: "L'anti-héros joué par Dwayne Johnson au cinéma." },
        { texte: "Black Bolt",      reponse: 0, info: "Le roi des Inhumains : s'il parle, il détruit tout." },
        { texte: "Arès",            reponse: 2, info: "Le dieu grec de la guerre est chez les deux : ennemi de Wonder Woman chez DC, et même membre des Avengers chez Marvel." },
        { texte: "Black Lightning", reponse: 1, info: "Un héros électrique qui a eu sa propre série télé." },
        { texte: "Black Cat",       reponse: 0, info: "Félicia Hardy, la cambrioleuse qui fait craquer Spider-Man." },
        { texte: "Black Canary",    reponse: 1, info: "L'héroïne au cri supersonique, alliée de Green Arrow." }
      ]
    },
    {
      titre: "Jeu vidéo, film, ou les deux ?",
      options: ["Jeu vidéo", "Film", "Les deux"],
      items: [
        { texte: "Rampage",           reponse: 2, info: "Un jeu d'arcade de 1986… et un film de 2018 avec Dwayne Johnson et un gorille géant." },
        { texte: "Fortnite",          reponse: 0, info: "Pas de film (pour l'instant)." },
        { texte: "Intouchables",      reponse: 1, info: "Pas de jeu vidéo… heureusement." },
        { texte: "Tetris",            reponse: 2, info: "Un film de 2023 raconte comment le jeu est sorti d'URSS." },
        { texte: "Fall Guys",         reponse: 0, info: "Juste le jeu des petits haricots qui tombent partout." },
        { texte: "Le Dîner de cons",  reponse: 1, info: "Juste le film culte de Francis Veber." },
        { texte: "Angry Birds",       reponse: 2, info: "Le film d'animation est sorti en 2016, et il a même eu une suite." },
        { texte: "Stardew Valley",    reponse: 0, info: "Le jeu de ferme créé par une seule personne." },
        { texte: "Inception",         reponse: 1, info: "Le film de Christopher Nolan n'a jamais eu de jeu vidéo." },
        { texte: "Tron",              reponse: 2, info: "Le film et le jeu d'arcade sont sortis la même année, en 1982." }
      ]
    },
    {
      titre: "Film Disney-Pixar, voiture, ou les deux ?",
      options: ["Film Disney/Pixar", "Voiture", "Les deux"],
      items: [
        { texte: "Soul",    reponse: 2, info: "Le film Pixar de 2020… et la Kia Soul." },
        { texte: "Mégane",  reponse: 1, info: "Chez Renault." },
        { texte: "Coco",    reponse: 0, info: "Pixar, 2017." },
        { texte: "Juke",    reponse: 1, info: "Chez Nissan." },
        { texte: "Volt",    reponse: 2, info: "« Volt, star malgré lui », le Disney de 2008… et la Chevrolet Volt, une voiture hybride." },
        { texte: "Vaiana",  reponse: 0, info: "Disney, 2016." },
        { texte: "Kona",    reponse: 1, info: "Chez Hyundai." },
        { texte: "Wall-E",  reponse: 0, info: "Pixar, 2008." },
        { texte: "Picasso", reponse: 1, info: "La Citroën Xsara Picasso. Le peintre, lui, n'a pas de film Disney." },
        { texte: "Luca",    reponse: 0, info: "Pixar, 2021." }
      ]
    }
  ]
};


/* ---------------------------------------------------------------------
   MANCHE 3 — MENUS
   Chaque équipe choisit un menu et répond à toutes ses questions.
   parEquipe = nombre de menus joués par chaque équipe.
   --------------------------------------------------------------------- */
const MENUS = {
  points: 1,
  parEquipe: 1,
  menus: [
    {
      nom: "Menu Manette", emoji: "🎮", description: "Jeux vidéo",
      questions: [
        { question: "Quel est le nom de famille de Mario et Luigi ?", reponse: "Mario (donc Mario Mario et Luigi Mario)", info: "Confirmé par Shigeru Miyamoto en 2015, et déjà utilisé dans le film de 1993." },
        { question: "Dans la saga The Legend of Zelda, qui est Zelda ?", reponse: "La princesse (le héros, lui, s'appelle Link)", info: "Le piège le plus célèbre du jeu vidéo." },
        { question: "Dans Les Sims, quelle langue parlent les Sims ?", reponse: "Le simlish", info: "Une langue inventée qui ne veut rien dire. Katy Perry a même réenregistré « Hot n Cold » en simlish." },
        { question: "Comment s'appellent les quatre fantômes de Pac-Man ?", reponse: "Blinky, Pinky, Inky et Clyde", info: "Tu peux accepter si l'équipe en trouve au moins deux." },
        { question: "Dans le dessin animé Pokémon, que fait Rondoudou quand tout le monde s'endort pendant sa chanson ?", reponse: "Il leur gribouille le visage au feutre", info: "Il est vexé qu'on ne l'écoute pas jusqu'au bout." }
      ]
    },
    {
      nom: "Menu Pop-corn", emoji: "🍿", description: "Cinéma",
      questions: [
        { question: "Dans Retour vers le futur, quelle vitesse la DeLorean doit-elle atteindre pour voyager dans le temps ?", reponse: "88 miles à l'heure (environ 140 km/h)" },
        { question: "Dans Seul au monde, comment s'appelle le meilleur ami de Tom Hanks sur son île ?", reponse: "Wilson, un ballon de volley", info: "Des spectateurs ont vraiment pleuré pour un ballon." },
        { question: "Avec quels bonbons Elliott attire-t-il E.T. ?", reponse: "Des Reese's Pieces (bonbons au beurre de cacahuète)", info: "La marque M&M's avait refusé. Les ventes de Reese's Pieces ont explosé après le film." },
        { question: "Dans Maman, j'ai raté l'avion, où part en vacances la famille de Kevin ?", reponse: "À Paris" },
        { question: "Dans Le Roi Lion, que veut dire « Hakuna Matata » ?", reponse: "« Pas de soucis »", info: "C'est du swahili." }
      ]
    },
    {
      nom: "Menu Canapé", emoji: "🛋️", description: "Séries",
      questions: [
        { question: "Dans Friends, quel est le métier de Ross ?", reponse: "Paléontologue", info: "Il étudie les dinosaures… et en parle beaucoup trop." },
        { question: "Dans Stranger Things, quelle est la nourriture préférée d'Eleven ?", reponse: "Les gaufres Eggo" },
        { question: "Dans Game of Thrones, quel est le seul mot que dit Hodor ?", reponse: "Hodor", info: "Et on finit par apprendre pourquoi… snif." },
        { question: "Dans The Office (version US), dans quelle ville se trouve l'agence Dunder Mifflin ?", reponse: "Scranton (Pennsylvanie)" },
        { question: "Dans Kaamelott, à quel jeu de dés aux règles incompréhensibles jouent Perceval et Karadoc ?", reponse: "Le cul de chouette" }
      ]
    },
    {
      nom: "Menu Micro", emoji: "🎤", description: "Musique",
      questions: [
        { question: "D'où vient le nom « Stromae » ?", reponse: "C'est « maestro » en verlan" },
        { question: "Quel animal Ozzy Osbourne a-t-il croqué sur scène en 1982 ?", reponse: "Une chauve-souris", info: "Il pensait qu'elle était en caoutchouc. Elle ne l'était pas. Direction le vaccin contre la rage." },
        { question: "Quel est le vrai nom de Bruno Mars ?", reponse: "Peter Hernandez", info: "« Bruno » est un surnom donné par son père quand il était petit." },
        { question: "Avec quoi était faite la robe de Lady Gaga aux MTV Video Music Awards 2010 ?", reponse: "De la viande crue" },
        { question: "Quel était le vrai nom de famille de Johnny Hallyday ?", reponse: "Smet (Jean-Philippe Smet)" }
      ]
    }
  ]
};


/* ---------------------------------------------------------------------
   MANCHE 4 — L'ADDITION
   Une liste par équipe (dans l'ordre de passage). Questions rapides.
   --------------------------------------------------------------------- */
const ADDITION = {
  points: 1,
  duree: 45,          // secondes de chrono par équipe
  listes: [
    [
      { question: "De quelle couleur est Yoshi ?", reponse: "Vert" },
      { question: "Combien y a-t-il de Tortues Ninja ?", reponse: "4" },
      { question: "Dans quelle ville vit Batman ?", reponse: "Gotham City" },
      { question: "De quel pays vient le groupe ABBA ?", reponse: "La Suède" },
      { question: "Comment s'appelle le robot doré de Star Wars ?", reponse: "C-3PO" },
      { question: "Combien y avait-il de Spice Girls ?", reponse: "5" },
      { question: "Quel animal est Garfield ?", reponse: "Un chat" },
      { question: "Qui chante « Bad Guy » ?", reponse: "Billie Eilish" },
      { question: "Quel est le prénom du sorcier à lunettes de Poudlard ?", reponse: "Harry" },
      { question: "Quel super-héros a un marteau nommé Mjöllnir ?", reponse: "Thor" }
    ],
    [
      { question: "De quelle couleur est Pac-Man ?", reponse: "Jaune" },
      { question: "Comment s'appelle le cowboy de Toy Story ?", reponse: "Woody" },
      { question: "Combien de nains accompagnent Blanche-Neige ?", reponse: "7" },
      { question: "De quel pays viennent les Pokémon ?", reponse: "Le Japon" },
      { question: "Dans quelle ville vit Spider-Man ?", reponse: "New York" },
      { question: "Combien de membres compte Daft Punk ?", reponse: "2" },
      { question: "Comment s'appelle le chien de Tintin ?", reponse: "Milou" },
      { question: "Comment s'appelle le frère de Mario ?", reponse: "Luigi" },
      { question: "Qui chante « Shape of You » ?", reponse: "Ed Sheeran" },
      { question: "Quel super-héros vient de la planète Krypton ?", reponse: "Superman" }
    ]
  ]
};


/* ---------------------------------------------------------------------
   MANCHE 5 — BURGER DE LA MORT
   Un joueur écoute 10 questions d'affilée, puis donne les 10 réponses
   dans l'ordre. Une erreur = burger perdu. Un burger par équipe.
   --------------------------------------------------------------------- */
const BURGER_DE_LA_MORT = {
  points: 25,
  burgers: [
    [
      { question: "De quelle couleur est Hulk ?", reponse: "Vert" },
      { question: "Qui chante « Thriller » ?", reponse: "Michael Jackson" },
      { question: "Quel animal est Scooby-Doo ?", reponse: "Un chien" },
      { question: "Combien de pattes a une araignée ?", reponse: "8" },
      { question: "Dans quel jeu vidéo construit-on tout avec des blocs carrés ?", reponse: "Minecraft" },
      { question: "Comment s'appelle la petite fée de Peter Pan ?", reponse: "La fée Clochette" },
      { question: "Quel légume mange Bugs Bunny ?", reponse: "Une carotte" },
      { question: "Quel est le vrai nom de Batman ?", reponse: "Bruce Wayne" },
      { question: "Combien de joueurs par équipe sur un terrain de foot ?", reponse: "11" },
      { question: "Comment s'appelle la chouette de Harry Potter ?", reponse: "Hedwige" }
    ],
    [
      { question: "Comment s'appelle le poisson-clown de Pixar ?", reponse: "Nemo" },
      { question: "Quel chanteur est surnommé « le King » ?", reponse: "Elvis Presley" },
      { question: "Combien de couleurs a un arc-en-ciel ?", reponse: "7" },
      { question: "Qui est le meilleur ami de Shrek ?", reponse: "L'Âne" },
      { question: "Quelle console Nintendo est sortie en 2017 ?", reponse: "La Switch" },
      { question: "Quel est le vrai nom de Spider-Man ?", reponse: "Peter Parker" },
      { question: "Combien de saisons compte Game of Thrones ?", reponse: "8" },
      { question: "De quelle couleur est Sonic ?", reponse: "Bleu" },
      { question: "Dans quelle ville se trouve la tour Eiffel ?", reponse: "Paris" },
      { question: "Quel animal est Rémy dans Ratatouille ?", reponse: "Un rat" }
    ]
  ]
};
