import { GameState } from './GameState.js';
import { Game } from './screens/Game.js';
import { Timer } from './Timer.js';

export async function main() {
  const gameState = new GameState();
  const gameScreen = new Game(gameState);

  const gameLoop = () => {
    gameScreen.update();
    gameScreen.draw();
    console.log('loop!');
  };

  const timer = new Timer(1 / 60, gameLoop);
  timer.start();
}
