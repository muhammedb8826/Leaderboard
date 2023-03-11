import baseUrl from './baseUrl.js';

const addScore = async (gameId, player) => {
  try {
    const url = `${baseUrl}games/${gameId.ID}/scores`;
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};

export default addScore;