
// Language Switcher for GameCritique

// Variables globales
let currentLanguage = localStorage.getItem('language') || 'fr';

// Store translations for all text elements
const translations = {
    // Navigation
    'nav_home': {
        'fr': 'Accueil',
        'en': 'Home'
    },
    
    // Game titles
    'game_title_atelier_yumia': {
        'fr': 'Atelier Yumia : L\'Alchimiste des Souvenirs et la Terre Rêvée',
        'en': 'Atelier Yumia: The Alchemist of Memories & the Envisioned Land'
    },
    'game_title_my_little_universe': {
        'fr': 'My Little Universe',
        'en': 'My Little Universe'
    },
    'game_title_pilo_holobook': {
        'fr': 'Pilo and the Holobook',
        'en': 'Pilo and the Holobook'
    },
    'game_title_whisker_waters': {
        'fr': 'Whisker Waters',
        'en': 'Whisker Waters'
    },
    'game_title_split_fiction': {
        'fr': 'Split Fiction',
        'en': 'Split Fiction'
    },
    'game_title_gal_guardians': {
        'fr': 'Gal Guardians: Servant of the Dark',
        'en': 'Gal Guardians: Servant of the Dark'
    },
    
    // Test page titles
    'atelier_yumia_title': {
        'fr': 'Atelier Yumia : L\'Alchimiste des Souvenirs et la Terre Rêvée - GameCritique',
        'en': 'Atelier Yumia: The Alchemist of Memories & the Envisioned Land - GameCritique'
    },
    'my_little_universe_title': {
        'fr': 'My Little Universe - GameCritique',
        'en': 'My Little Universe - GameCritique'
    },
    'pilo_holobook_title': {
        'fr': 'Pilo and the Holobook : Un petit bijou indé qui fait scanner notre cœur de gamer - GameCritique',
        'en': 'Pilo and the Holobook: An indie gem that scans our gamer heart - GameCritique'
    },
    'pilo_holobook_short_title': {
        'fr': 'Pilo and the Holobook',
        'en': 'Pilo and the Holobook'
    },
    'whisker_waters_title': {
        'fr': 'Whisker Waters : Une Aventure de Pêche Inattendue - GameCritique',
        'en': 'Whisker Waters: An Unexpected Fishing Adventure - GameCritique'
    },
    'whisker_waters_short_title': {
        'fr': 'Whisker Waters',
        'en': 'Whisker Waters'
    },
    'split_fiction_page_title': {
        'fr': 'Split Fiction : Le Nouveau Jeu Coopératif des Créateurs de It Takes Two - GameCritique',
        'en': 'Split Fiction: The New Cooperative Game from the Creators of It Takes Two - GameCritique'
    },
    'gal_guardians_title': {
        'fr': 'Gal Guardians: Servant of the Dark – Les servantes du pixel hardcore ! - GameCritique',
        'en': 'Gal Guardians: Servant of the Dark – The hardcore pixel servants! - GameCritique'
    },
    'gal_guardians_short_title': {
        'fr': 'Gal Guardians: Servant of the Dark',
        'en': 'Gal Guardians: Servant of the Dark'
    },
    'gal_guardians_subtitle': {
        'fr': 'Un Metroidvania sauce magical girls gothiques où la finesse du pixel art rencontre l\'intensité de l\'action.',
        'en': 'A Metroidvania with gothic magical girls where fine pixel art meets intense action.'
    },
    'gal_guardians_description': {
        'fr': 'Un Metroidvania sauce magical girls gothiques où la finesse du pixel art rencontre l\'intensité de l\'action. Découvrez notre test complet de ce jeu d\'action-plateforme rétro.',
        'en': 'A Metroidvania with gothic magical girls where fine pixel art meets intense action. Discover our complete review of this retro action-platform game.'
    },
    
    // Publication dates
    'publication_date_atelier': {
        'fr': '21 mars 2025',
        'en': 'March 21, 2025'
    },
    'publication_date_universe': {
        'fr': '28 avril 2025',
        'en': 'April 28, 2025'
    },
    'my_little_universe_release_date': {
        'fr': '5 octobre 2023 (Switch, PC, consoles)',
        'en': 'October 5, 2023 (Switch, PC, consoles)'
    },
    'my_little_universe_subtitle': {
        'fr': 'Un jeu où Mario Galaxy rencontre Minecraft, le tout arrosé d\'une bonne grosse dose de farme intensive.',
        'en': 'A game where Mario Galaxy meets Minecraft, all sprinkled with a good dose of intensive farming.'
    },
    'publication_date_pilo': {
        'fr': '10 avril 2024',
        'en': 'April 10, 2024'
    },
    'publication_date_whisker': {
        'fr': '18 mai 2024',
        'en': 'May 18, 2024'
    },
    'publication_date_split': {
        'fr': 'À venir',
        'en': 'Coming soon'
    },
    'publication_date_gal_guardians': {
        'fr': '10 mai 2025',
        'en': 'May 10, 2025'
    },
    'gal_guardians_release_date': {
        'fr': '2023',
        'en': '2023'
    },
    'gal_guardians_test_based_on': {
        'fr': 'Test basé sur environ 3h de jeu en solo',
        'en': 'Review based on approximately 3 hours of solo gameplay'
    },
    'gal_guardians_intro_text': {
        'fr': 'Quand les créateurs de Bloodstained: Curse of the Moon reviennent à la charge avec un Metroidvania sauce magical girls gothiques, ça donne Gal Guardians: Servant of the Dark. Un jeu où la finesse du pixel art rencontre l\'intensité de l\'action, le tout enrobé d\'une ambiance délicieusement rétro. J\'ai passé 3 heures en solo sur TikTok Live à m\'immerger dans ce titre, et voici mon retour sur ce petit bijou de plateforme bourré de charme… et de nostalgie.',
        'en': 'When the creators of Bloodstained: Curse of the Moon return with a gothic magical girl Metroidvania, you get Gal Guardians: Servant of the Dark. A game where the finesse of pixel art meets the intensity of action, all wrapped in a deliciously retro atmosphere. I spent 3 hours solo on TikTok Live immersing myself in this title, and here is my feedback on this little platforming gem full of charm… and nostalgia.'
    },
    'gal_guardians_story_title': {
        'fr': 'Une histoire de loyauté démoniaque…',
        'en': 'A Story of Demonic Loyalty…'
    },
    'gal_guardians_story_text': {
        'fr': 'Le pitch ? Deux servantes badass d\'un seigneur démon massacré par une faction ennemie doivent réunir leurs forces pour ressusciter leur maître. L\'histoire ne révolutionne pas le genre, mais elle remplit son rôle avec efficacité, soutenue par un univers dark-fantasy stylé et une mise en scène qui joue habilement la carte de la série animée old school.',
        'en': 'The pitch? Two badass servants of a demon lord slaughtered by an enemy faction must join forces to resurrect their master. The story doesn\'t revolutionize the genre, but it fulfills its role effectively, supported by a stylish dark-fantasy universe and a staging that skillfully plays the old-school anime card.'
    },
    'gal_guardians_gameplay_title': {
        'fr': 'Un gameplay nerveux entre sabres, sorts et secrets',
        'en': 'Nervous Gameplay Between Sabers, Spells, and Secrets'
    },
    'gal_guardians_gameplay_duality_bold': {
        'fr': 'Dualité de gameplay',
        'en': 'Gameplay Duality'
    },
    'gal_guardians_gameplay_duality_text': {
        'fr': 'Les deux héroïnes offrent des styles de jeu bien distincts : l\'une au corps-à-corps, l\'autre à distance. Et on peut switcher à volonté entre elles pour s\'adapter aux ennemis ou puzzles.',
        'en': 'The two heroines offer very distinct playstyles: one melee, the other ranged. And you can switch at will between them to adapt to enemies or puzzles.'
    },
    'gal_guardians_gameplay_castle_bold': {
        'fr': 'Un château évolutif',
        'en': 'An Evolving Castle'
    },
    'gal_guardians_gameplay_castle_text': {
        'fr': 'L\'exploration se fait dans un immense château qui évolue au fil de vos prouesses. Plus vous progressez, plus vous débloquez de zones, d\'objets cachés (dont des boosts de PV), et d\'améliorations environnementales qui changent l\'architecture.',
        'en': 'Exploration takes place in a huge castle that evolves with your prowess. The more you progress, the more you unlock zones, hidden items (including HP boosts), and environmental upgrades that change the architecture.'
    },
    'gal_guardians_gameplay_levelup_bold': {
        'fr': 'Système de level-up',
        'en': 'Level-up System'
    },
    'gal_guardians_gameplay_levelup_text': {
        'fr': 'Vos personnages montent en puissance via un système d\'expérience agréable et bien dosé, avec des compétences à débloquer via des orbes dropés par les ennemis ou trouvés dans les recoins du château.',
        'en': 'Your characters grow in power via a pleasant and well-balanced experience system, with skills to unlock via orbs dropped by enemies or found in the castle\'s corners.'
    },
    'gal_guardians_gameplay_multiplayer_bold': {
        'fr': 'Multijoueur',
        'en': 'Multiplayer'
    },
    'gal_guardians_gameplay_multiplayer_text': {
        'fr': 'Si vous aimez souffrir à deux, sachez qu\'un mode coop local et en ligne est dispo. Non testé ici, mais il promet de belles tranches de rigolade et de stratégie à deux.',
        'en': 'If you like suffering together, know that a local and online coop mode is available. Not tested here, but it promises good laughs and strategy for two.'
    },
    'gal_guardians_gameplay_difficulty_bold': {
        'fr': 'Difficultés variées',
        'en': 'Varied Difficulties'
    },
    'gal_guardians_gameplay_difficulty_text': {
        'fr': 'Plusieurs modes sont disponibles pour s\'adapter à tous les profils : du chill au mode hardcore façon vieux Castlevania qui t\'envoie en enfer à la moindre erreur.',
        'en': 'Several modes are available to suit all profiles: from chill to hardcore mode like old Castlevania that sends you to hell at the slightest mistake.'
    },
    'gal_guardians_art_title': {
        'fr': 'Direction artistique et ambiance : un charme rétro assumé',
        'en': 'Art Direction and Atmosphere: Assumed Retro Charm'
    },
    'gal_guardians_art_pixel_bold': {
        'fr': 'Le pixel art',
        'en': 'Pixel Art'
    },
    'gal_guardians_art_pixel_text': {
        'fr': 'est fin, coloré, avec des animations expressives et des environnements détaillés. Les attaques sont lisibles, stylisées et cohérentes avec l\'univers gothique/magical girl du jeu.',
        'en': 'is fine, colorful, with expressive animations and detailed environments. Attacks are legible, stylized, and consistent with the game\'s gothic/magical girl universe.'
    },
    'gal_guardians_art_sound_bold': {
        'fr': 'Côté bande-son',
        'en': 'Soundtrack Side'
    },
    'gal_guardians_art_sound_text': {
        'fr': 'c\'est du bon. Les musiques accompagnent très bien l\'action, avec des pistes tantôt épiques, tantôt mélancoliques, qui rappellent les classiques du genre sans tomber dans le plagiat.',
        'en': 'it\'s good stuff. The music accompanies the action very well, with tracks sometimes epic, sometimes melancholic, reminiscent of genre classics without falling into plagiarism.'
    },
    'gal_guardians_conclusion_text': {
        'fr': 'Gal Guardians: Servant of the Dark est un excellent hommage aux jeux d\'action-plateforme des années 90, mais avec le confort moderne. Il n\'invente rien, mais il maîtrise tout : gameplay solide, direction artistique charmante, progression gratifiante et un mode coop qui peut pimenter vos sessions à deux. Un indispensable pour les fans de Castlevania, Bloodstained ou tout simplement d\'action rétro avec un cœur pixelisé.',
        'en': 'Gal Guardians: Servant of the Dark is an excellent tribute to 90s action-platformers, but with modern comfort. It reinvents nothing, but masters everything: solid gameplay, charming art direction, rewarding progression, and a coop mode that can spice up your sessions for two. A must-have for fans of Castlevania, Bloodstained, or simply retro action with a pixelated heart.'
    },
    'gal_guardians_trailer_title': {
        'fr': 'Tu veux voir ce que ça donne en mouvement ?',
        'en': 'Want to See It in Motion?'
    },
    'gal_guardians_trailer_text1': {
        'fr': 'Mate le trailer officiel ici :',
        'en': 'Check out the official trailer here:'
    },
    'gal_guardians_trailer_text2': {
        'fr': 'Alors, prêt à ressusciter ton maître et botter des culs démoniaques ?<br>Fonce découvrir ce Metroidvania punchy et stylé !',
        'en': 'So, ready to resurrect your master and kick some demonic asses?<br>Go discover this punchy and stylish Metroidvania!'
    },
    'gal_guardians_pro_1': { 'fr': 'Pixel art mignon et efficace', 'en': 'Cute and effective pixel art' },
    'gal_guardians_pro_2': { 'fr': 'Gameplay dualité : corps-à-corps et distance', 'en': 'Duality gameplay: melee and ranged' },
    'gal_guardians_pro_3': { 'fr': 'Évolution du château', 'en': 'Castle evolution' },
    'gal_guardians_pro_4': { 'fr': 'Système de compétences et level-up agréable', 'en': 'Pleasant skill system and level-up' },
    'gal_guardians_pro_5': { 'fr': 'Mode 2 joueurs (coop locale et à distance)', 'en': '2-player mode (local and online coop)' },
    'gal_guardians_con_1': { 'fr': 'Une histoire très classique', 'en': 'A very classic story' },
    'gal_guardians_con_2': { 'fr': 'Ressenti de déjà-vu si vous avez poncé les Metroidvania', 'en': 'Déjà vu feeling if you\'ve played many Metroidvanias' },
    'gal_guardians_score': { 'fr': '3.5', 'en': '3.5' },
    'nav_tests': {
        'fr': 'Tests',
        'en': 'Reviews'
    },
    'nav_interviews': {
        'fr': 'Interviews',
        'en': 'Interviews'
    },
    'nav_partnerships': {
        'fr': 'Partenariats',
        'en': 'Partnerships'
    },
    'nav_about': {
        'fr': 'À propos',
        'en': 'About'
    },
    
    // Meta tags and page titles
    'site_description': {
        'fr': 'Découvrez les meilleurs RPG et Jeux Indépendants avec des tests complets, des analyses détaillées et des avis d\'experts sur GameCritique.',
        'en': 'Discover the best RPGs and Indie Games with comprehensive reviews, detailed analyses, and expert opinions on GameCritique.'
    },
    'home_page_title': {
        'fr': 'Accueil - GameCritique',
        'en': 'Home - GameCritique'
    },
    'reviews_page_title': {
        'fr': 'Tests - GameCritique',
        'en': 'Reviews - GameCritique'
    },
    'reviews_page_description': {
        'fr': 'Découvrez mes analyses détaillées et mes avis sur les dernières sorties et les grands classiques du jeu vidéo, spécialisés dans les RPG et jeux indépendants.',
        'en': 'Discover my detailed analyses and opinions on the latest releases and the great classics of video games, specialized in RPGs and indie games.'
    },
    'interviews_page_title': {
        'fr': 'Interviews - GameCritique',
        'en': 'Interviews - GameCritique'
    },
    'interviews_page_description': {
        'fr': 'Découvrez mes entretiens exclusifs avec les développeurs, artistes et personnalités du monde du jeu vidéo, spécialisés dans les RPG et jeux indépendants.',
        'en': 'Discover my exclusive interviews with developers, artists and personalities from the video game world, specialized in RPGs and indie games.'
    },
    // Interviews page specific labels
    'interviews_title': {
        'fr': 'Mes Interviews',
        'en': 'My Interviews'
    },
    'interviews_subtitle': {
        'fr': 'Découvrez mes entretiens exclusifs avec les développeurs, artistes et personnalités du monde du jeu vidéo.',
        'en': 'Discover my exclusive interviews with developers, artists, and personalities from the video game world.'
    },
    'latest_interviews': {
        'fr': 'Dernières Interviews',
        'en': 'Latest Interviews'
    },
    // Biomorph interview card
    'biomorph_studio': {
        'fr': 'Lucid Dreams Studio',
        'en': 'Lucid Dreams Studio'
    },
    'biomorph_title': {
        'fr': 'BIOMORPH',
        'en': 'BIOMORPH'
    },
    'biomorph_date': {
        'fr': '14 Avril 2024',
        'en': 'April 14, 2024'
    },
    'biomorph_excerpt': {
        'fr': 'Une plongée dans les coulisses de ce metroidvania innovant avec une mécanique unique de transformation.',
        'en': 'A dive behind the scenes of this innovative metroidvania with a unique transformation mechanic.'
    },
    // Interview categories section
    'interview_categories': {
        'fr': "Catégories d'Interviews",
        'en': 'Interview Categories'
    },
    'interview_categories_text': {
        'fr': 'Mes interviews sont organisées en plusieurs catégories pour vous aider à trouver le contenu qui vous intéresse :',
        'en': 'My interviews are organized into several categories to help you find the content that interests you:'
    },
    'developers_category': {
        'fr': 'Développeurs',
        'en': 'Developers'
    },
    'developers_description': {
        'fr': 'Discussions avec les créateurs de jeux sur leur processus créatif et leurs inspirations',
        'en': 'Discussions with game creators about their creative process and inspirations'
    },
    'publishers_category': {
        'fr': 'Éditeurs',
        'en': 'Publishers'
    },
    'publishers_description': {
        'fr': "Échanges avec les éditeurs sur les tendances de l'industrie et leurs stratégies",
        'en': 'Insights from publishers on industry trends and their strategies'
    },
    // Contact section (interviews page)
    'contact_interview_text': {
        'fr': "Vous êtes développeur, artiste ou acteur de l'industrie du jeu vidéo et souhaitez partager votre expérience ? Contactez-moi pour organiser une interview.",
        'en': 'Are you a developer, artist, or professional in the video game industry and want to share your experience? Contact me to arrange an interview.'
    },
    'email_label': {
        'fr': 'Email:',
        'en': 'Email:'
    },
    'partenariat_page_title': {
        'fr': 'Partenariats - GameCritique.',
        'en': 'Partnerships - GameCritique.'
    },
    'apropos_page_title': {
        'fr': 'À propos - GameCritique',
        'en': 'About - GameCritique'
    },
    'about_page_description': {
        'fr': 'Découvrez l\'histoire, la mission et les valeurs de GameCritique, votre référence pour les tests de jeux vidéo spécialisés dans les RPG et jeux indépendants.',
        'en': 'Discover the history, mission and values of GameCritique, your reference for video game reviews specialized in RPGs and indie games.'
    },
    'about_title': {
        'fr': 'À propos de GameCritique',
        'en': 'About GameCritique'
    },
    'about_subtitle': {
        'fr': 'Découvrez mon histoire, ma mission et mes valeurs.',
        'en': 'Discover my story, mission and values.'
    },
    'about_section1_title': {
        'fr': 'GameCritique : L\'extension de mon univers TikTok',
        'en': 'GameCritique: The extension of my TikTok universe'
    },
    'about_paragraph1': {
        'fr': 'Je suis jRPGcontentCreator, créateur de contenu et passionné de jeux vidéo depuis les années 90. Mon aventure a commencé sur TikTok, où je partage au quotidien mini-découvertes, bandes-annonces, unboxings et avis à chaud sur les jeux que je teste.',
        'en': 'I am jRPGcontentCreator, content creator and video game enthusiast since the 90s. My adventure began on TikTok, where I share daily mini-discoveries, trailers, unboxings and first impressions on the games I test.'
    },
    'about_paragraph2': {
        'fr': 'GameCritique n\'est pas un média comme les autres, c\'est une extension de mon univers, un espace où je regroupe mes analyses, mes ressentis et mes critiques les plus détaillées. Un complément à mes vidéos, pensé pour les joueurs curieux, mais aussi pour les éditeurs, développeurs et distributeurs qui souhaitent avoir un retour sincère sur leurs titres.',
        'en': 'GameCritique is not a media like the others, it\'s an extension of my universe, a space where I gather my analyses, my feelings and my most detailed reviews. A complement to my videos, designed for curious players, but also for publishers, developers and distributors who want to have sincere feedback on their titles.'
    },
    'about_section2_title': {
        'fr': 'Ma mission avec GameCritique',
        'en': 'My mission with GameCritique'
    },
    'about_paragraph3': {
        'fr': 'Si vous me suivez sur TikTok, vous savez que je ne fais pas dans la complaisance. Chaque jeu est testé avec sérieux, mais toujours avec passion et honnêteté.',
        'en': 'If you follow me on TikTok, you know that I don\'t do complacency. Each game is tested seriously, but always with passion and honesty.'
    },
    'about_list_item1': {
        'fr': '🎮 Un avis approfondi : ici, pas de survol rapide, j\'explore chaque jeu à fond',
        'en': '🎮 An in-depth opinion: here, no quick overview, I explore each game thoroughly'
    },
    'about_list_item2': {
        'fr': '🕹️ Un espace indépendant : pas d\'influence extérieure, juste mon ressenti authentique',
        'en': '🕹️ An independent space: no outside influence, just my authentic feeling'
    },
    'about_list_item3': {
        'fr': '📱 Un complément à mes vidéos TikTok : là où je peux aller plus en détail sur mes tests',
        'en': '📱 A complement to my TikTok videos: where I can go into more detail on my reviews'
    },
    'about_list_item4': {
        'fr': '🎥 Un outil pour les éditeurs & développeurs : un lieu où leur travail est mis en valeur, avec un regard critique et constructif',
        'en': '🎥 A tool for publishers & developers: a place where their work is highlighted, with a critical and constructive eye'
    },
    'about_list_item5': {
        'fr': '🌍 Un lien direct avec la communauté : un espace où je peux archiver mes retours et prolonger nos échanges',
        'en': '🌍 A direct link with the community: a space where I can archive my feedback and extend our exchanges'
    },
    'about_paragraph4': {
        'fr': 'GameCritique, c\'est mon carnet de bord vidéoludique, un lieu où je prends le temps de poser mes idées et d\'offrir aux joueurs et aux professionnels du milieu un regard sincère sur l\'industrie.',
        'en': 'GameCritique is my video game logbook, a place where I take the time to lay down my ideas and offer players and industry professionals a sincere look at the industry.'
    },
    'about_paragraph5': {
        'fr': 'Que ce soit en vidéo, en stream ou ici, une seule promesse : parler gaming avec passion, expertise et une pointe de fun !',
        'en': 'Whether in video, stream or here, only one promise: talk gaming with passion, expertise and a touch of fun!'
    },
    'about_section3_title': {
        'fr': 'Mon système de notation',
        'en': 'My rating system'
    },
    'about_rating_intro': {
        'fr': 'J\'utilise un système de notation sur 5 étoiles pour évaluer les jeux que je teste. Voici ce que signifie chaque note :',
        'en': 'I use a 5-star rating system to evaluate the games I test. Here\'s what each rating means:'
    },
    'rating_5': {
        'fr': '- Chef-d\'œuvre, une expérience exceptionnelle et incontournable',
        'en': '- Masterpiece, an exceptional and essential experience'
    },
    'rating_4_5': {
        'fr': '- Excellent, presque parfait avec quelques détails mineurs à améliorer',
        'en': '- Excellent, almost perfect with some minor details to improve'
    },
    'rating_4': {
        'fr': '- Très bon jeu, hautement recommandé malgré quelques défauts',
        'en': '- Very good game, highly recommended despite some flaws'
    },
    'rating_3_5': {
        'fr': '- Bon jeu avec des qualités évidentes mais aussi des lacunes notables',
        'en': '- Good game with obvious qualities but also notable shortcomings'
    },
    'rating_3': {
        'fr': '- Jeu moyen, peut plaire aux fans du genre mais présente des problèmes',
        'en': '- Average game, may appeal to fans of the genre but has problems'
    },
    'rating_2': {
        'fr': '- Décevant, difficile à recommander même avec quelques bonnes idées',
        'en': '- Disappointing, difficult to recommend even with some good ideas'
    },
    'rating_1': {
        'fr': '- À éviter, présente de sérieux problèmes fondamentaux',
        'en': '- To avoid, has serious fundamental problems'
    },
    'about_contact_text': {
        'fr': 'Vous avez des questions, des suggestions ou souhaitez collaborer avec moi ? N\'hésitez pas à me contacter pour échanger sur vos idées ou propositions.',
        'en': 'Do you have questions, suggestions or wish to collaborate with me? Feel free to contact me to discuss your ideas or proposals.'
    },
    
    // Home page
    'hero_title': {
        'fr': 'Découvrez les meilleurs RPG et Jeux Indépendants',
        'en': 'Discover the best RPGs and Indie Games'
    },
    'hero_subtitle': {
        'fr': 'Des tests complets, des analyses détaillées et des avis d\'experts sur les RPG en tout genre et les pépites indépendantes.',
        'en': 'Comprehensive reviews, detailed analyses, and expert opinions on all types of RPGs and indie gems.'
    },
    'see_latest_reviews': {
        'fr': 'Voir les derniers tests',
        'en': 'See latest reviews'
    },
    'featured_rpg': {
        'fr': 'RPG Vedette',
        'en': 'Featured RPG'
    },
    'indie_games_discover': {
        'fr': 'Jeux Indépendants à découvrir',
        'en': 'Indie Games to discover'
    },
    'read_review': {
        'fr': 'Lire le test',
        'en': 'Read review'
    },
    'stay_informed': {
        'fr': 'Restez Informé',
        'en': 'Stay Informed'
    },
    'newsletter_text': {
        'fr': 'Abonnez-vous à ma newsletter pour recevoir les derniers tests et actualités du monde du jeu vidéo.',
        'en': 'Subscribe to my newsletter to receive the latest reviews and news from the video game world.'
    },
    
    // Footer
    'footer_reference': {
        'fr': 'Votre référence pour les tests de jeux vidéo.',
        'en': 'Your reference for video game reviews.'
    },
    'quick_links': {
        'fr': 'Liens rapides',
        'en': 'Quick links'
    },
    'follow_me': {
        'fr': 'Suivez-moi',
        'en': 'Follow me'
    },
    'copyright': {
        'fr': '© 2025 GameCritique. Tous droits réservés.',
        'en': '© 2025 GameCritique. All rights reserved.'
    },

    // Language switcher
    'language': {
        'fr': 'Langue',
        'en': 'Language'
    },
    'french': {
        'fr': 'Français',
        'en': 'French'
    },
    'english': {
        'fr': 'Anglais',
        'en': 'English'
    },
    
    // Partners page
    'partners_title': {
        'fr': 'Mes Partenaires',
        'en': 'My Partners'
    },
    'partners_subtitle': {
        'fr': 'Découvrez les éditeurs, développeurs et distributeurs qui collaborent avec GameCritique pour vous offrir les meilleures actualités et tests de jeux vidéo.',
        'en': 'Discover the publishers, developers and distributors who collaborate with GameCritique to bring you the best news and video game reviews.'
    },
    'publisher_partners': {
        'fr': 'Éditeurs Partenaires',
        'en': 'Publisher Partners'
    },
    'publisher_partners_text': {
        'fr': 'Je travaille en étroite collaboration avec ces éditeurs pour vous proposer des tests exclusifs et des informations de première main sur leurs jeux.',
        'en': 'I work closely with these publishers to offer you exclusive reviews and first-hand information about their games.'
    },
    'developer_partners': {
        'fr': 'Développeurs Partenaires',
        'en': 'Developer Partners'
    },
    'developer_partners_text': {
        'fr': 'Découvrez les studios de développement avec lesquels je collabore pour vous présenter leurs créations.',
        'en': 'Discover the development studios I collaborate with to present their creations.'
    },
    'distributor_partners': {
        'fr': 'Distributeurs Partenaires',
        'en': 'Distributor Partners'
    },
    'distributor_partners_text': {
        'fr': 'Je collabore avec ces distributeurs pour vous faire découvrir leurs catalogues de jeux et vous proposer des tests exclusifs.',
        'en': 'I collaborate with these distributors to help you discover their game catalogs and offer exclusive reviews.'
    },
    'become_partner': {
        'fr': 'Devenez Partenaire',
        'en': 'Become a Partner'
    },
    'become_partner_text': {
        'fr': 'Vous êtes un éditeur, un développeur ou un distributeur et souhaitez collaborer avec GameCritique ? Contactez-moi pour discuter des opportunités de partenariat.',
        'en': 'Are you a publisher, developer or distributor and would like to collaborate with GameCritique? Contact me to discuss partnership opportunities.'
    },
    'coming_soon': {
        'fr': 'Test à venir prochainement',
        'en': 'Review coming soon'
    },
    
    // Studio Camelia Partner Card
    'studio_camelia_name': {
        'fr': 'Studio Camelia',
        'en': 'Studio Camelia'
    },
    'studio_camelia_role': {
        'fr': 'Développeur',
        'en': 'Developer'
    },
    'studio_camelia_bio': {
        'fr': 'Studio de développement français créateur d\'ALZARA: Radiant Echoes, un JRPG inspiré des classiques avec une touche méditerranéenne.',
        'en': 'French development studio creator of ALZARA: Radiant Echoes, a JRPG inspired by classics with a Mediterranean touch.'
    },
    
    // Maximum Games Partner Card
    'maximum_games_name': {
        'fr': 'Maximum Games',
        'en': 'Maximum Games'
    },
    'maximum_games_role': {
        'fr': 'Distributeur',
        'en': 'Distributor'
    },
    'maximum_games_bio': {
        'fr': 'Éditeur et distributeur international de jeux vidéo, partenaire pour la distribution de Whisker Waters.',
        'en': 'International video game publisher and distributor, partner for the distribution of Whisker Waters.'
    },
    
    // Reviews page
    'reviews_title': {
        'fr': 'Mes Tests de Jeux Vidéo',
        'en': 'My Video Game Reviews'
    },
    'reviews_subtitle': {
        'fr': 'Découvrez mes analyses détaillées et mes avis sur les dernières sorties et les grands classiques du jeu vidéo.',
        'en': 'Discover my detailed analyses and opinions on the latest releases and the great classics of video games.'
    },
    'latest_reviews': {
        'fr': 'Derniers Tests',
        'en': 'Latest Reviews'
    },
    'contact_me': {
        'fr': 'Contactez-moi',
        'en': 'Contact me'
    },
    'contact_text': {
        'fr': 'Vous avez des suggestions de jeux à tester ou des commentaires sur mes analyses ? N\'hésitez pas à me contacter pour partager votre avis.',
        'en': 'Do you have suggestions for games to review or comments on my analyses? Feel free to contact me to share your opinion.'
    },
    
    // Game review pages
    'tested_written_by': {
        'fr': 'Testé et écrit par',
        'en': 'Tested and written by'
    },
    'test_based_on': {
        'fr': 'Test basé sur environ 6h de jeu en multijoueur local',
        'en': 'Review based on approximately 6 hours of local multiplayer gameplay'
    },
    'my_little_universe_test_based_on': {
        'fr': 'Test basé sur environ 6h de jeu en multijoueur local',
        'en': 'Review based on approximately 6 hours of local multiplayer gameplay'
    },
    'atelier_yumia_test_based_on': {
        'fr': 'Test basé sur la démo du jeu',
        'en': 'Review based on the game demo'
    },
    'name': {
        'fr': 'Nom',
        'en': 'Name'
    },
    'publisher': {
        'fr': 'Éditeur',
        'en': 'Publisher'
    },
    'developer': {
        'fr': 'Développeur',
        'en': 'Developer'
    },
    'distributor': {
        'fr': 'Distributeur',
        'en': 'Distributor'
    },
    'platforms': {
        'fr': 'Supports',
        'en': 'Platforms'
    },
    'release_date': {
        'fr': 'Date de sortie',
        'en': 'Release date'
    },
    'official_site': {
        'fr': 'Site officiel',
        'en': 'Official website'
    },
    'introduction': {
        'fr': 'Introduction',
        'en': 'Introduction'
    },
    'my_little_universe_intro_text': {
        'fr': 'Bienvenue dans cette review de <strong>My Little Universe</strong>, le jeu où Mario Galaxy rencontre Minecraft, le tout arrosé d\'une bonne grosse dose de farme intensive. Testé en duo avec ma femme (team love power), le jeu nous a offert 6h de pur kiff malgré mon petit scepticisme de départ — et oui, c\'est pas mon genre de base, mais l\'amour triomphe toujours !',
        'en': 'Welcome to this review of <strong>My Little Universe</strong>, the game where Mario Galaxy meets Minecraft, all sprinkled with a hefty dose of intensive farming. Tested as a duo with my wife (team love power), the game gave us 6 hours of pure enjoyment despite my initial skepticism — and yes, it\'s not my usual genre, but love always triumphs!'
    },
    'my_little_universe_gameplay': {
        'fr': 'Un petit pas pour l\'homme, un farm infini pour le joueur',
        'en': 'One small step for man, an infinite farm for the player'
    },
    'my_little_universe_gameplay_text': {
        'fr': 'Dans My Little Universe, l\'aventure commence simplement : un skin (basique au départ), un personnage chacun, et un univers à reconstruire. Jouable en solo jusqu\'à 4 joueurs, nous avons choisi de farmer en couple, et franchement, ça change tout.',
        'en': 'In My Little Universe, the adventure begins simply: a skin (basic at first), one character each, and a universe to rebuild. Playable solo or with up to 4 players, we chose to farm as a couple, and honestly, it changes everything.'
    },
    'my_little_universe_gameplay_text2': {
        'fr': 'La vue isométrique rappelle fortement Super Mario Galaxy (coucou les fans de Nintendo), avec une direction artistique ultra colorée et des mondes sphériques à explorer.',
        'en': 'The isometric view strongly reminds of Super Mario Galaxy (hello Nintendo fans), with an ultra-colorful artistic direction and spherical worlds to explore.'
    },
    'my_little_universe_gameplay_text3': {
        'fr': 'Mais ici, pas de Peach à sauver : on est là pour choper du matos ! Bois, pierres, fer, améthystes... tout y passe pour crafter et améliorer vos armes, outils, équipements, bref votre survie dépend de vos talents de bucheron/bidouilleur.',
        'en': 'But here, no Peach to save: we\'re here to grab materials! Wood, stones, iron, amethysts... everything goes into crafting and improving your weapons, tools, equipment — in short, your survival depends on your lumberjack/tinkering skills.'
    },
    'my_little_universe_farming': {
        'fr': 'Le farm est roi, mais jamais chiant en duo',
        'en': 'Farming is king, but never boring as a duo'
    },
    'my_little_universe_farming_text': {
        'fr': 'Le concept est simple : farmer pour avancer. Chaque nouvelle parcelle de la planète est verrouillée et demande des ressources à sacrifier. Plus vous explorez, plus vous débloquez :',
        'en': 'The concept is simple: farm to progress. Each new plot of the planet is locked and requires resources to sacrifice. The more you explore, the more you unlock:'
    },
    'my_little_universe_farming_item1': {
        'fr': 'Nouveaux outils (haches, pioches, épées, et plus)',
        'en': 'New tools (axes, pickaxes, swords, and more)'
    },
    'my_little_universe_farming_item2': {
        'fr': 'Nouvelles planètes',
        'en': 'New planets'
    },
    'my_little_universe_farming_item3': {
        'fr': 'Donjons à explorer',
        'en': 'Dungeons to explore'
    },
    'my_little_universe_farming_item4': {
        'fr': 'Monstres et boss à latter',
        'en': 'Monsters and bosses to defeat'
    },
    'my_little_universe_farming_item5': {
        'fr': 'Vendeurs pour améliorer votre stuff',
        'en': 'Vendors to improve your gear'
    },
    'my_little_universe_farming_text2': {
        'fr': 'Seul, l\'expérience pourrait vite devenir redondante. Mais à deux ? C\'est que du bonheur : on partage les tâches, on s\'organise, et surtout on se marre comme des gamins.',
        'en': 'Alone, the experience could quickly become redundant. But as a duo? It\'s pure joy: we share tasks, organize ourselves, and most importantly, we have fun like kids.'
    },
    'my_little_universe_farming_text3': {
        'fr': 'Mention spéciale pour l\'ambiance sonore : rythmée, agréable, jamais envahissante — et ça, c\'est rare dans un jeu qui te fait farmer pendant des heures.',
        'en': 'Special mention for the sound atmosphere: rhythmic, pleasant, never invasive — and that\'s rare in a game that makes you farm for hours.'
    },
    'my_little_universe_rpg': {
        'fr': 'RPG touch : skills et malus au menu',
        'en': 'RPG touch: skills and penalties on the menu'
    },
    'my_little_universe_rpg_text': {
        'fr': 'À chaque montée de niveau, trois compétences sont proposées au hasard. Vitesse d\'attaque, bonus de récolte, résistances... Chaque choix compte ! Et attention : mourir = perte d\'un niveau ET d\'une compétence. Autant dire que la pression est réelle en donjon !',
        'en': 'With each level up, three skills are randomly offered. Attack speed, harvest bonus, resistances... Every choice matters! And beware: dying = loss of a level AND a skill. Needless to say, the pressure is real in dungeons!'
    },
    'my_little_universe_rpg_text2': {
        'fr': 'Votre perso pourra aussi être empoisonné, brûlé ou subir d\'autres altérations, ajoutant une touche RPG bien sentie au gameplay.',
        'en': 'Your character can also be poisoned, burned or suffer other status effects, adding a well-implemented RPG touch to the gameplay.'
    },
    'introduction': {
        'fr': 'Introduction',
        'en': 'Introduction'
    },
    'conclusion': {
        'fr': 'Conclusion',
        'en': 'Conclusion'
    },
    'my_little_universe_conclusion_text': {
        'fr': 'My Little Universe est une masterclass en multijoueur casual/farming. Bien optimisé, ultra agréable à jouer, parfait pour des sessions chill en couple ou entre potes.',
        'en': 'My Little Universe is a masterclass in casual/farming multiplayer. Well optimized, ultra enjoyable to play, perfect for chill sessions as a couple or with friends.'
    },
    'my_little_universe_conclusion_text2': {
        'fr': 'Alors certes, si vous détestez farmer, passez votre chemin. Mais si vous aimez récolter, crafter et progresser en bonne compagnie, foncez les yeux fermés !',
        'en': 'So sure, if you hate farming, move along. But if you enjoy harvesting, crafting and progressing in good company, go for it with your eyes closed!'
    },
    'pros': {
        'fr': 'Points forts',
        'en': 'Strengths'
    },
    'cons': {
        'fr': 'Points faibles',
        'en': 'Weaknesses'
    },
    'my_little_universe_pro_multiplayer': {
        'fr': 'Parfait en duo/multijoueur',
        'en': 'Perfect in duo/multiplayer'
    },
    'my_little_universe_pro_sound': {
        'fr': 'Ambiance sonore agréable',
        'en': 'Pleasant sound atmosphere'
    },
    'my_little_universe_pro_visuals': {
        'fr': 'Direction artistique colorée et chill',
        'en': 'Colorful and chill artistic direction'
    },
    'my_little_universe_pro_progression': {
        'fr': 'Progression gratifiante et addictive',
        'en': 'Rewarding and addictive progression'
    },
    'my_little_universe_pro_performance': {
        'fr': 'Aucun bug ni ralentissement en 6h de jeu',
        'en': 'No bugs or slowdowns in 6 hours of gameplay'
    },
    'my_little_universe_con_solo': {
        'fr': 'Gameplay répétitif en solo',
        'en': 'Repetitive gameplay in solo'
    },
    'my_little_universe_con_customization': {
        'fr': 'Peu d\'options de personnalisation au début',
        'en': 'Few customization options at the beginning'
    },
    'my_little_universe_score': {
        'fr': '4.5',
        'en': '4.5'
    },
    'my_little_universe_thanks': {
        'fr': 'Merci d\'avoir lu cette review !',
        'en': 'Thanks for reading this review!'
    },
    'similar_games': {
        'fr': 'Jeux similaires',
        'en': 'Similar games'
    },
    'follow_us': {
        'fr': 'Suivez-nous',
        'en': 'Follow us'
    },
    'all_rights_reserved': {
        'fr': 'Tous droits réservés.',
        'en': 'All rights reserved.'
    },
    'cons': {
        'fr': 'Points faibles',
        'en': 'Weaknesses'
    },
    'similar_games': {
        'fr': 'Jeux similaires',
        'en': 'Similar games'
    },
    'thanks_reading': {
        'fr': 'Merci d\'avoir lu cette review.',
        'en': 'Thank you for reading this review.'
    },
    
    // Test descriptions and content
    'atelier_yumia_description': {
        'fr': 'Un JRPG d\'alchimie qui perpétue l\'héritage de la série Atelier avec une nouvelle héroïne. Découvrez notre test complet de ce jeu avec son système d\'alchimie approfondi et son monde ouvert.',
        'en': 'An alchemy JRPG that continues the legacy of the Atelier series with a new heroine. Discover our complete review of this game with its in-depth alchemy system and open world.'
    },
    'atelier_yumia_subtitle': {
        'fr': 'Un JRPG d\'alchimie qui perpétue l\'héritage de la série Atelier avec une nouvelle héroïne',
        'en': 'An alchemy JRPG that continues the legacy of the Atelier series with a new heroine'
    },
    'atelier_yumia_intro_text': {
        'fr': 'Bienvenue dans cette review préliminaire d\'<strong>Atelier Yumia : L\'Alchimiste des Souvenirs et la Terre Rêvée</strong>, le nouveau JRPG développé par Koei Tecmo et Gust. Ce jeu s\'inscrit dans une très longue série de jeux Atelier développée depuis plus de 25 ans, avec plus d\'une vingtaine de titres à son actif. J\'ai eu l\'occasion de tester la démo disponible sur PS5 (bien qu\'elle soit également disponible sur PS4, Xbox Series X|S, Switch et PC), et je vais vous partager mes premières impressions sur ce nouvel opus de cette célèbre série en restant le plus honnête possible.',
        'en': 'Welcome to this preliminary review of <strong>Atelier Yumia: The Alchemist of Memories & the Envisioned Land</strong>, the new JRPG developed by Koei Tecmo and Gust. This game is part of the very long Atelier series developed for over 25 years, with more than twenty titles to its credit. I had the opportunity to test the demo available on PS5 (although it is also available on PS4, Xbox Series X|S, Switch and PC), and I will share my first impressions of this new installment of this famous series while remaining as honest as possible.'
    },
    'atelier_yumia_new_horizon': {
        'fr': 'Un Nouvel Horizon pour la Série Atelier',
        'en': 'A New Horizon for the Atelier Series'
    },
    'atelier_yumia_new_horizon_text': {
        'fr': 'Atelier Yumia : L\'Alchimiste des Souvenirs et la Terre Rêvée s\'inscrit dans la lignée des jeux de la série tout en apportant son lot de nouveautés. L\'histoire suit Yumia, une jeune alchimiste qui explore un monde fantastique à la recherche de souvenirs perdus et de terres rêvées. Le jeu conserve l\'essence de la série avec son système d\'alchimie approfondi tout en proposant une direction artistique renouvelée et des mécaniques de gameplay affinées.',
        'en': 'Atelier Yumia: The Alchemist of Memories & the Envisioned Land follows in the footsteps of the series\'s games while bringing its share of innovations. The story follows Yumia, a young alchemist who explores a fantastic world in search of lost memories and dreamed lands. The game retains the essence of the series with its in-depth alchemy system while offering a renewed artistic direction and refined gameplay mechanics.'
    },
    'atelier_yumia_image1_caption': {
        'fr': 'L\'univers coloré d\'Atelier Yumia et ses personnages attachants',
        'en': 'The colorful universe of Atelier Yumia and its endearing characters'
    },
    'atelier_yumia_alchemy_art': {
        'fr': 'L\'Art de l\'Alchimie : Magie et Créations Infinies',
        'en': 'The Art of Alchemy: Magic and Infinite Creations'
    },
    'atelier_yumia_alchemy_text': {
        'fr': 'Le système d\'alchimie d\'Atelier Yumia : L\'Alchimiste des Souvenirs et la Terre Rêvée reste fidèle à l\'esprit de la série tout en introduisant de nouvelles mécaniques. La collecte d\'ingrédients et la synthèse d\'objets sont toujours au cœur du gameplay, mais avec une interface plus intuitive et des possibilités de combinaisons plus variées. Les joueurs peuvent désormais utiliser les "Fragments de Mémoire" pour améliorer leurs créations, ajoutant ainsi une nouvelle dimension stratégique au système.',
        'en': 'The alchemy system of Atelier Yumia: The Alchemist of Memories & the Envisioned Land remains true to the spirit of the series while introducing new mechanics. Ingredient collection and item synthesis are still at the heart of the gameplay, but with a more intuitive interface and more varied combination possibilities. Players can now use "Memory Fragments" to enhance their creations, adding a new strategic dimension to the system.'
    },
    
    'atelier_yumia_workshop_building': {
        'fr': 'Un Atelier à Construire de A à Z',
        'en': 'A Workshop to Build from Scratch'
    },
    'atelier_yumia_workshop_text1': {
        'fr': 'Atelier Yumia réinvente son système d\'atelier : fini le lieu fixe, place à une base en ruine à restaurer progressivement ! Dès le début, on découvre qu\'on peut non seulement crafter des objets, mais aussi personnaliser son atelier avec meubles, sols et luminaires dans des zones dédiées.',
        'en': 'Atelier Yumia reinvents its workshop system: gone is the fixed location, making way for a ruined base to gradually restore! From the beginning, we discover that we can not only craft items, but also customize our workshop with furniture, floors, and lighting in dedicated areas.'
    },
    'atelier_yumia_workshop_text2': {
        'fr': 'Mieux encore, le jeu introduit des zones "libres" disséminées sur la carte, où l\'on peut bâtir de petits camps avec lit, tables de craft et points de téléportation. Un vrai game changer qui rend l\'exploration plus fluide et immersive !',
        'en': 'Better yet, the game introduces "free" zones scattered across the map, where we can build small camps with beds, crafting tables, and teleportation points. A real game changer that makes exploration more fluid and immersive!'
    },
    'atelier_yumia_image2_caption': {
        'fr': 'L\'atelier initial en ruine que Yumia découvre au début de l\'aventure',
        'en': 'The initial ruined workshop that Yumia discovers at the beginning of the adventure'
    },
    'atelier_yumia_image3_caption': {
        'fr': 'Un exemple de petit coin tranquille personnalisé créé ailleurs sur la carte',
        'en': 'An example of a customized quiet spot created elsewhere on the map'
    },
    'atelier_yumia_adventures': {
        'fr': 'Aventures Sans Limites : Un Monde Ouvert à Explorer et des Combats Dynamiques',
        'en': 'Limitless Adventures: An Open World to Explore and Dynamic Combat'
    },
    'atelier_yumia_exploration': {
        'fr': 'Exploration & Monde',
        'en': 'Exploration & World'
    },
    'atelier_yumia_exploration_text': {
        'fr': 'Atelier Yumia fait un bond en avant avec une carte digne des meilleurs open worlds : téléportation, zones de chasse et monstres rares au rendez-vous. Chaque lieu exploré s\'enregistre automatiquement, rendant la navigation fluide et immersive. L\'exploration devient plus vivante avec des PNJ en détresse offrant des récompenses en échange d\'aide, ajoutant une touche sociale au voyage.',
        'en': 'Atelier Yumia takes a leap forward with a map worthy of the best open worlds: teleportation, hunting zones, and rare monsters await. Each explored location is automatically registered, making navigation smooth and immersive. Exploration becomes more lively with distressed NPCs offering rewards in exchange for help, adding a social touch to the journey.'
    },
    'atelier_yumia_image4_caption': {
        'fr': 'La carte du monde d\'Atelier Yumia avec ses nombreux points d\'intérêt',
        'en': 'The world map of Atelier Yumia with its numerous points of interest'
    },
    'atelier_yumia_image5_caption': {
        'fr': 'Les vastes zones d\'exploration variées',
        'en': 'The vast and varied exploration zones'
    },
    'atelier_yumia_combat_system': {
        'fr': 'Un Système de Combat Réinventé',
        'en': 'A Reinvented Combat System'
    },
    'atelier_yumia_combat_text': {
        'fr': 'Fini le tour par tour, place à un système semi-action RPG dynamique ! Déplacements libres, esquives, défense active et une mécanique avant/arrière apportent plus de stratégie. L\'accès rapide aux objets via R1 et la possibilité de changer de personnage en plein combat rendent les affrontements plus nerveux et tactiques, tout en gardant l\'ADN de la série.',
        'en': 'Gone is the turn-based system, making way for a dynamic semi-action RPG system! Free movement, dodges, active defense, and a front/back mechanic bring more strategy. Quick access to items via R1 and the ability to change characters mid-combat make battles more intense and tactical, while keeping the series\'s DNA.'
    },
    'atelier_yumia_image6_caption': {
        'fr': 'Le nouveau système de combat dynamique',
        'en': 'The new dynamic combat system'
    },
    'atelier_yumia_image7_caption': {
        'fr': 'Les combats contre les monstres sont plus dynamiques',
        'en': 'Battles against monsters are more dynamic'
    },
    'atelier_yumia_visuals_music': {
        'fr': 'Une DA et des OST dignes des meilleurs de la série',
        'en': 'Art Direction and OST Worthy of the Best in the Series'
    },
    'atelier_yumia_visuals_text': {
        'fr': 'Visuellement, Atelier Yumia : L\'Alchimiste des Souvenirs et la Terre Rêvée impressionne par sa direction artistique soignée. Les environnements sont colorés et détaillés, avec une esthétique qui mélange habilement fantasy et éléments steampunk. Les modèles de personnages sont expressifs et bien animés, avec un style cel-shading qui donne vie à l\'univers du jeu. La bande-son, composée de mélodies douces et entraînantes, accompagne parfaitement l\'ambiance du jeu, alternant entre moments contemplatifs et séquences plus dynamiques.',
        'en': 'Visually, Atelier Yumia: The Alchemist of Memories & the Envisioned Land impresses with its polished artistic direction. The environments are colorful and detailed, with an aesthetic that skillfully blends fantasy and steampunk elements. The character models are expressive and well-animated, with a cel-shading style that brings the game\'s universe to life. The soundtrack, composed of soft and catchy melodies, perfectly accompanies the game\'s atmosphere, alternating between contemplative moments and more dynamic sequences.'
    },
    'atelier_yumia_conclusion_text1': {
        'fr': 'Atelier Yumia s\'annonce comme un digne successeur de la série, alliant tradition et renouveau. L\'atelier personnalisable et le mode Construction offrent une liberté inédite, tandis que le combat semi-action et l\'exploration open world modernisent l\'expérience sans trahir son ADN.',
        'en': 'Atelier Yumia promises to be a worthy successor to the series, combining tradition and renewal. The customizable workshop and Construction mode offer unprecedented freedom, while the semi-action combat and open-world exploration modernize the experience without betraying its DNA.'
    },
    'atelier_yumia_conclusion_text2': {
        'fr': 'Avec une direction artistique sublime et une traduction française complète, le jeu s\'ouvre à un large public. Fans de la première heure ou nouveaux venus, tout le monde devrait y trouver son compte. Si la version finale tient ses promesses, on tient peut-être l\'un des meilleurs Atelier à ce jour !',
        'en': 'With sublime artistic direction and complete French translation, the game opens up to a wide audience. Whether longtime fans or newcomers, everyone should find something to enjoy. If the final version delivers on its promises, we may have one of the best Atelier games to date!'
    },
    'atelier_yumia_pro_visuals': {
        'fr': 'DA magnifique',
        'en': 'Beautiful art direction'
    },
    'atelier_yumia_pro_gameplay': {
        'fr': 'Nouveaux Gameplay',
        'en': 'New gameplay mechanics'
    },
    'atelier_yumia_pro_openworld': {
        'fr': 'Open World',
        'en': 'Open World'
    },
    'atelier_yumia_pro_translation': {
        'fr': 'Traduction FR',
        'en': 'French translation'
    },
    'atelier_yumia_con_slowdowns': {
        'fr': 'Quelques ralentissements dans les zones denses',
        'en': 'Some slowdowns in dense areas'
    },
    'atelier_yumia_con_tutorials': {
        'fr': 'Tutoriels complexe pour les amateurs',
        'en': 'Complex tutorials for beginners'
    },
    'atelier_yumia_score': {
        'fr': '4.0',
        'en': '4.0'
    },
    'atelier_yumia_thanks': {
        'fr': 'Merci d\'avoir lu cette review préliminaire basée sur la démo. Un test complet sera disponible à la sortie du jeu.',
        'en': 'Thank you for reading this preliminary review based on the demo. A complete review will be available when the game releases.'
    },
    
    'my_little_universe_description': {
        'fr': 'Un jeu où Mario Galaxy rencontre Minecraft, le tout arrosé d\'une bonne grosse dose de farme intensive. Découvrez notre test complet de ce jeu de farming et d\'exploration en multijoueur.',
        'en': 'A game where Mario Galaxy meets Minecraft, all sprinkled with a good dose of intensive farming. Discover our complete review of this multiplayer farming and exploration game.'
    },
    
    'pilo_holobook_description': {
        'fr': 'Un jeu d\'aventure et d\'exploration avec un univers coloré et des puzzles intelligents. Découvrez notre test complet de ce jeu indépendant charmant.',
        'en': 'An adventure and exploration game with a colorful universe and clever puzzles. Discover our complete review of this charming indie game.'
    },
    'pilo_holobook_subtitle': {
        'fr': 'Un monde coloré à explorer avec des puzzles intelligents et une direction artistique charmante',
        'en': 'A colorful world to explore with intelligent puzzles and charming art direction'
    },
    'pilo_holobook_introduction_text': {
        'fr': 'Bienvenue dans cette review de <strong>Pilo and the Holobook</strong>, un jeu d\'aventure et d\'exploration développé par Mudita Games et publié par RedDeer.Games. Ce petit jeu indépendant a réussi à captiver notre attention avec son univers coloré et sa direction artistique charmante.',
        'en': 'Welcome to this review of <strong>Pilo and the Holobook</strong>, an adventure and exploration game developed by Mudita Games and published by RedDeer.Games. This small indie game managed to capture our attention with its colorful universe and charming art direction.'
    },
    'pilo_holobook_world_title': {
        'fr': 'Un monde coloré à explorer... scanner en main !',
        'en': 'A Colorful World to Explore... Scanner in Hand!'
    },
    'pilo_holobook_world_text': {
        'fr': 'Pilo and the Holobook, c\'est le genre de jeu qu\'on lance sans attente... et qu\'on n\'a plus envie de lâcher. Sous ses airs enfantins, il cache un univers riche et une direction artistique ultra charmante. Vous incarnez Pilo, un petit explorateur équipé d\'un Holobook magique. Votre mission ? Scanner tout ce qui bouge – ou presque – pour compléter ce précieux grimoire numérique. Dit comme ça, ça a l\'air chill, mais le jeu demande réflexion ! Entre puzzles intelligents et exploration zen, chaque biome (aka planète) offre un vrai moment de détente et de curiosité.',
        'en': 'Pilo and the Holobook is the kind of game you start with no expectations... and then don\'t want to put down. Under its childish appearance, it hides a rich universe and an ultra-charming art direction. You play as Pilo, a small explorer equipped with a magical Holobook. Your mission? Scan everything that moves – or almost – to complete this precious digital grimoire. Put that way, it sounds chill, but the game requires thinking! Between intelligent puzzles and zen exploration, each biome (aka planet) offers a real moment of relaxation and curiosity.'
    },
    'pilo_holobook_indie_title': {
        'fr': 'Un indé qui mérite votre attention',
        'en': 'An Indie That Deserves Your Attention'
    },
    'pilo_holobook_indie_text': {
        'fr': 'Chaque monde visité respire la créativité : des décors variés, une ambiance sonore parfaitement dosée, et quelques PNJ bien placés pour rythmer l\'aventure. Le rythme est doux, mais jamais ennuyeux. Et le plus beau ? Le plaisir de la découverte reste intact, sans forcer.',
        'en': 'Each world visited breathes creativity: varied settings, a perfectly balanced sound atmosphere, and a few well-placed NPCs to rhythm the adventure. The pace is gentle, but never boring. And the best part? The pleasure of discovery remains intact, without forcing it.'
    },
    'pilo_holobook_conclusion_text': {
        'fr': 'Pilo and the Holobook, c\'est la preuve qu\'un jeu n\'a pas besoin de millions pour être marquant. Accessible aux petits comme aux grands, ce petit jeu indé a tout pour séduire les amateurs d\'exploration et de puzzles mignons mais malins. Une vraie bonne surprise !',
        'en': 'Pilo and the Holobook is proof that a game doesn\'t need millions to be memorable. Accessible to young and old alike, this small indie game has everything to seduce fans of exploration and cute but clever puzzles. A real pleasant surprise!'
    },
    'pilo_holobook_pro_1': { 'fr': 'Direction artistique colorée et apaisante', 'en': 'Colorful and soothing art direction' },
    'pilo_holobook_pro_2': { 'fr': 'Puzzles simples mais malins', 'en': 'Simple but clever puzzles' },
    'pilo_holobook_pro_3': { 'fr': 'Exploration gratifiante', 'en': 'Rewarding exploration' },
    'pilo_holobook_pro_4': { 'fr': 'Univers mignon mais pas niais', 'en': 'Cute universe but not cheesy' },
    'pilo_holobook_con_1': { 'fr': 'Peut paraître trop calme pour certains', 'en': 'May seem too quiet for some' },
    'pilo_holobook_con_2': { 'fr': 'Répétitivité possible sur la durée', 'en': 'Possible repetitiveness over time' },
    'pilo_holobook_score': { 'fr': '4.0', 'en': '4.0' },
    
    'whisker_waters_description': {
        'fr': 'Un RPG de simulation de pêche avec des chats, entre charme et imperfections techniques. Découvrez notre test complet de ce jeu de pêche original.',
        'en': 'A fishing simulation RPG with cats, between charm and technical imperfections. Discover our complete review of this original fishing game.'
    },
    'whisker_waters_subtitle': {
        'fr': 'Un RPG de simulation de pêche avec des chats, entre charme et imperfections techniques',
        'en': 'A fishing simulation RPG with cats, between charm and technical imperfections'
    },
    'whisker_waters_thanks': {
        'fr': 'Un grand merci à Merge Games et Underbite Games pour m\'avoir donné l\'opportunité de tester ce jeu ! (Particulièrement à Thibauld pour sa confiance)',
        'en': 'A big thank you to Merge Games and Underbite Games for giving me the opportunity to test this game! (Especially to Thibauld for his trust)'
    },
    
    'split_fiction_description': {
        'fr': 'Découvrez Split, le nouveau jeu coopératif développé par Hazelight Studios, les créateurs du célèbre It Takes Two. Une aventure unique à jouer en duo.',
        'en': 'Discover Split, the new cooperative game developed by Hazelight Studios, the creators of the famous It Takes Two. A unique adventure to play as a duo.'
    },
    'split_fiction_subtitle': {
        'fr': 'Une nouvelle aventure coopérative par Hazelight Studios, les créateurs du célèbre It Takes Two',
        'en': 'A new cooperative adventure by Hazelight Studios, the creators of the famous It Takes Two'
    },
    'split_fiction_coming_soon_text': {
        'fr': 'Le test complet de Split Fiction, le nouveau jeu coopératif développé par Hazelight Studios (les créateurs de It Takes Two), sera disponible très prochainement. Ce jeu promet une expérience coopérative unique, dans la lignée de leurs précédentes créations comme It Takes Two et A Way Out. Restez à l\'écoute pour notre analyse détaillée de cette nouvelle aventure à jouer en duo !',
        'en': 'The full review of Split Fiction, the new cooperative game developed by Hazelight Studios (creators of It Takes Two), will be available very soon. This game promises a unique cooperative experience, in line with their previous creations like It Takes Two and A Way Out. Stay tuned for our detailed analysis of this new adventure to play as a duo!'
    },

    // Titres de sections d'interviews
    'project_origins': { 'fr': 'Origines du Projet', 'en': 'Project Origins' },
    'development_team': { 'fr': 'L\'équipe de Développement', 'en': 'Development Team' },
    'gameplay_mechanics': { 'fr': 'Gameplay et Mécaniques de Jeu', 'en': 'Gameplay and Game Mechanics' },
    'narrative_universe': { 'fr': 'Narrative et Univers du Jeu', 'en': 'Narrative and Game Universe' },
    'design_music': { 'fr': 'Design et Musique', 'en': 'Design and Music' },
    'challenges_learning': { 'fr': 'Défis et Apprentissage', 'en': 'Challenges and Learning' },
    'project_future': { 'fr': 'Avenir du Projet', 'en': 'Project Future' },
    'other_interviews': { 'fr': 'Autres interviews', 'en': 'Other Interviews' },
    'read_interview': { 'fr': 'Lire l\'interview', 'en': 'Read Interview' },

    // Titres de sections génériques pour les tests
    'adventure_begins': { 'fr': 'L\'Aventure Commence', 'en': 'The Adventure Begins' },
    'first_steps': { 'fr': 'Premiers Pas', 'en': 'First Steps' },
    'mixed_experience': { 'fr': 'Une Expérience Mitigée', 'en': 'A Mixed Experience' },
    'fishing_concept': { 'fr': 'La Pêche : Un Concept Bien Pensé', 'en': 'Fishing: A Well-Thought Concept' },
    'music_ambiance': { 'fr': 'Musique et Ambiance', 'en': 'Music and Atmosphere' },
    'bugs_issues': { 'fr': 'Bugs et Problèmes', 'en': 'Bugs and Issues' },
    'translation_issues': { 'fr': 'Problèmes de Traduction', 'en': 'Translation Issues' },
    'tested_written_by': { 'fr': 'Testé et écrit par', 'en': 'Tested and written by' },
    'thanks_reading': { 'fr': 'Merci d\'avoir lu cette review.', 'en': 'Thanks for reading this review.' },
    'similar_games': { 'fr': 'Jeux similaires', 'en': 'Similar Games' },

    // Whisker Waters
    'whisker_waters_introduction_text': {
        'fr': 'Bienvenue dans cette mini review de <strong>Whisker Waters</strong>, un RPG de simulation de pêche développé par Underbite Games et publié par Merge Games. J\'ai eu l\'occasion de tester le jeu pendant 1h30 sur la version PS5, et voici mes impressions personnelles.',
        'en': 'Welcome to this mini review of <strong>Whisker Waters</strong>, a fishing simulation RPG developed by Underbite Games and published by Merge Games. I had the opportunity to test the game for 1.5 hours on the PS5 version, and here are my personal impressions.'
    },
    'whisker_waters_adventure_text': {
        'fr': 'Whisker Waters vous plonge dans la peau d\'un petit chaton aspirant à devenir un grand pêcheur. Dès le lancement, le jeu vous offre une personnalisation de votre personnage. Bien que ce ne soit pas au niveau d\'un MMORPG, j\'ai trouvé les options disponibles plutôt agréables pour un jeu de ce genre.',
        'en': 'Whisker Waters puts you in the shoes of a small kitten aspiring to become a great fisherman. Right from the start, the game offers character customization. Although not at the level of an MMORPG, I found the available options quite pleasant for a game of this genre.'
    },
    'whisker_waters_first_steps_text': {
        'fr': 'Une fois votre chat personnalisé, vous commencez avec un tutoriel de pêche. Le jeu vous immerge immédiatement dans son univers avec des mécanismes de pêche assez originaux. Cependant, dès que vous atteignez l\'île principale, les choses deviennent plus mitigées.',
        'en': 'Once your cat is customized, you start with a fishing tutorial. The game immediately immerses you in its universe with quite original fishing mechanics. However, as soon as you reach the main island, things become more mixed.'
    },
    'whisker_waters_mixed_experience_text': {
        'fr': 'Si le début promettait beaucoup, des problèmes techniques ont rapidement terni l\'expérience. Des lags intermittents et des graphismes parfois défaillants m\'ont rappelé plus un jeu indépendant qui sortirais sur Switch qu\'un titre Next Gen. De plus, le popping irrégulier des objets nécessaires pour les quêtes rend parfois la progression frustrante. Par exemple, j\'ai abandonné après 1h30 de jeu car je ne trouvais jamais un certain poisson, rendant une quête impossible à terminer. Le titre manque cruellement d\'optimisation sur PS5.',
        'en': 'While the beginning promised a lot, technical issues quickly tarnished the experience. Intermittent lags and sometimes failing graphics reminded me more of an indie game releasing on Switch than a Next Gen title. Moreover, the irregular popping of objects needed for quests sometimes makes progression frustrating. For example, I gave up after 1.5 hours of play because I could never find a certain fish, making a quest impossible to complete. The title sorely lacks optimization on PS5.'
    },
    'whisker_waters_fishing_concept_text': {
        'fr': 'Un point positif majeur est le mécanisme de pêche. Utiliser différents appâts et jouer à des mini-jeux pour attraper des poissons est vraiment amusant. Chaque poisson réagit différemment, ce qui ajoute un défi supplémentaire appréciable. Les animations du chat, notamment lorsqu\'il attrape des proies au sol, sont également bien réalisées et apportent une touche de charme.',
        'en': 'A major positive point is the fishing mechanism. Using different baits and playing mini-games to catch fish is really fun. Each fish reacts differently, which adds an appreciable extra challenge. The cat animations, especially when catching prey on the ground, are also well done and add a touch of charm.'
    },
    'whisker_waters_music_text': {
        'fr': 'Là où le jeu pêche (sans mauvais jeu de mots), c\'est au niveau de l\'OST. La musique de fond répétitive peut devenir lassante, au point de préférer mettre votre propre musique en fond sonore.',
        'en': 'Where the game flounders (no pun intended), is in the OST. The repetitive background music can become tiresome, to the point of preferring to play your own music in the background.'
    },
    'whisker_waters_bugs_text': {
        'fr': 'Un bug amusant mais critique mérite d\'être mentionné. En appuyant sur une combinaison spécifique de boutons (R2+L2+R1+L1+rond+carré+triangle+croix), un mode débug apparaît, faisant apparaître des ours qui vous donnent des ressources illimitées, mais pouvant aussi faire planter le jeu. Il y a également le bug des quêtes, qui vous permet de vous débarrassé de tous les objets, y compris les objets clés nécessaires pour les quêtes, ce qui est très étrange et problématique.',
        'en': 'A funny but critical bug deserves mention. By pressing a specific button combination (R2+L2+R1+L1+circle+square+triangle+cross), a debug mode appears, spawning bears that give you unlimited resources, but can also crash the game. There is also the quest bug, which allows you to get rid of all items, including key items needed for quests, which is very strange and problematic.'
    },
    'whisker_waters_translation_text': {
        'fr': 'La traduction française du jeu laisse à désirer. J\'ai remarqué de nombreuses erreurs d\'orthographe, des phrases incompréhensibles, et des bouts de phrases ou mots manquants, ce qui nuit à l\'immersion et à la compréhension du jeu.',
        'en': 'The French translation of the game leaves something to be desired. I noticed many spelling errors, incomprehensible sentences, and missing sentence parts or words, which harms immersion and game understanding.'
    },
    'whisker_waters_conclusion_text': {
        'fr': 'En somme, Whisker Waters a de bonnes idées, notamment dans ses mécanismes de pêche, mais souffre de plusieurs problèmes techniques qui freinent l\'expérience. Avec quelques mises à jour pour corriger ces soucis, il pourrait devenir un jeu bien plus agréable. Pour ceux qui sont intéressés par un RPG centré sur la pêche, il vaut la peine d\'y jeter un œil, en gardant en tête ses limitations actuelles.',
        'en': 'In short, Whisker Waters has good ideas, especially in its fishing mechanics, but suffers from several technical issues that hinder the experience. With some updates to fix these issues, it could become a much more enjoyable game. For those interested in a fishing-centric RPG, it\'s worth a look, keeping in mind its current limitations.'
    },
    'whisker_waters_pro_1': { 'fr': 'Mécanismes de pêche amusants et variés', 'en': 'Fun and varied fishing mechanics' },
    'whisker_waters_pro_2': { 'fr': 'Personnalisation du personnage agréable', 'en': 'Pleasant character customization' },
    'whisker_waters_pro_3': { 'fr': 'Animations des chats charmantes', 'en': 'Charming cat animations' },
    'whisker_waters_con_1': { 'fr': 'Problèmes techniques et lags', 'en': 'Technical issues and lags' },
    'whisker_waters_con_2': { 'fr': 'Bugs bloquants pour certaines quêtes', 'en': 'Blocking bugs for some quests' },
    'whisker_waters_con_3': { 'fr': 'Traduction française médiocre', 'en': 'Mediocre French translation' },
    'whisker_waters_con_4': { 'fr': 'Musique répétitive', 'en': 'Repetitive music' },
    'whisker_waters_score': { 'fr': '3.5', 'en': '3.5' },
    'whisker_waters_thanks_again': {
        'fr': 'Encore un grand merci à Merge Games et Underbite Games pour cette opportunité !',
        'en': 'A big thanks again to Merge Games and Underbite Games for this opportunity!'
    },

    // Interview Alzara
    'alzara_interview_heading': {
        'fr': 'ALZARA: Radiant Echoes - Interview des développeurs',
        'en': 'ALZARA: Radiant Echoes - Developer Interview'
    },
    'alzara_interview_subtitle': {
        'fr': 'Une plongée dans les coulisses de ce JRPG inspiré des classiques avec une touche méditerranéenne',
        'en': 'A dive behind the scenes of this JRPG inspired by classics with a Mediterranean touch'
    },
    'alzara_interview_author': {
        'fr': 'Interview réalisée par jRPGcontentCreator, 20 Mai 2024',
        'en': 'Interview by jRPGcontentCreator, May 20, 2024'
    },
    'alzara_intro_text': {
        'fr': 'J\'ai eu l\'opportunité d\'interviewer l\'équipe de développement de <strong>ALZARA: Radiant Echoes</strong>, un JRPG prometteur développé par Studio Camelia. Ce jeu, qui a récemment lancé sa campagne Kickstarter, propose une expérience inspirée des classiques du genre tout en apportant une touche d\'originalité avec son univers méditerranéen et ses mécaniques de combat innovantes.',
        'en': 'I had the opportunity to interview the development team of <strong>ALZARA: Radiant Echoes</strong>, a promising JRPG developed by Studio Camelia. This game, which recently launched its Kickstarter campaign, offers an experience inspired by genre classics while bringing a touch of originality with its Mediterranean universe and innovative combat mechanics.'
    },
    'alzara_q1': {
        'fr': 'Question: Pouvez-vous nous parler de la genèse de "ALZARA: Radiant Echoes"? Quelle a été l\'inspiration principale derrière le jeu?',
        'en': 'Question: Can you tell us about the genesis of "ALZARA: Radiant Echoes"? What was the main inspiration behind the game?'
    },
    'alzara_a1_p1': {
        'fr': 'L\'aventure a démarré fin 2021 au moment de la création du Studio Camelia. Avec ALZARA, nous avons pour volonté d\'apporter de la fraîcheur au genre du JRPG, et notamment en avec un groupe de héros auprès de qui on peut s\'identifier, un univers méditerranéen dont on s\'inspire des légendes et mythes, et une histoire mature où le concept de partage devient un champ de bataille moral aux conséquences profondes.',
        'en': 'The adventure started in late 2021 when Studio Camelia was created. With ALZARA, we aim to bring freshness to the JRPG genre, particularly with a group of relatable heroes, a Mediterranean universe inspired by legends and myths, and a mature story where the concept of sharing becomes a moral battlefield with deep consequences.'
    },
    'alzara_a1_p2': {
        'fr': 'Pour le jeu, nous nous sommes inspirés de classiques de l\'âge d\'or du JRPG, tels que Golden Sun ou encore Final Fantasy X.',
        'en': 'For the game, we were inspired by classics from the golden age of JRPGs, such as Golden Sun or Final Fantasy X.'
    },
    'alzara_q2': {
        'fr': 'Question: Pourquoi avez-vous choisi de lancer une campagne Kickstarter pour ce projet? Quels avantages cela offre-t-il par rapport à des méthodes de financement plus traditionnelles?',
        'en': 'Question: Why did you choose to launch a Kickstarter campaign for this project? What advantages does it offer compared to more traditional funding methods?'
    },
    'alzara_a2_p1': {
        'fr': 'Nous sommes de grands fans de JRPG et Kickstarter nous permettait d\'assumer notre volonté d\'être plus proches de notre communauté. Pour un jeu qui a pour thème le partage, on trouvait que ça fonctionnait bien 🙂',
        'en': 'We are big JRPG fans and Kickstarter allowed us to embrace our desire to be closer to our community. For a game themed around sharing, we thought it worked well 🙂'
    },
    'alzara_a2_p2': {
        'fr': 'Kickstarter nous permet aussi de montrer l\'intérêt des joueur·euses pour un jeu comme le nôtre, et donc de voir si notre concept plaît !',
        'en': 'Kickstarter also allows us to show player interest for a game like ours, and thus see if our concept is appealing!'
    },
    'alzara_q3': {
        'fr': 'Question: Pouvez-vous nous présenter l\'équipe de Studio Camelia? Quelle est la taille de l\'équipe et quelles sont les expertises principales de ses membres?',
        'en': 'Question: Can you introduce the Studio Camelia team? What is the team size and what are the main areas of expertise of its members?'
    },
    'alzara_a3': {
        'fr': 'Nous sommes une équipe de développeur·euse·s expérimenté·e·s de 14 personnes réparties un peu partout en France mais aussi au Canada. Tous les métiers nécessaires au développement de jeux vidéo y sont représentés.',
        'en': 'We are a team of 14 experienced developers spread across France and Canada. All trades necessary for video game development are represented.'
    },
    'alzara_q4': {
        'fr': 'Question: Vous collaborez avec des artistes japonais renommés comme Yoshiro Ambe et Motoi Sakuraba. Comment ces collaborations ont-elles vu le jour et quelle a été leur contribution au projet?',
        'en': 'Question: You are collaborating with renowned Japanese artists like Yoshiro Ambe and Motoi Sakuraba. How did these collaborations come about and what was their contribution to the project?'
    },
    'alzara_a4': {
        'fr': 'Nous avons pu entrer en contact avec Yoshiro Ambe et Motoi Sakuraba grâce à notre participation dans la communauté JRPG, ainsi qu\'au réseau que nous avons développé durant notre carrière dans l\'industrie.',
        'en': 'We were able to connect with Yoshiro Ambe and Motoi Sakuraba thanks to our participation in the JRPG community, as well as the network we developed during our career in the industry.'
    },
    'alzara_image_caption': {
        'fr': 'L\'univers méditerranéen d\'ALZARA: Radiant Echoes - Studio Camelia',
        'en': 'The Mediterranean universe of ALZARA: Radiant Echoes - Studio Camelia'
    },
    'alzara_q5': {
        'fr': 'Question: Le système de combat d\'ALZARA est très stratégique avec la possibilité de combiner des éléments magiques. Pouvez-vous expliquer comment cette mécanique fonctionne et comment elle influence le gameplay?',
        'en': 'Question: ALZARA\'s combat system is very strategic with the ability to combine magical elements. Can you explain how this mechanic works and how it influences gameplay?'
    },
    'alzara_q6': {
        'fr': 'Question: La gestion des positions des personnages entre la ligne de front et la ligne arrière semble cruciale. Comment cela affecte-t-il la dynamique des combats et quelles stratégies les joueurs peuvent-ils adopter?',
        'en': 'Question: Managing character positions between front and back lines seems crucial. How does this affect combat dynamics and what strategies can players adopt?'
    },
    'alzara_a5_p1': {
        'fr': 'Notre jeu a pour thème le partage, et cela influence aussi le système de combat. Nos héros se battent ensemble, et peuvent combiner leur magie élémentaire afin de débloquer de nouveaux éléments. Ainsi par exemple, le feu et l\'air combinés permettent d\'obtenir de la foudre.',
        'en': 'Our game is themed around sharing, and this also influences the combat system. Our heroes fight together, and can combine their elemental magic to unlock new elements. For example, fire and air combined create lightning.'
    },
    'alzara_a5_p2': {
        'fr': 'Ce mélange d\'éléments est rendu possible grâce au Swap, qui permet à nos héros de changer de ligne en combat.',
        'en': 'This mixing of elements is made possible thanks to Swap, which allows our heroes to change lines in combat.'
    },
    'alzara_a5_p3': {
        'fr': 'La gestion des lignes est cruciale : à l\'avant les héros disposent de capacités offensives, et à l\'arrière de support. L\'avant dépense de l\'Echo (l\'équivalent du mana dans notre monde), et l\'arrière permet d\'en récupérer. En swappant, les héros se partagent une partie de leurs pouvoirs magiques, donnant accès à de nouveaux sorts au héros qui arrive en première ligne !',
        'en': 'Line management is crucial: in front, heroes have offensive capabilities, and in back, support. The front spends Echo (our world\'s equivalent of mana), and the back allows recovering it. By swapping, heroes share part of their magical powers, giving access to new spells to the hero arriving on the front line!'
    },
    'alzara_a5_p4': {
        'fr': 'En plus du mix d\'éléments, les joueureuses devront aussi composer avec l\'archétype des héros, mais aussi des sorts… sans oublier les monstres en face ! On voulait que le système de combat soit simple au premier abord, tout en gagnant en complexité au fur et à mesure de l\'histoire.',
        'en': 'In addition to the element mix, players will also have to deal with hero archetypes, but also spells... not forgetting the monsters facing them! We wanted the combat system to be simple at first, while gaining complexity as the story progresses.'
    },
    'alzara_q7': {
        'fr': 'Question: L\'histoire de "ALZARA: Radiant Echoes" tourne autour d\'une résistance contre une invasion. Pouvez-vous nous en dire plus sur le contexte et les motivations des personnages principaux?',
        'en': 'Question: The story of "ALZARA: Radiant Echoes" revolves around a resistance against an invasion. Can you tell us more about the context and motivations of the main characters?'
    },
    'alzara_a7': {
        'fr': 'L\'Echo a disparu dans la grande majorité du monde. Cet Echo permettait à la Nation Vedores de produire de grandes quantités de biens nourriciers. Après des décennies à se serrer la ceinture, la situation n\'est plus tenable et Vedores a choisi d\'envahir l\'Archipel de Taqsim où se trouvent nos héros. Ici, différentes visions du partage des ressources s\'affrontent, mais la famine rend les rapports difficiles et Vedores finit par appliquer un régime coercitif sur les habitants locaux, qui n\'ont pas les moyens de se défendre.',
        'en': 'Echo has disappeared from the vast majority of the world. This Echo allowed the Vedores Nation to produce large quantities of food goods. After decades of belt-tightening, the situation is no longer tenable and Vedores chose to invade the Taqsim Archipelago where our heroes are located. Here, different visions of resource sharing clash, but famine makes relationships difficult and Vedores ends up applying a coercive regime on local inhabitants, who lack the means to defend themselves.'
    },
    'alzara_q8': {
        'fr': 'Question: Le monde de Taqsim, inspiré des paysages méditerranéens, semble riche en détails. Quelles ont été vos sources d\'inspiration pour la création de cet univers et comment cela se reflète-t-il dans le jeu?',
        'en': 'Question: The world of Taqsim, inspired by Mediterranean landscapes, seems rich in detail. What were your sources of inspiration for creating this universe and how is it reflected in the game?'
    },
    'alzara_a8_p1': {
        'fr': 'La première inspiration fut la civilisation minoenne. Basée sur l\'île de Crète, et plus ancienne que l\'avènement du peuple grec, cette civilisation a été un carrefour de cultures et de commerces, reliant les pays du Nord, de l\'Est et du Sud de la Méditerranée.',
        'en': 'The first inspiration was the Minoan civilization. Based on the island of Crete, and older than the rise of the Greek people, this civilization was a crossroads of cultures and trade, connecting countries from the North, East, and South of the Mediterranean.'
    },
    'alzara_a8_p2': {
        'fr': 'Pour avoir la plus grande diversité, nous sommes allés chercher des références tout autour du bassin méditerranéen et sur plusieurs époques. On trouve des inspirations hittites, mésopotamiennes, libyennes, égyptiennes, gréco-romaines ou même provençales. Ces influences se retrouvent dans les noms, les lieux, les légendes et la faune d\'Alzara. Nous avons particulièrement fait attention à refléter la nourriture, les produits et l\'agriculture que l\'on trouve autour de la Méditerranée, donc attendez-vous à sentir le thym et l\'huile d\'olive au cours de votre aventure.',
        'en': 'To have the greatest diversity, we sought references from all around the Mediterranean basin and across several eras. We find Hittite, Mesopotamian, Libyan, Egyptian, Greco-Roman, or even Provençal inspirations. These influences are found in the names, places, legends, and fauna of Alzara. We paid particular attention to reflecting the food, products, and agriculture found around the Mediterranean, so expect to smell thyme and olive oil during your adventure.'
    },
    'alzara_q9': {
        'fr': 'Question: Comment Yoshiro Ambe a-t-il influencé le design des personnages et quel a été son processus créatif pour ce projet?',
        'en': 'Question: How did Yoshiro Ambe influence character design and what was his creative process for this project?'
    },
    'alzara_a9_p1': {
        'fr': 'Nous avons réalisé une interview avec Yoshiro Ambe qui répond justement à cette question !',
        'en': 'We conducted an interview with Yoshiro Ambe that answers this very question!'
    },
    'alzara_a9_p2': {
        'fr': 'Vous pouvez la consulter sur la page Kickstarter du projet : <a href="https://www.kickstarter.com/projects/studiocamelia/seed-a-vibrant-tribute-to-jrpg-classics/posts/4103957" target="_blank">https://www.kickstarter.com/projects/studiocamelia/seed-a-vibrant-tribute-to-jrpg-classics/posts/4103957</a>',
        'en': 'You can view it on the project\'s Kickstarter page: <a href="https://www.kickstarter.com/projects/studiocamelia/seed-a-vibrant-tribute-to-jrpg-classics/posts/4103957" target="_blank">https://www.kickstarter.com/projects/studiocamelia/seed-a-vibrant-tribute-to-jrpg-classics/posts/4103957</a>'
    },
    'alzara_q10': {
        'fr': 'Question: Motoi Sakuraba est connu pour ses bandes-son mémorables. Quelle a été son approche pour composer la musique de "ALZARA: Radiant Echoes" et comment cette musique enrichit-elle l\'expérience de jeu?',
        'en': 'Question: Motoi Sakuraba is known for his memorable soundtracks. What was his approach to composing the music for "ALZARA: Radiant Echoes" and how does this music enrich the gaming experience?'
    },
    'alzara_a10': {
        'fr': 'Nous avons une interview avec Motoi Sakuraba qui arrive bientôt, nous vous invitons à patienter quelques peu 🙂',
        'en': 'We have an interview with Motoi Sakuraba coming soon, we invite you to wait a little while 🙂'
    },
    'alzara_q11': {
        'fr': 'Question: Quels ont été les principaux défis rencontrés lors du développement de "ALZARA: Radiant Echoes" et comment les avez-vous surmontés?',
        'en': 'Question: What were the main challenges encountered during the development of "ALZARA: Radiant Echoes" and how did you overcome them?'
    },
    'alzara_a11': {
        'fr': 'Le principal défi a été la création de l\'entreprise et l\'obtention de nos premiers financements. Depuis 2021 et la génèse du projet, nous avons pu progressivement constituer notre équipe de développeur·euse·s expérimenté·e·s et ainsi convaincre des partenaires financiers, ce qui nous permet d\'avancer avec beaucoup d\'enthousiasme pour la suite !',
        'en': 'The main challenge was creating the company and securing our first funding. Since 2021 and the genesis of the project, we have been able to gradually build our team of experienced developers and thus convince financial partners, which allows us to move forward with great enthusiasm for what\'s next!'
    },
    'alzara_q12': {
        'fr': 'Question: Quels enseignements avez-vous tirés de ce projet que vous aimeriez partager avec d\'autres développeurs indépendants?',
        'en': 'Question: What lessons have you learned from this project that you would like to share with other indie developers?'
    },
    'alzara_a12': {
        'fr': 'ALZARA Radiant Echoes n\'est pas encore sorti donc nous allons certainement avoir d\'autres enseignements à partager dans le futur, mais s\'il n\'y en avait qu\'un à donner, ce serait de s\'assurer de bien connaître les fans pour qui le jeu est développé. Connaître sa communauté et s\'en nourrir est une excellente source d\'inspiration pour nous.',
        'en': 'ALZARA Radiant Echoes is not out yet so we will certainly have other lessons to share in the future, but if there was only one to give, it would be to ensure you know the fans for whom the game is developed. Knowing your community and feeding off it is an excellent source of inspiration for us.'
    },
    'alzara_q13': {
        'fr': 'Question: La campagne Kickstarter a été un succès. Quels sont vos prochains objectifs pour le développement du jeu et quelles sont les prochaines étapes avant sa sortie prévue en 2026?',
        'en': 'Question: The Kickstarter campaign was a success. What are your next goals for game development and what are the next steps before its planned release in 2026?'
    },
    'alzara_a13': {
        'fr': 'Nous sommes hyper heureux·ses de l\'accueil qui a été réservé à ALZARA à son annonce. Nos prochains objectifs sont de continuer le développement du jeu bien entendu. Une démo est prévue pour plus tard, et pour le reste, nous vous invitons à rester informé·e·s en nous suivant sur les réseaux !',
        'en': 'We are super happy with the reception ALZARA received upon its announcement. Our next goals are to continue game development of course. A demo is planned for later, and for the rest, we invite you to stay informed by following us on social media!'
    },

    // Interview Biomorph
    'biomorph_interview_heading': {
        'fr': 'BIOMORPH - Interview de Rayanne de Lucid Dreams Studio',
        'en': 'BIOMORPH - Interview with Rayanne from Lucid Dreams Studio'
    },
    'biomorph_interview_subtitle': {
        'fr': 'Une plongée dans les coulisses de ce metroidvania innovant avec une mécanique unique de transformation',
        'en': 'A behind-the-scenes look at this innovative metroidvania with a unique transformation mechanic'
    },
    'biomorph_interview_author': {
        'fr': 'Interview réalisée par jRPGcontentCreator, 14 Avril 2024',
        'en': 'Interview by jRPGcontentCreator, April 14, 2024'
    },
    'biomorph_intro_text': {
        'fr': 'J\'ai eu l\'opportunité d\'interviewer Rayanne, Brand Manager chez Lucid Dreams Studio, pour discuter de BIOMORPH, un metroidvania innovant qui vient de sortir. Ce jeu propose une expérience unique avec sa mécanique de transformation permettant au joueur de prendre le contrôle des monstres qu\'il affronte, offrant ainsi une variété de gameplay jamais vue dans le genre.',
        'en': 'I had the opportunity to interview Rayanne, Brand Manager at Lucid Dreams Studio, to discuss BIOMORPH, an innovative metroidvania that just released. This game offers a unique experience with its transformation mechanic allowing the player to take control of the monsters they face, offering a variety of gameplay never seen in the genre.'
    },
    'biomorph_q1': {
        'fr': 'Question: Peux-tu te présenter ?',
        'en': 'Question: Can you introduce yourself?'
    },
    'biomorph_a1_p1': {
        'fr': 'Salut ! Moi, c\'est Rayanne de Lucid Dreams Studio. Je travaille sur BIOMORPH depuis 2 ans en tant que Brand Manager. Mon objectif est de faire en sorte que le jeu BIOMORPH arrive jusqu\'à vous, tout en ayant une image de marque pertinente et en cohérence avec nos valeurs.',
        'en': 'Hi! I\'m Rayanne from Lucid Dreams Studio. I\'ve been working on BIOMORPH for 2 years as Brand Manager. My goal is to ensure that BIOMORPH reaches you, while having a relevant brand image consistent with our values.'
    },
    'biomorph_a1_p2': {
        'fr': 'Merci à jRPGcontentCreator de m\'avoir proposé cette interview post-launch, je suis ravi d\'être avec vous pour discuter du projet !',
        'en': 'Thanks to jRPGcontentCreator for offering me this post-launch interview, I\'m delighted to be with you to discuss the project!'
    },
    'biomorph_q2': {
        'fr': 'Question: Pourquoi / Comment BIOMORPH est né ?',
        'en': 'Question: Why / How was BIOMORPH born?'
    },
    'biomorph_a2_p1': {
        'fr': 'BIOMORPH est né de la passion de Maxime et Francis, les deux fondateurs de Lucid Dreams Studio, envers le genre metroidvania. Hollow Knight, Ender Lilies, Blasphemous… Il n\'y a pas un jour au studio où je n\'entendais pas un de ces noms !',
        'en': 'BIOMORPH was born from the passion of Maxime and Francis, the two founders of Lucid Dreams Studio, for the metroidvania genre. Hollow Knight, Ender Lilies, Blasphemous… There isn\'t a day at the studio where I didn\'t hear one of these names!'
    },
    'biomorph_a2_p2': {
        'fr': 'C\'est en jouant à Mario Odyssey que Maxime a eu une vision pour le jeu. La mécanique de prendre le contrôle des monstres que l\'on affronte en incarnant Mario lui a vraiment plu. Là, les questions se posaient : "est-ce que cette mécanique existe dans un metroidvania ?", "prendre la créature des monstres donnerait un gameplay unique pour chaque monstre tué ?", "est-ce que c\'est une mécanique qui plaira aux joueurs ?".',
        'en': 'It was while playing Mario Odyssey that Maxime had a vision for the game. The mechanic of taking control of monsters you face as Mario really appealed to him. Then questions arose: "does this mechanic exist in a metroidvania?", "would taking the creature of monsters give unique gameplay for each monster killed?", "is this a mechanic players will like?".'
    },
    'biomorph_a2_p3': {
        'fr': 'En tant que fan de metroidvania et vétéran dans ce genre, c\'est ainsi qu\'ils ont senti une opportunité. Le pouvoir du BIOMORPH était un moyen de créer une nouveauté jamais vue dans le genre du metroidvania !',
        'en': 'As metroidvania fans and veterans of the genre, that\'s how they sensed an opportunity. The BIOMORPH power was a way to create a novelty never seen in the metroidvania genre!'
    },
    'biomorph_characters_caption': {
        'fr': 'Les personnages emblématiques de BIOMORPH avec leur design unique',
        'en': 'The iconic characters of BIOMORPH with their unique design'
    },
    'biomorph_q3': {
        'fr': 'Question: Inspirations, durée de vie, nombre de transformations',
        'en': 'Question: Inspirations, lifespan, number of transformations'
    },
    'biomorph_a3_p1': {
        'fr': 'Pour les inspirations, j\'y ai un peu répondu au-dessus. BIOMORPH s\'inspire d\'Hollow Knight et Ender Lilies pour la partie metroidvania, de Mario Odyssey et de Kirby pour la partie pouvoir.',
        'en': 'For inspirations, I answered a bit above. BIOMORPH is inspired by Hollow Knight and Ender Lilies for the metroidvania part, by Mario Odyssey and Kirby for the power part.'
    },
    'biomorph_a3_p2': {
        'fr': 'La durée de vie dépendra vraiment de votre expérience sur le genre metroidvania. En moyenne, je dirais entre un 15h - 20h pour les bons joueurs de metroidvania et cela peut aller à beaucoup plus pour ceux qui aiment prendre le temps de tout explorer, et de contempler le monde qu\'ils explorent.',
        'en': 'The lifespan will really depend on your experience with the metroidvania genre. On average, I\'d say between 15h - 20h for good metroidvania players and it can go much higher for those who like to take time to explore everything and contemplate the world they are exploring.'
    },
    'biomorph_a3_p3': {
        'fr': 'Pour les transformations, nous avons un total de 21 monstres. En excluant la totalité des armes et des mementos que nous avons, cela vous fait un minimum de 21 gameplays différents ! Chaque monstre ayant en moyenne entre 1 et 2 attaques… Je vous laisse imaginer le temps que cela va vous prendre à tous les maîtriser.',
        'en': 'For transformations, we have a total of 21 monsters. Excluding all the weapons and mementos we have, that gives you a minimum of 21 different gameplays! Each monster having on average between 1 and 2 attacks… I let you imagine the time it will take you to master them all.'
    },
    'biomorph_q4': {
        'fr': 'Question: Combien sommes-nous sur le projet ?',
        'en': 'Question: How many of us are on the project?'
    },
    'biomorph_a4_p1': {
        'fr': 'Nous sommes une douzaine à travailler sur BIOMORPH. Cela pouvait changer selon les besoins que nous avions à des moments précis mais nous n\'avons jamais dépassé la vingtaine.',
        'en': 'There are a dozen of us working on BIOMORPH. It could change depending on needs at specific times but we never exceeded twenty.'
    },
    'biomorph_a4_p2': {
        'fr': 'Nous sommes 7 départements : Art, Animation, Design, Marketing, Musique, Programmation et Testeur.',
        'en': 'We are 7 departments: Art, Animation, Design, Marketing, Music, Programming, and QA.'
    },
    'biomorph_image_caption': {
        'fr': 'une partie de l\'équipe pendant le Megamigs 2023',
        'en': 'part of the team during Megamigs 2023'
    },
    'biomorph_q5': {
        'fr': 'Question: Ce qui nous a donné le plus de difficulté et pourquoi ?',
        'en': 'Question: What gave us the most difficulty and why?'
    },
    'biomorph_a5_p1': {
        'fr': 'Globalement, nous avons toujours su atteindre les objectifs que nous nous étions fixés. Nous avons de la chance d\'avoir une partie de l\'équipe qui est vétérane de l\'industrie du jeu vidéo. Il nous est arrivé de couper certains éléments du jeu pour en faire venir d\'autres, plus pertinents, plus demandés par les joueurs.',
        'en': 'Overall, we always managed to reach the goals we set for ourselves. We are lucky to have part of the team being veterans of the video game industry. We happened to cut certain game elements to bring in others, more relevant, more requested by players.'
    },
    'biomorph_a5_p2': {
        'fr': 'Le plus gros bloquant était évidemment d\'avoir un jeu qui mêle un design pertinent et fluide dans tout le jeu et d\'avoir, dans ce même jeu, une capacité qui te permet d\'utiliser à volonté tout le gameplay de chaque monstre rencontré tant en début qu\'en fin de jeu.',
        'en': 'The biggest blocker was obviously having a game that mixes relevant and fluid design throughout the game and having, in this same game, an ability that allows you to use at will all the gameplay of each monster encountered both in early and late game.'
    },
    'biomorph_a5_p3': {
        'fr': 'Par exemple, il fallait que notre équipe de designer prenne en compte le monstre Oddwing. Ce monstre a la capacité de voler et donc d\'explorer la zone comme personne. Cela veut dire que l\'ensemble du jeu doit prendre cela en compte.',
        'en': 'For example, our design team had to take into account the Oddwing monster. This monster has the ability to fly and thus explore the area like no one else. This means the entire game must take this into account.'
    },
    'biomorph_a5_p4': {
        'fr': 'Pareil pour Scarbyttle. Elles peuvent flotter sur les spikes grâce à la fumée qu\'elles produisent… Nous avons du prendre ça en compte à chaque endroit du jeu ! Le monde de BIOMORPH est rempli de puzzle parce que ce monde aura été notre propre puzzle dans sa conception.',
        'en': 'Same for Scarbyttle. They can float on spikes thanks to the smoke they produce… We had to take that into account everywhere in the game! The world of BIOMORPH is full of puzzles because this world was our own puzzle in its design.'
    },
    'biomorph_a5_p5': {
        'fr': 'Cela nous a pris du temps, beaucoup de tests de zones mais nous avons finalement réussi !',
        'en': 'It took us time, lots of area testing but we finally succeeded!'
    },
    'biomorph_q6': {
        'fr': 'Question: Quels sont les plans du projet pour le futur ?',
        'en': 'Question: What are the project plans for the future?'
    },
    'biomorph_a6_p1': {
        'fr': 'Nous venons de sortir du launch donc c\'est difficile de voir ce qui peut se profiler pour nous ! Je dirais que tout dépend de la réception de BIOMORPH à la communauté metroidvania.',
        'en': 'We just came out of launch so it\'s hard to see what might lie ahead for us! I\'d say it all depends on BIOMORPH\'s reception by the metroidvania community.'
    },
    'biomorph_a6_p2': {
        'fr': 'La certitude est que nous allons continuer à améliorer BIOMORPH. Nous avons de nombreux patches prévus pour modifier certaines choses afin de rendre le gameplay plus agréable.',
        'en': 'The certainty is that we will continue to improve BIOMORPH. We have many patches planned to modify certain things to make gameplay more enjoyable.'
    },
    'biomorph_a6_p3': {
        'fr': 'Il y a d\'autres éléments qui arriveront au fur et à mesure mais je ne peux pas encore me prononcer là dessus…!',
        'en': 'There are other elements that will arrive gradually but I can\'t speak on that yet...!'
    },
    'biomorph_a6_p4': {
        'fr': 'Je vous invite à nous suivre sur notre Discord pour avoir les actualités en direct : <a href="https://discord.gg/FaDvF392wu" class="external-link" target="_blank">https://discord.gg/FaDvF392wu</a>',
        'en': 'I invite you to follow us on our Discord for live news: <a href="https://discord.gg/FaDvF392wu" class="external-link" target="_blank">https://discord.gg/FaDvF392wu</a>'
    },
    'biomorph_gameplay_caption': {
        'fr': 'Une image in game pour le plaisir des yeux',
        'en': 'An in-game image for your viewing pleasure'
    },
    'biomorph_footer_text': {
        'fr': 'Merci d\'avoir lu cette interview avec Rayanne Berriche, Brand Manager chez Lucid Dreams Studio. Pour plus d\'informations sur BIOMORPH, n\'hésitez pas à visiter le site officiel du studio.',
        'en': 'Thank you for reading this interview with Rayanne Berriche, Brand Manager at Lucid Dreams Studio. For more information on BIOMORPH, feel free to visit the studio\'s official website.'
    },
    'biomorph_signature': {
        'fr': 'Rayanne Berriche, Brand Manager | <a href="https://www.luciddreamsstudio.com" class="external-link" target="_blank">Site officiel de Lucid Dreams Studio</a>',
        'en': 'Rayanne Berriche, Brand Manager | <a href="https://www.luciddreamsstudio.com" class="external-link" target="_blank">Lucid Dreams Studio Official Website</a>'
    },
    'alzara_studio': {
        'fr': 'Studio Camelia',
        'en': 'Studio Camelia'
    },
    'alzara_title': {
        'fr': 'ALZARA: Radiant Echoes',
        'en': 'ALZARA: Radiant Echoes'
    },
    'alzara_date': {
        'fr': '20 Mai 2025',
        'en': 'May 20, 2025'
    },
    'alzara_excerpt': {
        'fr': 'Une plongée dans les coulisses de ce JRPG inspiré des classiques avec une touche méditerranéenne.',
        'en': 'A dive behind the scenes of this JRPG inspired by classics with a Mediterranean touch.'
    },
};

