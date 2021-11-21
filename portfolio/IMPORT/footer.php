
        <footer>
            <hr>
            <p>Copyright 2021 - Sasha De Ruyver - Travail effectué dans le cadre de ma formation "Web Developper Full" au CF2m.</p>
        </footer>

                <?php
                  
                  // Structure de contrôle pour le chargement des scripts non généraux
                  if(isset($_GET['pg'])){
                    if($_GET['pg']==='galerie'){
                    echo '<script src="js/gallery.js"></script>';
                    }};

                  if($_GET['pg']=== 'admin'){
                    echo '<script src="js/modal.js"></script>';
                  };

                ?>
      </div>
    <script src="js/menu.js"></script>
  </body>
</html>