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
            expect(container.childElementCount).eql(0);
            aoSpinnerInstance = new AoSpinner({
                'target': '.container'
            });
            loadingEl = container.querySelector('.ao-loader-progress');
        });

        it('instance is defined', function () {
            expect(aoSpinnerInstance).to.exist;
        });

        it('attaches to the DOM', function () {
            expect(container.childElementCount).eql(1);
        });

        describe('updateLoadingText', function () {

            it('instance has updateLoadingText()', function () {
                expect(aoSpinnerInstance.updateLoadingText).to.exist;
            });

            it('progress should equal "loading"', function () {
                aoSpinnerInstance.updateLoadingText('loading');
                expect(loadingEl.innerText).to.equal('loading');
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