/**
 * Récupère la traduction pour une clé donnée
 * @param {string} key - Clé de traduction
 * @returns {string} - Texte traduit ou clé si non trouvé
 */
function getTranslation(key) {
    if (translations[key] && translations[key][currentLanguage]) {
        return translations[key][currentLanguage];
    }
    return key; // Retourne la clé si traduction non trouvée
}

/**
 * Vérifie si une chaîne contient du HTML valide
 * @param {string} html - Chaîne à vérifier
 * @returns {boolean} - true si HTML valide
 */
function isValidHtml(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.innerHTML === html;
}

/**
 * Convertit les URLs en liens cliquables
 * @param {string} text - Texte à traiter
 * @returns {string} - Texte avec liens cliquables
 */
function convertUrlsToLinks(text) {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        const href = url.startsWith('www.') ? 'https://' + url : url;
        return `<a href="${href}" class="external-link" target="_blank">${url}</a>`;
    });
}

/**
 * Traite le texte de traduction et gère le contenu HTML correctement
 * @param {string} text - Texte à traiter
 * @returns {string} - Texte traité
 */
function processTranslationText(text) {
    // Vérifie si le texte contient des balises HTML
    const containsHtml = /<[a-z][\s\S]*>/i.test(text);
    
    if (containsHtml) {
        // Si contient du HTML, le valide
        if (!isValidHtml(text)) {
            console.warn('HTML invalide détecté dans la traduction:', text);
            // Tente de corriger les problèmes courants comme les balises non fermées
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            return tempDiv.innerHTML;
        }
        return text;
    }
    
    // Si pas de HTML, vérifie les URLs et les convertit en liens
    return convertUrlsToLinks(text);
}

