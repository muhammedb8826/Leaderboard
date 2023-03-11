import baseUrl from './baseUrl.js';

const loadData = async (gameId) => {
  try {
    const url = `${baseUrl}games/${gameId.ID}/scores`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong!');
  }
};
export default loadData;