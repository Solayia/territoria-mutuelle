/* ============================================================
   ACTUALITÉS & RESSOURCES — TERRITORIA mutuelle
   ------------------------------------------------------------
   Pour AJOUTER une actualité : copiez un bloc { ... } dans le tableau
   ci-dessous (voir modèle en commentaire). Champs :
     id, title, dateLabel, dateISO, categorie, theme, type, tag, image, excerpt,
     external (URL/PDF optionnel — si présent, le clic ouvre ce lien),
     body (contenu HTML de l'article, ignoré si "external" est défini)
   ------------------------------------------------------------
   FILTRES de la page Actualités (2 niveaux) :
     categorie : "actualite" ou "ressource"  (niveau 1)
     theme     : activite-physique | inclusion | alimentation | sante-mentale
                 | qvct | sante-environnementale | consommation | sommeil
                 | securite | sedentarite | reseau-militant | evenement
                 | formation   (niveau 2 ; les filtres sans article sont
                 masqués automatiquement, ils apparaissent au fur et à mesure)
   ------------------------------------------------------------
   MODÈLE :
   {
     id: "mon-article",
     title: "Titre de l'actualité",
     dateLabel: "15 juin 2026", dateISO: "2026-06-15",
     theme: "qvct", type: "article", tag: "Prévention",
     image: "https://…",
     excerpt: "Résumé court.",
     external: null,
     body: "<p>Contenu…</p>"
   }
   ============================================================ */