/**
 * Met à jour tous les éléments traduisibles sur la page
 */
function updatePageLanguage() {
    console.log('Application des traductions en langue: ' + currentLanguage);
    
    // Met à jour l'attribut lang du HTML
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Met à jour tous les éléments avec l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            try {
                const translatedText = getTranslation(key);
                const processedText = processTranslationText(translatedText);
                
                // Ajoute un indicateur visuel pour les éléments avec des problèmes HTML en mode développement
                if (processedText !== translatedText && location.hostname === 'localhost') {
                    element.classList.add('translation-fixed');
                    element.title = 'La traduction HTML a été corrigée automatiquement';
                }
                
                // Si le texte traité contient du HTML, utilise innerHTML, sinon utilise textContent
                if (/<[a-z][\s\S]*>/i.test(processedText)) {
                    element.innerHTML = processedText;
                } else {
                    element.textContent = processedText;
                }
            } catch (error) {
                console.error(`Erreur lors de l'application de la traduction pour la clé: ${key}`, error);
                // Repli sur le nom de la clé pour éviter un contenu vide
                element.textContent = key;
            }
        }
    });
    
    // Met à jour les attributs spécifiques
    updateElementsWithAttribute('data-i18n-src', 'src');
    updateElementsWithAttribute('data-i18n-alt', 'alt');
    updateElementsWithAttribute('data-i18n-placeholder', 'placeholder');
    updateElementsWithAttribute('data-i18n-title', 'title');
    
    // Met à jour les balises meta
    updateMetaTags();
}

