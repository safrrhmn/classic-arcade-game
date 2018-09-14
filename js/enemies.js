var allEnemies = [];
var initialEnemies = [ 65, 145, 230 ];

var Enemy = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/enemy-bug.png';
};

initialEnemies.forEach(function(y) {
	let enemy = new Enemy(0, y, 200);
	allEnemies.push(enemy);
});

Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x += this.speed * dt;
	if (this.x > ctx.canvas.clientWidth) {
		this.x = -50;
		this.speed = 100 + Math.floor(Math.random() * 200);
	}

	// Checks for collisions between the player and the enemies
	if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
		player.x = 202;
		player.y = 405;
	}
};
