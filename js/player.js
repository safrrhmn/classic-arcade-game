// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {};
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(keyPress) {
	//handle user inputs
	// Enables user on left arrow key to move left on the x axis by 102
	// Also enables user not to go off the game tiles on the left side
	if (keyPress == 'left' && this.x > 0) {
		this.x -= VariableHolder.PLAYER.defaultX;
	}

	// Enables user on right arrow key to move right on the x axis by 102
	// Also enables user not to go off the game tiles on the right side
	if (keyPress == 'right' && this.x < (ctx.canvas.width - VariableHolder.PLAYER.defaultX)) {
		this.x += VariableHolder.PLAYER.defaultX;
	}

	// Enables user on up arrow key to move upwards on the y axis by 83
	if (keyPress == 'up' && this.y > 0) {
		this.y -= VariableHolder.PLAYER.defaultY;
	}

	// Enables user on down arrow key to move downwards on the y axis by 83
	// Also enables user not to go off the game tiles on the bottom side
	if (keyPress == 'down' && this.y < VariableHolder.PLAYER.Y) {
		this.y += VariableHolder.PLAYER.defaultX;
	}

	// Once the user reaches the top of the page; the water, the user is
	// Instantly reset to the starting position
	if (this.y <= 0) {
		setTimeout(() => {
			this.x = VariableHolder.PLAYER.X;
			this.y = VariableHolder.PLAYER.defaultY;
		}, 500);
	}
};

var player = new Player(VariableHolder.PLAYER.defaultX, VariableHolder.PLAYER.Y);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