/**
 * Met à jour les éléments avec un attribut spécifique
 * @param {string} attributeName - Nom de l'attribut à rechercher
 * @param {string} targetAttribute - Attribut à mettre à jour
 */
function updateElementsWithAttribute(attributeName, targetAttribute) {
    document.querySelectorAll(`[${attributeName}]`).forEach(element => {
        const key = element.getAttribute(attributeName);
        if (translations[key]) {
            try {
                const translatedValue = getTranslation(key);
                element.setAttribute(targetAttribute, translatedValue);
            } catch (error) {
                console.error(`Erreur lors de l'application de la traduction pour ${attributeName}: ${key}`, error);
            }
        }
    });
}

/**
 * Met à jour les balises meta en fonction de la langue actuelle
 */
function updateMetaTags() {
    // Met à jour le titre
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-i18n')) {
        const key = titleElement.getAttribute('data-i18n');
        titleElement.textContent = getTranslation(key);
    }
    
    // Met à jour la meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.getAttribute('data-i18n')) {
        const key = metaDescription.getAttribute('data-i18n');
        metaDescription.setAttribute('content', getTranslation(key));
    }
    
    // Met à jour les balises meta Open Graph et Twitter Card
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(meta => {
        if (meta.getAttribute('data-i18n')) {
            const key = meta.getAttribute('data-i18n');
            meta.setAttribute('content', getTranslation(key));
        }
    });
}

