import baseUrl from './baseUrl.js';
import loadData from './loadData.js';

const createGame = async (player, gameId) => {
  const url = `${baseUrl}games/`;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();
  const id = data.result.split(':')[1].trim().split(' ')[0];
  gameId = { ID: id };
  loadData(gameId);
};

export default createGame;