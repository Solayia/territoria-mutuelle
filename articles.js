/* ============================================================
   ACTUALITÉS & RESSOURCES — TERRITORIA mutuelle
   ------------------------------------------------------------
   Pour AJOUTER une actualité : copiez un bloc { ... } ci-dessous.
   Champs :
     id        : identifiant unique (sans espace, ex "cap-bienetre-2026")
     title     : titre
     dateLabel : date affichée (ex "15 juin 2026")
     dateISO   : date pour le tri (ex "2026-06-15")
     theme     : thématique (voir valeurs des filtres : qvct, sante-mentale,
                 alimentation, inclusion, reseau-militant, actualites, ...)
     type      : type de ressource (article, webinaire, podcast, guide,
                 infographie, video, affiche, flyer, web, application)
     tag       : petit libellé affiché sur la carte
     image     : URL de l'image (vignette)
     excerpt   : résumé court
     external  : (optionnel) URL externe / PDF. Si renseigné, le clic ouvre
                 directement ce lien au lieu d'une page article.
     body      : contenu HTML de l'article (ignoré si "external" est renseigné)
   ============================================================ */
window.ARTICLES = [
  {
    id: "cap-bienetre-2026",
    title: "Lancement du programme CAP BIEN-ÊTRE 2026",
    dateLabel: "15 juin 2026", dateISO: "2026-06-15",
    theme: "qvct", type: "webinaire", tag: "Prévention",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Découvrez notre nouveau programme de webinaires dédiés au bien-être et à la santé des agents territoriaux.",
    external: null,
    body: "<p>TERRITORIA mutuelle lance son cycle de webinaires <strong>CAP BIEN-ÊTRE 2026</strong>, dédié à la santé et au bien-être au travail des agents territoriaux.</p><p>Animés par des experts, ces rendez-vous en ligne abordent des thématiques variées : prévention des risques, activité physique, santé mentale, alimentation, sommeil… Ils sont accessibles à l'ensemble des collectivités adhérentes.</p><p>Retrouvez l'ensemble des dates et des thèmes dans le calendrier téléchargeable ci-dessous.</p><p><a class=\"download-link\" href=\"assets/docs/calendrier-cap-bienetre-2026.pdf\" target=\"_blank\" rel=\"noopener\" download>Télécharger le calendrier CAP BIEN-ÊTRE 2026 (PDF)</a></p>"
  },
  {
    id: "prevention-tms-guide",
    title: "Prévention des TMS : guide pratique pour les collectivités",
    dateLabel: "10 juin 2026", dateISO: "2026-06-10",
    theme: "activite-physique", type: "guide", tag: "Santé",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Un guide complet pour mettre en place des actions de prévention des troubles musculo-squelettiques dans votre collectivité.",
    external: null,
    body: "<p>Les troubles musculo-squelettiques (TMS) représentent l'une des premières causes d'arrêt de travail dans la fonction publique territoriale.</p><p>Ce guide pratique propose des repères concrets pour identifier les situations à risque, sensibiliser les agents et déployer des actions de prévention adaptées aux métiers territoriaux.</p><p>Pour recevoir la version complète du guide ou organiser une intervention, contactez notre équipe prévention.</p>"
  },
  {
    id: "congres-andrhdt-2026",
    title: "TERRITORIA mutuelle au congrès de l'ANDRHDT",
    dateLabel: "2 juin 2026", dateISO: "2026-06-02",
    theme: "actualites", type: "article", tag: "Événement",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Retour sur notre participation au congrès annuel de l'Association Nationale des DRH des Territoires.",
    external: null,
    body: "<p>TERRITORIA mutuelle était présente au congrès annuel de l'ANDRHDT, temps fort d'échanges avec les responsables RH des collectivités territoriales.</p><p>L'occasion de présenter nos actions en matière de prévention, de promotion de la santé et de qualité de vie au travail, et d'échanger sur les enjeux de terrain des collectivités.</p>"
  },
  {
    id: "ibet-indice-bienetre",
    title: "Nouveau : l'Indice de Bien-Être au Travail (IBET)",
    dateLabel: "25 mai 2026", dateISO: "2026-05-25",
    theme: "qvct", type: "article", tag: "Innovation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Un outil pour mesurer et suivre le bien-être de vos agents au quotidien.",
    external: null,
    body: "<p>L'Indice de Bien-Être au Travail (IBET) permet aux collectivités de mesurer et de suivre dans le temps le bien-être de leurs agents.</p><p>Intégré à certaines conventions, il constitue un point de départ précieux pour construire un plan d'action QVCT adapté aux réalités de chaque collectivité.</p>"
  },
  {
    id: "sante-mentale-au-travail",
    title: "Santé mentale au travail : agir ensemble",
    dateLabel: "18 mai 2026", dateISO: "2026-05-18",
    theme: "sante-mentale", type: "article", tag: "QVCT",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Les clés pour promouvoir la santé mentale et prévenir les risques psychosociaux dans la fonction publique territoriale.",
    external: null,
    body: "<p>La santé mentale au travail est un enjeu majeur pour les collectivités. Prévenir les risques psychosociaux, c'est agir à la fois sur l'organisation, le management et l'accompagnement des agents.</p><p>TERRITORIA mutuelle propose des ressources et des interventions pour sensibiliser, former et outiller les collectivités sur ce sujet.</p>"
  },
  {
    id: "tmag-12-qvct",
    title: "T MAG #12 : dossier spécial QVCT",
    dateLabel: "5 mai 2026", dateISO: "2026-05-05",
    theme: "qvct", type: "article", tag: "Publication",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Le dernier numéro de T MAG consacre un dossier complet à la Qualité de Vie et aux Conditions de Travail.",
    external: null,
    body: "<p>Le numéro 12 de <strong>T MAG</strong> consacre son dossier central à la Qualité de Vie et aux Conditions de Travail (QVCT) dans la fonction publique territoriale.</p><p>Au sommaire : retours d'expérience de collectivités, éclairages d'experts et présentation des dispositifs d'accompagnement TERRITORIA mutuelle.</p>"
  }
];
