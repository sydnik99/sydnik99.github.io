var changeBackground = function(){
	$(".background").addClass("special");
};

var restoreBackground = function(){
	$(".background").removeClass("special");
};

document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({attackRadius: 200, 
  	monsterHitRadius: 150, 
  	attackDuration:600, 
  	jumpHeight: 150, 
  	timeBetweenMonsters: 3000, 
  	titleScreenImageURL:"./img/Beychella_Screen1.png", 
  	monsterMoveToX: 15,
  	maxSimultaneousMonsters:1,
  	timeBetweenMonsters: 5000,
  	makeResponsive: true,
  	onMonsterSpawn: changeBackground, 
  	onMonsterWasHit: restoreBackground });
});