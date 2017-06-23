import AoSpinner from './index';

// WITHOUT loading indicator
const simpleEl = document.getElementById('simple-demo');
let simpleInstance = new AoSpinner(simpleEl);
simpleInstance.init();


// WITH loading indicator and colour
const loadingEl = document.getElementById('loading-demo');
let loadingInstance = new AoSpinner(loadingEl, {
    colour: '#ffffff',
    loadingText: 'Loading 0%'
});
loadingInstance.init();

var progress = 0;
var interval = setInterval(function(){
    progress += 1;
    progress = Math.min(progress, 100);
    loadingInstance.setProgress(`Loading ${progress}%`);

    if(progress === 100){
        clearInterval(interval);
        loadingInstance.remove();
    }
}, 50);
