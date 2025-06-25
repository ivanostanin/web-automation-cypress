// Further improvement: use parametrized test cases to automate TC002, TC004, TC005, TC006
// Further improvement: introduce data-testid for the DOM objects, actively used in tests.

import * as allure from "allure-js-commons";
import counterPage from '../pages/counterPage.js';


describe('Counter Functionality', () => {

    beforeEach(() => {
        allure.step('Navigate to the Counter', () => {
            counterPage.open();
        });
    });

    it('TC001: initial counter should display 0', () => {
        allure.epic('Counter');
        allure.feature('UI');
        allure.story('The First One');
        allure.severity('critical');
        allure.tag('smoke');

        allure.step('Get current Counter value', () => {
            counterPage.getCounterValue()
                       .then((value) => {
                           expect(value).to.equal(0);
                       });
        });
    });

    it('TC002: should increment counter by 1', () => {
        allure.epic('Counter');
        allure.feature('Incrementation');
        allure.story('Via button');
        allure.severity('critical');
        allure.tag('smoke');

        let counterValue = 0;

        allure.step('Get current Counter value', () => {
            counterPage.getCounterValue()
                       .then((value) => {
                           counterValue = value;
                       });
        });

        allure.step('Increment counter using button', () => {
            counterPage.incrementCounter();
            counterPage.getCounterValue()
                       .then((value) => {
                           expect(value).to.equal(counterValue + 1);
                       });
        });
    });

    it('TC004: click decrement from 0', () => {
        allure.epic('Counter');
        allure.feature('Decrementation');
        allure.story('Via button');
        allure.severity('critical');
        allure.tag('smoke');

        allure.step('Decrement counter using button', () => {
            counterPage.decrementCounter();
            counterPage.getCounterValue()
                       .then((value) => {
                           expect(value).to.equal(0);
                       });
        });
    });

    it('TC008: increment to maximum safe integer ', () => {
        allure.epic('Counter');
        allure.feature('Incrementation');
        allure.story('Via button');
        allure.severity('low');
        allure.tag('smoke');

        allure.step('Set new Counter value', () => {
            counterPage.setCounterValue(2**53 - 1);
        });

        allure.step('Increment counter to Number.MAX_SAFE_INTEGER', () => {
            counterPage.incrementCounter();
            counterPage.getCounterValue()
                       .then((value) => {
                           expect(value).to.equal(2**53);
                       });
        });
    });

    it('TC009: decrement then increment from 0', () => {
        allure.epic('Counter');
        allure.feature('Decrementation');
        allure.story('Via button');
        allure.severity('medium');
        allure.tag('smoke');

        allure.step('Decrement counter using button', () => {
            counterPage.decrementCounter();
        });

        allure.step('Increment counter using button', () => {
            counterPage.incrementCounter();
            counterPage.getCounterValue()
                       .then((value) => {
                           expect(value).to.equal(1);
                       });
        });
    });
 })