/**
 * Change la langue de l'interface
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function switchLanguage(lang) {
    if (lang === 'fr' || lang === 'en') {
        // Ajoute une classe temporaire pour indiquer la transition
        document.documentElement.classList.add('language-transition');
        
        // Met à jour l'attribut lang de la balise HTML
        document.documentElement.setAttribute('lang', lang);
        
        // Légère pause avant de changer la langue pour permettre à la transition de commencer
        setTimeout(() => {
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            updatePageLanguage();
            
            // Met à jour le texte du bouton de changement de langue
            const langSwitcher = document.querySelector('.language-toggle');
            if (langSwitcher) {
                langSwitcher.textContent = lang === 'fr' ? 'EN' : 'FR';
                langSwitcher.setAttribute('title', lang === 'fr' ? getTranslation('english') : getTranslation('french'));
            }
            
            // Retire la classe de transition après que les changements sont appliqués
            setTimeout(() => {
                document.documentElement.classList.remove('language-transition');
            }, 300); // Correspond à la durée de la transition CSS
        }, 50);
    }
}

/**
 * Crée et ajoute le bouton de changement de langue s'il n'existe pas déjà
 */
function createLanguageSwitcher() {
    // Crée le sélecteur de langue s'il n'existe pas
    if (!document.querySelector('.language-toggle')) {
        const navbar = document.querySelector('.nav-links');
        if (navbar) {
            // Crée un nouvel élément li pour le bouton de langue
            const langToggleLi = document.createElement('li');
            
            // Crée le bouton de changement de langue
            const langToggle = document.createElement('button');
            langToggle.className = 'language-toggle';
            langToggle.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
            langToggle.setAttribute('aria-label', getTranslation('language'));
            langToggle.setAttribute('title', currentLanguage === 'fr' ? getTranslation('english') : getTranslation('french'));
            
            // Ajoute des styles au bouton
            langToggle.style.background = 'none';
            langToggle.style.border = 'none';
            langToggle.style.color = 'var(--text-color)';
            langToggle.style.fontSize = '1rem';
            langToggle.style.fontWeight = 'bold';
            langToggle.style.cursor = 'pointer';
            langToggle.style.padding = '0.5rem';
            langToggle.style.display = 'flex';
            langToggle.style.alignItems = 'center';
            langToggle.style.justifyContent = 'center';
            langToggle.style.transition = 'color 0.3s ease, background-color 0.3s ease';
            
            // Ajoute le bouton à li, puis li à la barre de navigation
            langToggleLi.appendChild(langToggle);
            navbar.appendChild(langToggleLi);
            
            // Ajoute un écouteur d'événement pour le changement de langue
            langToggle.addEventListener('click', function() {
                const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
                switchLanguage(newLang);
            });
        }
    }
}

