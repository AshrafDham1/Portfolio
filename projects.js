const toggleModeButton = document.getElementById('toggleModeButton');
const rootElement = document.documentElement;
let numberOfClick=0;
toggleModeButton.addEventListener('click', function() {
    if (rootElement.getAttribute('data-theme') === 'light') {
        rootElement.setAttribute('data-theme', 'dark');
    } else {
        rootElement.setAttribute('data-theme', 'light');
    }
    numberOfClick++
    console.log(numberOfClick)

    if (numberOfClick%2!= 0) {
        toggleModeButton.innerHTML = '<img src="/assets/night-mode.png" alt="night mode">';
        toggleModeButton.style.backgroundColor="#e4eaf6"
    }else{
        toggleModeButton.innerHTML = '<img src="/assets/brightness.png" alt="night mode">';
        toggleModeButton.style.backgroundColor="#090F1C"
    }

});