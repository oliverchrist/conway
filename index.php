<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />

  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame 
   Remove this if you use the .htaccess -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

  <title>index</title>
  <meta name="description" content="Conway's Game of Life" />
  <meta name="author" content="christ" />

  <meta name="viewport" content="width=device-width; initial-scale=1.0" />

  <script type="text/javascript" src="js/jquery.min.js"></script></head>
  <script type="text/javascript" src="js/conway.js"></script></head>
  <link href="css/screen.css" rel="stylesheet">

<body>
  <div>
    <header>
      <h1>Conway's Game of Life</h1>
    </header>

    <div>
        <table border="1" cellpadding="0" cellspacing="0">
          <?php
          $gridWidth = 25;
          $gridHeight = 25;
          for ($zeilen=0; $zeilen < $gridHeight; $zeilen++) {
              echo '<tr>';
              for($spalten=0; $spalten < $gridWidth; $spalten++){
                  echo '<td></td>';
              }
              echo '</tr>';
          }
          ?>
        </table>
        <input type="button" value="Count" id="count" />
        <input type="button" value="Tick" id="tick" />
        <input type="button" value="Step" id="step" />
        <input type="button" value="Auto" id="auto" />
        <input type="button" value="Stop" id="stop" />
        <br>current tick: <span id="tickDuration"></span> ms<br>average tick: <span id="avsTickDuration"></span> ms
    </div>

  </div>
  <script type="text/javascript">
      <?php
          echo "var gridWidth = $gridWidth;\n";
          echo "var gridHeight = $gridHeight;";
      ?>
  </script>
</body>
</html>
