var allEnemies = [];

var Enemy = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/enemy-bug.png';
};

VariableHolder.Enemies.initialPositionArray.forEach(function(y) {
	let enemy = new Enemy(0, y, VariableHolder.Enemies.initialSpeed);
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
		this.speed = 100 + Math.floor(Math.random() * VariableHolder.Enemies.initialSpeed);
	}	
};
