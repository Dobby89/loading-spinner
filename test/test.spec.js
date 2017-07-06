import 'jsdom-global/register'

var assert = require('assert');
var expect = require('chai').expect;

import AoSpinner from '../src/scripts/index';

describe('aoSpinner', function () {
    describe('given a node', function () {
        var aoSpinnerInstance, container, loadingEl;

        before(function () {
            container = document.createElement('div');
            container.classList.add('container');
            document.body.appendChild(container);
            expect(container.childElementCount).eql(0);

            aoSpinnerInstance = new AoSpinner({
                'target': '.container',
                'loadingText': 'Please Wait'
            });

            loadingEl = container.querySelector('.ao-loader-progress');
        });

        after(function () {
            document.body.removeChild(container);
        });

        it('instance is defined', function () {
            expect(aoSpinnerInstance).to.exist;
        });

        it('attaches to the DOM', function () {
            expect(container.childElementCount).eql(1);
        });

        describe('loadingText', function () {
            it('should equal "Please Wait"', function () {
                expect(loadingEl.textContent).to.be.a('string').that.eqls('Please Wait');
            });
        });

        describe('updateLoadingText', function () {

            it('instance has updateLoadingText()', function () {
                expect(aoSpinnerInstance.updateLoadingText).to.exist;
            });

            it('progress should equal "loading"', function () {
                aoSpinnerInstance.updateLoadingText('loading');
                expect(loadingEl.textContent).to.be.a('string').that.eqls('loading');
            });

            it('progress should equal ""', function () {
                aoSpinnerInstance.updateLoadingText('');
                expect(loadingEl.textContent).to.be.a('string').that.is.empty;
            });
        });

        describe('remove', function () {

            it('instance has remove()', function () {
                expect(aoSpinnerInstance.remove).to.exist;
            });

            it('remove from DOM after 1s', function (done) {
                aoSpinnerInstance.remove();

                setTimeout(function () {
                    expect(container.childElementCount).eql(0);
                    done();
                }, 1000);
            });
        });
    });
});