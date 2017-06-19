const spinner = function (target){
    var el = document.createElement('div');
    target.appendChild(el);

    return {
        setProgress: function () {

        },
        remove: function () {
            target.removeChild(el);
        }}
};
export default spinner;