// Essaie d'appliquer les traductions le plus tôt possible
try {
    updatePageLanguage();
} catch (e) {
    console.log('L\'application précoce de la traduction a échoué, nouvelle tentative à DOMContentLoaded', e);
}

// Crée et ajoute le bouton de changement de langue lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - application des traductions');
    
    // Ajoute des transitions CSS pour tous les éléments qui peuvent changer
    // Cela aide à éviter le clignotement lors des changements de langue
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            /* Transitions douces pour les changements de langue */
            [data-i18n], 
            [data-i18n-src], 
            [data-i18n-alt], 
            [data-i18n-placeholder], 
            [data-i18n-title],
            .nav-links a,
            .nav-links li,
            button,
            h1, h2, h3, h4, h5, h6,
            p, span, div, a {
                transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
            }
            
            /* Éviter le clignotement des images */
            img {
                transition: opacity 0.3s ease;
            }
            
            /* Style pour la transition de langue */
            .language-transition * {
                opacity: 0.8;
                transition: opacity 0.3s ease;
            }
            
            /* Assurer que les éléments de navigation restent visibles pendant la transition */
            .language-transition .nav-links {
                opacity: 1;
            }
        </style>
    `);
    
    // Crée le bouton de changement de langue
    createLanguageSwitcher();
    
    // Applique la langue sauvegardée au chargement de la page
    updatePageLanguage();
});

// Ajoute un événement de chargement de fenêtre pour s'assurer que les traductions sont appliquées après le chargement de toutes les ressources
window.addEventListener('load', function() {
    console.log('Fenêtre entièrement chargée - application des traductions à nouveau');
    // Met à jour l'attribut lang de la balise HTML avec la langue actuelle
    document.documentElement.setAttribute('lang', currentLanguage);
    // Applique les traductions à nouveau après que tout est chargé
    updatePageLanguage();
});

// Exporte les fonctions pour une utilisation dans d'autres scripts si nécessaire
window.i18n = {
    getTranslation,
    switchLanguage,
    updatePageLanguage
};

// Force un rafraîchissement lorsque la page est chargée depuis le cache (navigation arrière/avant)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        console.log('Page chargée depuis le cache - rafraîchissement des traductions');
        // Met à jour l'attribut lang de la balise HTML avec la langue actuelle
        document.documentElement.setAttribute('lang', currentLanguage);
        updatePageLanguage();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter une transition CSS pour éviter le clignotement lors du changement de thème
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Créer le bouton de changement de thème s'il n'existe pas déjà
    if (!document.querySelector('.theme-toggle')) {
        const navbar = document.querySelector('.nav-links');
        if (navbar) {
            // Créer un nouvel élément li pour le bouton de thème
            const themeToggleLi = document.createElement('li');
            
            // Créer le bouton de changement de thème
            const themeToggle = document.createElement('button');
            themeToggle.className = 'theme-toggle';
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.setAttribute('aria-label', 'Changer de thème');
            themeToggle.setAttribute('title', 'Changer de thème');
            
            // Ajouter des styles au bouton
            themeToggle.style.background = 'none';
            themeToggle.style.border = 'none';
            themeToggle.style.color = 'var(--text-color)';
            themeToggle.style.fontSize = '1.2rem';
            themeToggle.style.cursor = 'pointer';
            themeToggle.style.padding = '0.5rem';
            themeToggle.style.display = 'flex';
            themeToggle.style.alignItems = 'center';
            themeToggle.style.justifyContent = 'center';
            themeToggle.style.transition = 'color 0.3s ease';
            
            // Ajouter le bouton au li, puis le li à la navbar
            themeToggleLi.appendChild(themeToggle);
            navbar.appendChild(themeToggleLi);
            
            // Vérifier si un thème est déjà enregistré dans localStorage
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                applyLightTheme();
            }
            
            // Ajouter l'écouteur d'événement pour le changement de thème
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                
                if (currentTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                    applyDarkTheme();
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    applyLightTheme();
                }
            });
        }
    }
    
    // Appliquer le thème enregistré au chargement de la page
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyLightTheme();
        // Mettre à jour l'icône si le bouton existe déjà
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        applyDarkTheme();
    }
});

// Fonction pour appliquer le thème clair
function applyLightTheme() {
    // Appliquer les changements de manière groupée pour éviter les clignotements
    requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--primary-color', '#6b46c1');
        document.documentElement.style.setProperty('--secondary-color', '#4a5568');
        document.documentElement.style.setProperty('--accent-color', '#f6ad55');
        document.documentElement.style.setProperty('--bg-color', '#f7fafc');
        document.documentElement.style.setProperty('--text-color', '#2d3748');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
    });
}

// Fonction pour appliquer le thème sombre
function applyDarkTheme() {
    // Appliquer les changements de manière groupée pour éviter les clignotements
    requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--primary-color', '#6b46c1');
        document.documentElement.style.setProperty('--secondary-color', '#4a5568');
        document.documentElement.style.setProperty('--accent-color', '#f6ad55');
        document.documentElement.style.setProperty('--bg-color', '#1a202c');
        document.documentElement.style.setProperty('--text-color', '#e2e8f0');
        document.documentElement.style.setProperty('--card-bg', '#2d3748');
    });
}