window.ARTICLES = [

  {
    id: "philippe-mahe-president",
    title: "Philippe MAHÉ, nouveau président de TERRITORIA mutuelle",
    dateLabel: "29 septembre 2026", dateISO: "2026-09-29",
    categorie: "actualite", theme: "vie-institutionnelle", type: "article", tag: "Gouvernance",
    image: "assets/img/actu/philippe-mahe-president.jpg",
    excerpt: "Après 20 ans de présidence, Robert Chiche passe le relais à Philippe MAHÉ, également président du conseil de surveillance de TERRITORIA prévoyance. Portrait du nouveau président.",
    external: null,
    body: "<p>L'assemblée générale de juin a vu le président Robert Chiche annoncer son départ et faire valoir ses droits à la retraite après 20 ans passés à la présidence de la mutuelle.</p>"
      + "<p>Il passe le relais à M. Philippe MAHÉ, qui a accepté de relever le défi de continuer à porter les valeurs de Territoria, qui chaque jour œuvre pour apporter une réponse aux besoins des agents territoriaux. Philippe MAHÉ devient également président du conseil de surveillance de TERRITORIA prévoyance.</p>"
      + "<h3>La biographie de Philippe MAHÉ</h3>"
      + "<p>Fort de plus de quarante années au service de l'action publique, Philippe Mahé dispose d'une expertise reconnue à la croisée des politiques territoriales et de l'administration de l'État. Passé par la Ville de Niort, auprès du maire Bernard Bellec, avant d'exercer de nombreuses fonctions de direction au sein de collectivités territoriales, il occupe notamment le poste de directeur général des services dans plusieurs départements, à la région Centre, ainsi qu'à Nantes et Toulouse. Il a servi dans les cabinets ministériels, auprès de Michel Sapin et de Manuel Valls, avant d'être nommé Préfet de Meurthe-et-Moselle en 2015, du Finistère en 2020, puis du Var en 2023. Engagé dans la formation des cadres publics, il préside les concours d'entrée de l'Institut national du service public (INSP) pour la session 2026.</p>"
      + "<p>Âgé de 69 ans, Philippe Mahé est diplômé d'une maîtrise en droit public de l'Université de Rennes et lauréat du concours d'administrateur territorial à l'Institut National des Études Territoriales (INET).</p>"
      + "<p>Découvrez la composition du nouveau bureau sur la page <a href=\"qui-sommes-nous.html#gouvernance\">Qui sommes-nous</a>.</p>"
  },

  {
    id: "nouvelle-gouvernance-2026",
    title: "Une nouvelle gouvernance pour la rentrée 2026",
    dateLabel: "26 septembre 2026", dateISO: "2026-09-26",
    categorie: "actualite", theme: "vie-institutionnelle", type: "article", tag: "Gouvernance",
    image: "assets/img/actu/gouvernance.jpg",
    excerpt: "Autour du nouveau président Philippe MAHÉ, un nouveau bureau se constitue et TERRITORIA mutuelle s'appuiera désormais sur 3 commissions thématiques pour mener ses missions.",
    external: null,
    body: "<p>Alors qu'en juin dernier, Robert Chiche, président emblématique de TERRITORIA mutuelle, annonçait officiellement son départ de la présidence de la mutuelle, la rentrée 2026 a vu une nouvelle gouvernance se mettre en place autour du nouveau président, M. Philippe MAHÉ.</p>"
      + "<p>Un nouveau bureau s'est constitué autour du président. Découvrez ses membres sur la page dédiée&nbsp;: <a href=\"qui-sommes-nous.html#gouvernance\">Qui sommes-nous</a>.</p>"
      + "<p>Outre son conseil d'administration, et pour s'inscrire dans une logique opérationnelle, TERRITORIA mutuelle s'appuiera dorénavant sur 3 commissions thématiques pour mener ses missions de prévention et d'action sociale&nbsp;:</p>"
      + "<ul>"
      + "<li>la Commission sociale&nbsp;;</li>"
      + "<li>la Commission «&nbsp;prévention et promotion de la santé&nbsp;»&nbsp;;</li>"
      + "<li>la Commission «&nbsp;formation&nbsp;».</li>"
      + "</ul>"
      + "<p>Ces commissions seront l'occasion de rester à l'écoute et en veille des préoccupations de terrain via les délégués qui y participent, et ainsi de repérer les sujets sur lesquels œuvrer.</p>"
  },

  {
    id: "comite-partenaires-septembre-2026",
    title: "Comité des partenaires du 23 septembre",
    dateLabel: "24 septembre 2026", dateISO: "2026-09-24",
    categorie: "actualite", theme: "vie-institutionnelle", type: "article", tag: "Comité des partenaires",
    image: "assets/img/actu/comite-partenaires.jpg",
    excerpt: "TERRITORIA mutuelle a réuni le 23 septembre la 2ᵉ réunion de son comité des partenaires, aux côtés des associations de DG et DRH de collectivités.",
    external: null,
    body: "<p>TERRITORIA mutuelle organisait le 23 septembre dernier sa 2ᵉ réunion du comité des partenaires.</p>"
      + "<p>Entouré des associations de DG et DRH de collectivités, ce comité est l'occasion de croiser les regards sur les préoccupations actuelles en matière de management et de RH au sein des collectivités.</p>"
      + "<p>En ce mois de septembre, les échanges ont porté sur&nbsp;:</p>"
      + "<ul>"
      + "<li>les actualités PSC, avec un projet de guide de bonnes pratiques porté par un groupe de travail auquel participent TERRITORIA prévoyance et APICIL&nbsp;;</li>"
      + "<li>l'état d'esprit et les constats observés au sein des collectivités en cette période faisant suite aux élections municipales et avant les élections présidentielles&nbsp;;</li>"
      + "<li>le Salon des maires et des collectivités locales 2026, au cours duquel TERRITORIA mutuelle sera présent avec un stand APICIL/TERRITORIA (pavillon 7.3, stand H74). Les échanges ont permis d'avancer sur les contenus et l'animation du Lab «&nbsp;territoire solidaire et inclusif&nbsp;» proposé par APICIL/TERRITORIA le 25 novembre à 17h&nbsp;;</li>"
      + "<li>le Challenge Inclusion 2026, pour lequel il est toujours temps de candidater afin de mettre en lumière ses actions en faveur de l'inclusion.</li>"
      + "</ul>"
      + "<p>Ces discussions sont l'opportunité de nourrir les réflexions de chacun, de repérer des pistes de travail mais aussi de partager des expériences positives au service des agents de la collectivité, voire plus largement du territoire.</p>"
  },

  {
    id: "reseau-militant-delegues-2026",
    title: "Un réseau militant pour agir au plus près des territoires",
    dateLabel: "22 septembre 2026", dateISO: "2026-09-22",
    categorie: "actualite", theme: "reseau-militant", type: "article", tag: "Réseau militant",
    image: "assets/img/missions/10_reseau_militant_rencontre.jpg",
    excerpt: "59 délégués et 7 correspondants, présents sur tout le territoire, représentent les adhérents et animent la vie du réseau militant de TERRITORIA mutuelle.",
    external: null,
    body: "<p>En tant que mutuelle de livre III, TERRITORIA mutuelle s'appuie sur des délégués présents sur tout le territoire pour représenter les adhérents de TERRITORIA prévoyance.</p>"
      + "<p>Par son action bénévole et militante, le délégué&nbsp;:</p>"
      + "<ul>"
      + "<li>participe et vote lors des assemblées générales&nbsp;;</li>"
      + "<li>représente la mutuelle dans les actions d'animation, en lien avec la prévention, pouvant s'organiser sur son territoire&nbsp;;</li>"
      + "<li>relaie les préoccupations des adhérents et adhérentes fonctionnaires territoriaux&nbsp;;</li>"
      + "<li>participe à la vie d'un réseau militant animé par TERRITORIA via ses référents régionaux et son élu référent.</li>"
      + "</ul>"
      + "<p>TERRITORIA mutuelle compte ainsi <strong>59 délégués</strong> répartis sur tout le territoire, associés à <strong>7 correspondants</strong>.</p>"
      + "<h3>La répartition des délégués et correspondants</h3>"
      + "<figure class=\"article-figure\"><a href=\"assets/img/actu/carte-delegues-correspondants-2026.jpg\" target=\"_blank\" rel=\"noopener\">"
      + "<picture><source srcset=\"assets/img/actu/carte-delegues-correspondants-2026.webp\" type=\"image/webp\">"
      + "<img src=\"assets/img/actu/carte-delegues-correspondants-2026.jpg\" alt=\"Carte de France : répartition des 59 délégués et 7 correspondants de TERRITORIA mutuelle par région, année 2026\" loading=\"lazy\"></picture></a>"
      + "<figcaption>Répartition des délégués et correspondants — année 2026. <a href=\"assets/img/actu/carte-delegues-correspondants-2026.jpg\" target=\"_blank\" rel=\"noopener\">Agrandir<span class=\"visually-hidden\"> (nouvelle fenêtre)</span></a></figcaption></figure>"
      + "<h3>Vos délégués</h3>"
      + "<figure class=\"article-figure\"><a href=\"assets/img/actu/liste-delegues-2026.jpg\" target=\"_blank\" rel=\"noopener\">"
      + "<picture><source srcset=\"assets/img/actu/liste-delegues-2026.webp\" type=\"image/webp\">"
      + "<img src=\"assets/img/actu/liste-delegues-2026.jpg\" alt=\"Liste des délégués de TERRITORIA mutuelle par région — mandat 2026-2030\" loading=\"lazy\"></picture></a>"
      + "<figcaption>Vos délégués — mandat 2026-2030. <a href=\"assets/img/actu/liste-delegues-2026.jpg\" target=\"_blank\" rel=\"noopener\">Agrandir<span class=\"visually-hidden\"> (nouvelle fenêtre)</span></a></figcaption></figure>"
      + "<h3>Vos référents régionaux</h3>"
      + "<p>Pour faciliter l'animation de ce réseau, des référents régionaux ont été désignés pour favoriser le partage d'information et la vie du réseau en région. Retrouvez-les également sur la page <a href=\"qui-sommes-nous.html#gouvernance\">Qui sommes-nous</a>.</p>"
      + "<figure class=\"article-figure\"><a href=\"assets/img/actu/carte-referents-2026.jpg\" target=\"_blank\" rel=\"noopener\">"
      + "<picture><source srcset=\"assets/img/actu/carte-referents-2026.webp\" type=\"image/webp\">"
      + "<img src=\"assets/img/actu/carte-referents-2026.jpg\" alt=\"Carte des référents régionaux de TERRITORIA mutuelle avec leurs coordonnées\" loading=\"lazy\"></picture></a>"
      + "<figcaption>Les référents régionaux — version du 17/04/2026. <a href=\"assets/img/actu/carte-referents-2026.jpg\" target=\"_blank\" rel=\"noopener\">Agrandir<span class=\"visually-hidden\"> (nouvelle fenêtre)</span></a></figcaption></figure>"
  },

  {
    id: "challenge-inclusion-2026",
    title: "Challenge Inclusion 2026&nbsp;: c'est le moment de candidater&nbsp;!",
    dateLabel: "8 septembre 2026", dateISO: "2026-09-08",
    categorie: "actualite", theme: "inclusion", type: "article", tag: "Inclusion",
    image: "assets/img/actu-challenge-inclusion.png",
    excerpt: "La 6ᵉ édition du Challenge Inclusion récompense les projets porteurs de sens et de solidarité. Une catégorie dédiée aux collectivités est pilotée par TERRITORIA mutuelle, aux côtés du groupe APICIL.",
    external: null,
    body: "<p>Le Challenge Inclusion a pour ambition de mettre en lumière la diversité des enjeux liés à l'inclusion&nbsp;: handicap, maladie, précarité, origines (sociales, géographiques, ethniques…), âges, genres, orientations sexuelles, apparences physiques, etc.</p>"
      + "<p>Lors de cette 6ᵉ édition du Challenge Inclusion, 4 prix seront remis pour récompenser des projets porteurs de sens, d'impact et de solidarité, en France métropolitaine, dont l'un réservé à un projet porté par une collectivité. Cette catégorie est pilotée par TERRITORIA mutuelle, qui a souhaité s'associer au groupe APICIL dans le cadre de ce challenge.</p>"
      + "<p>Pour candidater, rien de plus simple&nbsp;: réalisez une vidéo de 2&nbsp;min maximum pour présenter votre projet, puis déposez-la sur la plateforme prévue à cet effet avant le <strong>7 octobre 2026</strong> dernier délai.</p>"
      + "<p><img src=\"assets/img/actu-challenge-candidater.png\" alt=\"Comment candidater&nbsp;: du 9 septembre au 7 octobre, préparez une vidéo de 2 minutes présentant votre projet inclusif puis renseignez le formulaire de candidature sur la plateforme dédiée&nbsp;; du 9 octobre au 1er novembre, engagez votre réseau pour soutenir votre initiative pendant l'appel aux votes du public.\" loading=\"lazy\"></p>"
      + "<h3>📅 Les dates importantes</h3>"
      + "<ul>"
      + "<li><strong>9 septembre – 7 octobre&nbsp;:</strong> dépôt des candidatures sur la plateforme</li>"
      + "<li><strong>9 octobre – 1<sup>er</sup> novembre&nbsp;:</strong> appel aux votes du public sur la plateforme dédiée</li>"
      + "<li><strong>2 – 9 novembre&nbsp;:</strong> choix des finalistes par les jurys (3 finalistes par catégorie)</li>"
      + "<li><strong>10 décembre&nbsp;:</strong> soirée de finale et remise des prix à Lyon</li>"
      + "</ul>"
      + "<h3>🔑 À la clé</h3>"
      + "<ul>"
      + "<li>Une dotation financière de 10&nbsp;000&nbsp;€ par projet lauréat</li>"
      + "<li>Une dotation financière de 2&nbsp;000&nbsp;€ par projet pour les 2 autres finalistes</li>"
      + "<li>Une valorisation le soir de la finale</li>"
      + "<li>Une mise en lumière via notre réseau et nos partenaires</li>"
      + "</ul>"
      + "<p>Accès à la plateforme et à plus d'informations sur&nbsp;: <a href=\"https://www.challenge-inclusion.fr/\" target=\"_blank\" rel=\"noopener\">challenge-inclusion.fr<span class=\"visually-hidden\"> (nouvelle fenêtre)</span></a>.</p>"
      + "<p>Les collectivités souhaitant d'autres renseignements peuvent contacter&nbsp;: <a href=\"mailto:prevention@territoria-mutuelle.org\">prevention@territoria-mutuelle.org</a>.</p>"
  },

  {
    id: "septembre-bouge-2026",
    title: "«&nbsp;Septembre bouge&nbsp;»&nbsp;: le sport, réflexe santé du quotidien",
    dateLabel: "1ᵉʳ septembre 2026", dateISO: "2026-09-01",
    categorie: "actualite", theme: "activite-physique", type: "article", tag: "Activité physique et sportive",
    image: "assets/img/actu-septembre-bouge.jpg",
    excerpt: "Le ministère chargé des sports lance la première édition du mois «&nbsp;Septembre bouge&nbsp;» pour faire de l'activité physique un réflexe du quotidien. TERRITORIA mutuelle salue l'initiative.",
    external: null,
    body: "<p>Cette année, le ministère en charge des sports lance la première édition du mois «&nbsp;Septembre bouge&nbsp;».</p>"
      + "<p>Objectif&nbsp;: promouvoir le sport comme levier de santé et de bien-être, et faire de l'activité physique et sportive un réflexe du quotidien pour les Françaises et les Français.</p>"
      + "<p>Pour cela, différentes initiatives sont proposées&nbsp;:</p>"
      + "<ul>"
      + "<li>Une tournée nationale à travers 18 villes-étapes&nbsp;;</li>"
      + "<li>Des événements portés par des clubs, associations, collectivités et entreprises partout en France pendant le mois de septembre&nbsp;;</li>"
      + "<li>Plus de 150 séances en ligne (yoga, pilates, renforcement musculaire, gym douce, etc.) proposées par la Fédération Française du Sport en Entreprise (FFSE) sur son portail Vital Fit. Ces séances, accessibles à tous et gratuites, durent 30 minutes et sont animées par des coachs certifiés&nbsp;;</li>"
      + "<li>Des défis comme le Challenge «&nbsp;Santé mentale&nbsp;» de Macadam&nbsp;: téléchargez l'application et, du 1<sup>er</sup> au 30 septembre, marchez 30 minutes par jour (soit environ 4&nbsp;000 pas) pendant 30 jours consécutifs — un objectif directement inspiré des recommandations de l'OMS en matière d'activité physique. Tout au long du parcours, des messages pédagogiques rappellent les bienfaits scientifiquement démontrés de la marche sur la santé mentale&nbsp;: réduction du stress, de l'anxiété et du risque de dépression.</li>"
      + "</ul>"
      + "<p>TERRITORIA mutuelle, qui a inscrit les démarches de prévention par l'activité physique parmi ses actions et accompagnements auprès des collectivités, salue cette initiative et encourage toutes et tous à inscrire toujours plus le mouvement dans leur vie de tous les jours&nbsp;!</p>"
      + "<p>Informations sur le site du ministère&nbsp;: <a href=\"https://www.sports.gouv.fr/septembre-bouge-2026\" target=\"_blank\" rel=\"noopener\">sports.gouv.fr<span class=\"visually-hidden\"> (nouvelle fenêtre)</span></a>.</p>"
  },

  {
    id: "salon-des-maires-2026",
    title: "TERRITORIA mutuelle présente au Salon des maires 2026",
    dateLabel: "4 septembre 2026", dateISO: "2026-09-04",
    categorie: "actualite", theme: "evenement", type: "article", tag: "Événement",
    image: "assets/img/actu-salon-des-maires.png",
    excerpt: "Du 24 au 26 novembre 2026, retrouvez TERRITORIA mutuelle au Salon des maires et des collectivités locales, sur le stand APICIL/TERRITORIA.",
    external: null,
    body: "<p>TERRITORIA mutuelle sera présente au Salon des maires et des collectivités locales aux côtés de TERRITORIA prévoyance et d'APICIL, sur le stand APICIL/TERRITORIA.</p>"
      + "<p>Nous aurons ainsi l'occasion d'accueillir collectivités et partenaires tout au long de ce salon pour échanger sur la prévention et la promotion de la santé, la QVCT ou encore l'action sociale, missions pilotées par la mutuelle.</p>"
      + "<p>Au-delà de l'accueil sur le stand, un temps fort est d'ores et déjà à noter&nbsp;: <strong>Le Lab</strong> organisé par TERRITORIA/APICIL le <strong>mercredi 25 novembre de 17h à 17h30</strong>, proposant d'interroger les leviers permettant de concilier attractivité des métiers territoriaux, qualité de vie au travail et sens retrouvé de la mission d'intérêt général. Quelles conditions pour un service public local à la fois inclusif, solidaire et durable&nbsp;?</p>"
      + "<p>Cette séquence sera annoncée dans le programme du salon et rediffusée sur la chaîne YouTube Maires.tv.</p>"
      + "<p>N'hésitez pas à d'ores et déjà bloquer la date&nbsp;!</p>"
      + "<h3>Informations pratiques</h3>"
      + "<ul>"
      + "<li><strong>Salon des maires et des collectivités locales</strong></li>"
      + "<li>Du 24 au 26 novembre 2026</li>"
      + "<li>Paris – Porte de Versailles</li>"
      + "</ul>"
      + "<p><a href=\"https://www.salondesmaires.com/\" target=\"_blank\" rel=\"noopener\">salondesmaires.com<span class=\"visually-hidden\"> (nouvelle fenêtre)</span></a></p>"
  },

  {
    id: "offre-formation-territoria",
    title: "Une offre de formation en cours d'élaboration",
    dateLabel: "4 septembre 2026", dateISO: "2026-09-04",
    categorie: "actualite", theme: "formation", type: "article", tag: "Formation",
    image: "assets/img/actu-formation.svg",
    excerpt: "TERRITORIA mutuelle devient son propre organisme de formation pour accompagner agents et élus sur les questions de prévention et de qualité de vie au travail.",
    external: null,
    body: "<p>Afin d'accompagner au mieux les agents territoriaux et les collectivités sur les questions liées à la prévention et à la qualité de vie au travail, TERRITORIA mutuelle a décidé de devenir son propre organisme de formation et de proposer une offre adaptée aux besoins des agents comme des élus.</p>"
      + "<p>À travers cette offre, TERRITORIA entend soutenir la montée en connaissances et en compétences des directeurs, managers, agents de prévention et agents en recherche de développement de leurs savoirs, savoir-faire ou savoir-être, mais aussi des élus, pour les accompagner dans l'appréhension des problématiques relatives à la prévention et à la QVCT.</p>"
      + "<p>Actuellement en cours de construction, cette offre sera accessible sur la <a href=\"promotion-sante.html\">page dédiée à la formation</a> de notre site.</p>"
  }

];
