document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({attackRadius: 200, monsterHitRadius: 150, attackDuration:600, jumpHeight: 150, timeBetweenMonsters: 2700});
});