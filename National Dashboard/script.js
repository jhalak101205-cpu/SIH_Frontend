// National Dashboard Interactive Features
document.addEventListener('DOMContentLoaded', () => {
  const filterPills = document.querySelectorAll('.dash-pill-btn');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filterValue = pill.getAttribute('data-filter');
      searchInput.value = filterValue;
    });
  });

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      alert(`Searching National Land Repository for: "${searchInput.value}"`);
    });
  }
});
