import AoSpinner from './index';

// WITHOUT loading indicator
let simpleInstance = new AoSpinner({
    target: '#simple-demo',
    logoWidth: '50px',
    logoHeight: '50px'
});


// WITH loading indicator and colour
let loadingInstance = new AoSpinner({
    target: '#progress-demo',
    colour: '#fff',
    loadingText: '0%'
});

// Update the loading progress text
let progress = 0;
let interval = setInterval(function(){
    progress += 1;
    progress = Math.min(progress, 100);
    loadingInstance.updateLoadingText(`Loading ${progress}%`);

    if(progress === 100){
        clearInterval(interval);
        loadingInstance.remove();
    }
}, 50);