const renderData = (data) => {
  const listContainer = document.querySelector('.name-and-score-container');
  listContainer.innerHTML = data.map((element) => `<li><span><strong> ${element.user}</strong> <strong>${element.score}</strong></span></li>`).join(' ');
};
export default renderData;