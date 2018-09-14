// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var defaultX = 102,
	defaultY = 85,
	initX = 200,
	initY = 400;

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
		this.x -= defaultX;
	}

	// Enables user on right arrow key to move right on the x axis by 102
	// Also enables user not to go off the game tiles on the right side
	if (keyPress == 'right' && this.x < (505 - defaultX)) {
		this.x += defaultX;
	}

	// Enables user on up arrow key to move upwards on the y axis by 83
	if (keyPress == 'up' && this.y > 0) {
		this.y -= defaultY;
	}

	// Enables user on down arrow key to move downwards on the y axis by 83
	// Also enables user not to go off the game tiles on the bottom side
	if (keyPress == 'down' && this.y < initY) {
		this.y += defaultY;
	}

	// Once the user reaches the top of the page; the water, the user is
	// Instantly reset to the starting position
	if (this.y <= 0) {
		setTimeout(() => {
			this.x = initX;
			this.y = initY;
		}, 800);
	}
};

var player = new Player(initX, initY);

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
