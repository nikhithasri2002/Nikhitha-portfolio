function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function openSkill(tabId, btnEl) {
  // panes
  document.querySelectorAll('.skill-pane').forEach(p => p.classList.remove('active'));
  const pane = document.getElementById(tabId);
  if (pane) pane.classList.add('active');

  // tabs
  document.querySelectorAll('.skill-tab').forEach(t => t.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
}