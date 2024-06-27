import { GameState } from './GameState.js';
import { Timer } from './Timer.js';
import { VideoBuffer } from './VideoBuffer.js';
import { Game } from './screens/Game.js';
import { Vector2d } from './util/Vector2d.js';

export async function main() {
  const videoBuffer = new VideoBuffer(
    new Vector2d(window.innerWidth, window.innerHeight),
  );
  const gameState = new GameState();
  const gameScreen = new Game(gameState, videoBuffer);

  const gameLoop = (deltaTime: number) => {
    gameState.deltaTime = deltaTime;
    gameScreen.update();
    gameScreen.draw();
  };

  const timer = new Timer(1 / 60, gameLoop);
  timer.start();

  document.body.append(videoBuffer.canvas);
}

main();
