console.info('Initializing 508 compliance techincal demonstration.');

const toggleContrast = () => {
  document.getElementById("color-container").classList.toggle('bad-contrast');
}

const toggleDeuteranomaly = () => {
  document.getElementById("color-container").classList.remove('protanopia');
  document.getElementById("color-container").classList.toggle('deuteranomaly');
}

const toggleProtanopia = () => {
  document.getElementById("color-container").classList.remove('deuteranomaly');
  document.getElementById("color-container").classList.toggle('protanopia');
}

const initializeEventHandlers = () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'contrast-toggle') {
      toggleContrast();
    } else if (e.target.id === 'deuteranomaly-toggle') {
      toggleDeuteranomaly();
    } else if (e.target.id === 'protanopia-toggle') {
      toggleProtanopia();
    }
  })
}

window.addEventListener('load', () => {
  console.info('Demo initialized');
  initializeEventHandlers();
})