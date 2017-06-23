class AoSpinner {
    constructor(target, options) {
        this.target = target;
        this.options = Object.assign({
            colour: '#7fba23',
            loadingText: 'Loading'
        }, options);
        this.progressEl;
    }

    init() {
        this.outerElement = document.createElement('div');
        this.outerElement.innerHTML = `
        <div class="ao-loader-container" style="font-size: 16px;">
            <div class="ao-loader-inner-container">
                <div class="ao-loader-inner">
                    <div class="ao-loader-bounce">
                        <svg class="ao-loader-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path fill="${this.options.colour}" d="M12.262 0.225c-0.88 0-1.566 0.456-2.062 1.264-0.879-0.958-1.979-1.414-3.463-1.414-3.686 0-6.738 3.002-6.738 7.037 0 4.164 3.023 7.015 6.571 7.015 1.486 0 2.751-0.531 3.63-1.514 0.468 0.955 1.1 1.386 2.062 1.386 1.458 0 2.145-0.957 2.145-2.901v-7.996c0-1.941-0.66-2.877-2.145-2.877zM7.228 9.733c-1.512 0-2.739-1.228-2.739-2.741 0-1.515 1.226-2.739 2.739-2.739 1.515 0 2.741 1.225 2.741 2.739-0 1.512-1.226 2.741-2.741 2.741z"></path>
                            <path fill="${this.options.colour}" d="M24.311 0c-4.264 0-7.344 2.976-7.344 7.113s3.080 7.114 7.344 7.114c4.29 0 7.314-2.978 7.314-7.114s-3.024-7.113-7.314-7.113zM24.327 9.95c-1.513 0-2.739-1.225-2.739-2.74 0-1.513 1.227-2.74 2.739-2.74 1.515 0 2.741 1.228 2.741 2.74 0 1.515-1.226 2.74-2.741 2.74z"></path>
                            <path fill="${this.options.colour}" d="M29.311 17.972l-0.132-0.003-3.51 0.003c-0.523 0-0.958 0.384-1.036 0.886l-0.001 0.005c-0.319 1.812-1.16 3.403-2.529 4.77-1.786 1.786-3.945 2.677-6.487 2.677-2.536 0-4.697-0.891-6.481-2.677-1.376-1.376-2.22-2.976-2.534-4.799-0.090-0.489-0.518-0.861-1.033-0.861l-0.082-0.003-3.557 0.003c-0.579 0-1.050 0.47-1.050 1.049 0 0.031 0.002 0.061 0.004 0.090v0.004c0.394 3.287 1.796 6.139 4.214 8.556 2.887 2.886 6.393 4.328 10.519 4.328 4.129 0 7.637-1.442 10.524-4.328 2.418-2.419 3.824-5.272 4.216-8.56l0.001-0.001c0.002-0.030 0.003-0.060 0.003-0.090 0-0.579-0.469-1.049-1.049-1.049z"></path>
                        </svg>
                    </div>
                    <div class="ao-loader-progress" style="color: ${this.options.colour};">
                        <span class="ao-loader-progress-text">${this.options.loadingText}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        this.target.appendChild(this.outerElement);

        this.progressEl = this.outerElement.querySelector('.ao-loader-progress-text');
    }

    setProgress(text) {
        console.log(typeof text);
        if (typeof text === 'string' || typeof text === 'number') {
            this.progressEl.innerText = text.toString();
        }
    }

    remove() {
        this.target.removeChild(this.outerElement);
    }
}

export default AoSpinner;