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
        'en': 'A colorful world to explore with clever puzzles and charming artistic direction'
    },
    
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
    }
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