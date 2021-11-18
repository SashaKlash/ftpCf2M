<h1>Section Administration</h1> 
<!-- ##################################### -->

<!-- Trigger/Open The Modal -->
<button id="myBtn">Login</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
    <div class="modal-content">
        <span class="close">&times;</span>
        <form action="/action_page.php" method="post">
            
            <div class="imgcontainer">
                <img src="img_avatar2.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="admin_name"><b>Entrez votre identifiant :</label>
                <input type="text" id="admin_name" placeholder="Enter Username" name="Admin_name" required>

                <label for="psw">Mot de passe</b></label>
                <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>

                <button type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn">Annuler</button>
                <span class="psw"><a href="#">Mot de passe </a>oublié ?</span>
            </div>
        </form>
  </div>

</div>

<script src="/portfolio/js/modal.js"></script>