<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php 
            // if(isset($_GET['pg'])){
            //     switch($_GET['pg']){
            //         case "home";
            //             echo "Accueil";
            //             break;
            //         case "galerie";
            //             echo "Galerie";
            //             break;
            //         case "tuto";
            //             echo "Tutoriel";
            //             break;
            //         case "liens";
            //             echo "Liens";
            //             break;
            //         case "contact";
            //             echo "Contact";
            //             break;
            //         case "cv";
            //             echo "CV";
            //             break;
            //         case "admin";
            //             echo "Admin";
            //             break;
            //     }
            // }

            if(isset($_GET['pg'])){
                if(in_array($_GET['pg'], IMPORT)){
                    echo $_GET['pg'];
                }
            }else{echo "Portfolio | Accueil";}
        ?>
    </title>
    <link type="text/css" rel="stylesheet" href="css/style.css">
</head>
<body>
<?php 
    include_once "IMPORT/menu.php";
?>