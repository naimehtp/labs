<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Inspirée d'Eqdom</title>
  <style>
    /* Style général */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    /* En-tête */
    header {
      background-color: #e60012;
      color: white;
      padding: 10px 0;
      text-align: center;
    }

    header img {
      max-width: 150px;
    }

    /* Navigation */
    nav {
      background-color: #333;
      overflow: hidden;
    }

    nav a {
      float: left;
      display: block;
      color: white;
      text-align: center;
      padding: 14px 20px;
      text-decoration: none;
    }

    nav a:hover {
      background-color: #ddd;
      color: black;
    }

    /* Contenu principal */
    .main-content {
      display: flex;
      justify-content: space-between;
      padding: 20px;
    }

    .main-content .left, .main-content .right {
      width: 48%;
    }

    /* Pied de page */
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>

  <!-- En-tête -->
  <header>
    <img src="https://www.eqdom.ma/logo.png" alt="Logo Eqdom">
    <h1>Bienvenue sur notre site</h1>
  </header>

  <!-- Navigation -->
  <nav>
    <a href="#accueil">Accueil</a>
    <a href="#produits">Nos Produits</a>
    <a href="#simulation">Simulation</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- Contenu principal -->
  <div class="main-content">
    <div class="left">
      <h2>Nos Produits</h2>
      <p>Découvrez nos offres de crédit adaptées à vos besoins.</p>
    </div>
    <div class="right">
      <h2>Simulation de Crédit</h2>
      <p>Simulez votre crédit en ligne en quelques clics.</p>
    </div>
  </div>

  <!-- Pied de page -->
  <footer>
    <p>&copy; 2025 Eqdom. Tous droits réservés.</p>
  </footer>

</body>
</html>
