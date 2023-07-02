<!DOCTYPE html>
<html>
<head>
  <title>My CV</title>
  <link rel="stylesheet" href="CVstyle.css">
  <link rel="darkModestylesheet" href="darkmode.css">
</head>
<body>
<header>
    <button class="dark-mode2"><i class="fa-regular fa-sun"></i></button>
  </header>
<div class="container">
    <h1>Curriculum Vitae</h1>
  
    <h2 class="section-title">Contact Information</h2>
    <div class="section-content">
        <p>full name: <?= $_POST['fn'] ?></p>
        <p>city: <?= $_POST['city'] ?></p>
        <p>phon number: <?= $_POST['tel'] ?></p>
        <p>email addres: <?= $_POST['email'] ?> </p>
        <p>github: <a href="<?= $_POST['link'] ?>">My Github account</a></p>
    </div>
    <hr>
    <h2 class="section-title">Professional Summary</h2>
    <p class="section-content">
     <?= $_POST['summary'] ?>
    </p>
    <hr>
    <h2 class="section-title">Work Experience</h2>
    <ul class="section-content">
      <li>
        <strong><?= $_POST['cn'] ?></strong>
        <br>
        <em><?= $_POST['jt'] ?></em>
        <br>
        <em><?= $_POST['date'] ?></em>
        <br>
         <?= $_POST['description'] ?>
      </li>
      
    </ul>
    <hr>
    <h2 class="section-title">Education</h2>
    <ul class="section-content">
      <li>
        <strong><?= $_POST['uni'] ?></strong>
        <br>
        <em><?= $_POST['g'] ?></em>
        <br>
        <em><?= $_POST['gs'] ?></em>
        <br>
        <?= $_POST['honors'] ?>
      </li>
      
    </ul>
    <hr>
    <h2 class="section-title">Skills</h2>
     <p><?= $_POST['skills'] ?></p>
    <hr>
    <h2 class="section-title">Certifications and Training</h2>
    <p><?= $_POST['ct'] ?></p>
    <hr>
    <h2 class="section-title">Projects or Achievements</h2>
    <p><?= $_POST['pa'] ?></p>
    <hr>
    <h2 class="section-title">References</h2>
    <p class="section-content"><?= $_POST['ref'] ?></p>
    
    
</div>
<div class="star-field">
  <div class="layer"></div>
  <div class="layer"></div>
  <div class="layer"></div>
  <script src="./darkmode.js"></script>
<script src="https://kit.fontawesome.com/5e3d336e73.js" crossorigin="anonymous"></script>
</body>
</html>
