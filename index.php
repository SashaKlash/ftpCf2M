<?php
    /* Contrôleur frontal */

    // Chargement des dépendances
    require_once "config.php"; // configuration

    // Si on a un fichier de fonctions, on le charge ici.

    // Si on a besoin de se connecter à une base de données, on se connecte ici.

    // Routeur
    include_once "IMPORT/header.php";

    // si il existe une variable GET nommée 'pg'
    if(isset($_GET['pg'])){

         // si on est dans la white liste (voir IMPORT dans config.php), utilisation de la commande in_array("recherché","array")=> true si dans la liste, false sinon
        if(in_array($_GET['pg'], IMPORT)){

        // appel du fichier souhaité
            include_once "IMPORT/".$_GET['pg'].".php";
        }else{
        // 
            include_once "IMPORT/erreur404.php";
        }
        // pas de variable $_GET['pg'], nous sommes sur l'accueil    
        }else{
        // appel de l'accueil 
        include_once "IMPORT/home.php";
        }

    include_once "IMPORT/footer.php";

        ?>