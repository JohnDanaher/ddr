<h1>DDR: Deutsches Demokratische Republik</h1>
<a href="https://johndanaher.github.io/ddr/">DDR</a>
<h2>Description</h2>
<p>DDR: Deutsches Demokratische Republik is an amalgamation of Dance Dance Revolution and Simon,
   wherein the player operates an avatar, using arrow keys to copy the pattern of 
   moves performed by a computer avatar, with said pattern growing by one move every turn.
    When the computer's pattern is correctly replicated, the player gains points. The game ends
  when the player enters the pattern incorrectly. </p>
  <h2>MVP (DOM - CANVAS</h2>
<ul>
<li>The game has two avatars: the left avatar is controlled by the player, while the right avatar is controlled by the computer</li>
<li>At the start of each game, the computer performs one of four randomly generated moves</li>
<li>The player must then perform the same move</li>
<li>The computer then performs the initial move and adds another one of the four moves to generate a pattern</li>
<li>The player must then perform all of the computer's moves in the same pattern to continue playing</li>
<li>As the pattern grows larger, remembering the correct order becomes more difficult</li>
<li>The player will probably also be driven insane by the 14 second music clip playing on an infinite loop, thereby adding yet another obstacle to success</li>
</ul>
<h2>Backlog</h2>
<ul>
  <li>Bumpin' speakers</li>
  <li>Shiny discoball</li>
  <li>Spotlights to show whose turn it is</li>
  <li>Infinite, insanity inducing music loop</li>
</ul>
<h2>Data Structure</h2>
<p>Class Dancer(x, y, img)</p>
<ul>
  <li>draw()</li>
  <li>dance(dir)</li>
</ul>
<h2>States</h2>
<ul>
  <li>Start screen</li>
  <li>Game screen</li>
  <li>Game Over/High Score screen</li>
</ul>
<h2>Tasks</h2>
<ul>
  <li>Build index.html</li>
  <li>Build background canvas</li>
  <li>Build main canvas</li>
  <li>Draw player dancer</li>
  <li>Construct dance moves</li>
  <li>Add computer dancer</li>
  <li>Build computer's dance move pattern generator</li>
  <li>Build Start screen</li>
  <li>Add scoring</li>
  <li>Build Game Over/High Score screen</li>
  <li>Add music</li>
  <li>Add speakers</li>
  <li>Animate speakers</li>
  <li>Add disco ball</li>
  <li>Add spotlights</li>
</ul>
<h2>Links</h2>
<a href="https://trello.com/invite/b/KwnLfONC/ATTI8bbbf316f2c1ed52222a0d10e3590e6e5A0F1CD8/ddr-top-secret-no-gurlz-allowd"></a>
<a href="https://docs.google.com/presentation/d/1_fy20KhN4vEbw_Ga7a-ZojXXh2anJJ_N0l9T2cyf4xg/edit?usp=sharing"></a>
<a href="https://github.com/JohnDanaher/ddr.git"></a>
<a href="https://johndanaher.github.io/ddr/"></a>