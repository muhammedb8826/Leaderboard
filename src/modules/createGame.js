import baseUrl from './baseUrl.js';

const createGame = async (player) => {
  const url = `${baseUrl}games/`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default createGame;