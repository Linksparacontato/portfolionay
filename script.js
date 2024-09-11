document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const projectContents = document.querySelectorAll('.project-content');

  tabButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetTab = button.getAttribute('data-tab');

          tabButtons.forEach(btn => btn.classList.remove('active'));
          projectContents.forEach(content => content.style.display = 'none');

          button.classList.add('active');
          document.getElementById(`project-${targetTab}`).style.display = 'flex';
      });
  });

  document.getElementById('project-1').style.display = 'flex'; // Show the first tab content by default
});
function toggleMenu() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

