const renderData = (data) => {
  const listContainer = document.querySelector('.name-and-score-container');
  listContainer.innerHTML = data.map((element) => `<li><span>${element.user}: ${element.score}</span></li>`).join(' ');
};
export default renderData;