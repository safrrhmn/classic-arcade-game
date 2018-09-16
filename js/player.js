/**
 * The payer class handles the update, render and handle user inputers for the player to move in different direction.
 * The player cannot move to the off-canvas and only move up, down, right and left using the arrow keys of the keyboard
 * 
 */
var Player = function (x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/char-boy.png';
};

/**
 * Nothing to update so far
 */
Player.prototype.update = function () { };
/**
 * Render to the canvas for end-user
 */
Player.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
/**
 * handle user inputs.
 *  Enables user on left arrow key to move left on the x axis by 102.
 *  Also enables user not to go off the game tiles on the left side
 */
Player.prototype.handleInput = function (keyPress) {
	if (keyPress == 'left' && this.x > 0) {
		this.x -= VariableHolder.PLAYER.defaultX;
	}

	if (keyPress == 'right' && this.x < (ctx.canvas.width - VariableHolder.PLAYER.defaultX)) {
		this.x += VariableHolder.PLAYER.defaultX;
	}

	if (keyPress == 'up' && this.y > 0) {
		this.y -= VariableHolder.PLAYER.defaultY;
	}

	if (keyPress == 'down' && this.y < VariableHolder.PLAYER.Y) {
		this.y += VariableHolder.PLAYER.defaultX;
	}

	if (this.y <= 0) {
		setTimeout(() => {
			this.x = VariableHolder.PLAYER.X;
			this.y = VariableHolder.PLAYER.defaultY;
		}, 500);
	}
};

/**
 * Instantiate a new Player object with the default values provided in the engine.js
*/
var player = new Player(VariableHolder.PLAYER.defaultX, VariableHolder.PLAYER.Y);

document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('keyup', function (e) {
		var allowedKeys = {
			37: 'left',
			38: 'up',
			39: 'right',
			40: 'down'
		};

		player.handleInput(allowedKeys[e.keyCode]);
	});
})