import aoSpinner from './index';

const targetElement = document.getElementById('demo-container');
var aoSpinnerInstance = aoSpinner(targetElement);

var prog = 0;
var interval = setInterval(function(){
    prog += 1;
    prog = Math.min(prog, 100);
    aoSpinnerInstance.setProgress(prog);

    if(prog === 100){
        clearInterval(interval);
    }
}, 200);

