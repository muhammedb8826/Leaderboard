import './style.css';
import createGame from './modules/createGame.js';
import loadData from './modules/loadData.js';
import renderData from './modules/render.js';
import gameId from './modules/gameId.js';

class Leaderboard {
  constructor() {
    this.form = document.getElementById('scoreForm');
    this.getuserInput = document.getElementById('playerName');
    this.getuserScore = document.getElementById('playerScore');
    this.refreshBtn = document.getElementById('refreshBtn');
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const player = {
        name: this.getuserInput.value,
        score: this.getuserScore.value,
      };
      createGame(player);
      const res = await loadData(gameId);
      renderData(res.result);
    });
  }

  refresh() {
    this.refreshBtn.addEventListener('click', async () => {
      const res = await loadData(gameId);
      renderData(res.result);
    });
  }
}

window.onload = async () => {
  const res = await loadData(gameId);
  renderData(res.result);
  const game = new Leaderboard();
  game.refresh();
};