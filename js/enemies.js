/**
 * This has all the funtionalities related tot he Enemy entity of the game.
 * The allEmenties array builds the total enemies involved in the game overtime.
 * It is referenced back to the engine.js for game execution.
 */



/**
 *
 * @param x integer that represents the initial x axis postion of the enemy object
 * @param y integer that represents the initial y axis postion of the enemy object
 * @param speed integer that set the initial speed of the bug
 */
class Enemy {

	constructor(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.sprite = 'images/enemy-bug.png';
	}


	/**
	 * Renders the enemy object in the ctx and canvas for the end user
	 */
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	/**
	 * Update the enemy's position, required method for game
	 * Parameter: dt, a time delta between ticks
	 */
	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		this.x += this.speed * dt;
		if (this.x > ctx.canvas.clientWidth) {
			this.x = -50;
			this.speed = 100 + Math.floor(Math.random() * VariableHolder.ENEMIES.initialSpeed);
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
	VariableHolder.ENEMIES.initialPositionArray.forEach(function (y) {
		let enemy = new Enemy(0, y, VariableHolder.ENEMIES.initialSpeed);
		VariableHolder.ENEMIES.allEnemies.push(enemy);
	});
})




