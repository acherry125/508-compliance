console.info('Initializing 508 compliance techincal demonstration.');

const toggleContrast = (button) => {
  document.getElementById("color-container").classList.toggle('bad-contrast');
}

const toggleContrast = (button) => {
  document.getElementById("color-container").classList.toggle('bad-contrast');
}

const initializeEventHandlers = () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'contrast-toggle') {
      toggleContrast();
    } else if (e.target.id === 'grayscale-toggle') {
      toggleGrayscale();
    }
  })
}

window.addEventListener('load', () => {
  console.info('Demo initialized');
  initializeEventHandlers();
})