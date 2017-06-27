import 'jsdom-global/register'

var assert = require('assert');
var expect = require('chai').expect;

import AoSpinner from '../src/scripts/index';

describe('aoSpinner', function () {
    describe('given a node', function () {
        var targetElement = document.createElement('div');
        var aoSpinnerInstance;

        before(function () {
            expect(targetElement.childElementCount).eql(0);
            aoSpinnerInstance = new AoSpinner(targetElement);
            aoSpinnerInstance.init();
        });

        it('attaches to the DOM', function () {
            expect(targetElement.childElementCount).eql(1);
        });

        it('instance is defined', function () {
            expect(aoSpinnerInstance).to.exist;
        });

        describe('remove', function () {

            it('instance has remove()', function () {
                expect(aoSpinnerInstance.remove).to.exist;
            });

            it('remove from DOM after 1s', function (done) {
                aoSpinnerInstance.remove();

                setTimeout(function () {
                    expect(targetElement.childElementCount).eql(0);
                    done();
                }, 1000);
            });
        });

        describe('setProgress', function () {

            it('instance has setProgress()', function () {
                expect(aoSpinnerInstance.setProgress).to.exist;
            });

            it('progress should equal "loading"', function () {
                aoSpinnerInstance.setProgress('loading');
                expect(aoSpinnerInstance.progressEl.innerText).to.equal('loading');
            });
        });
    });
});