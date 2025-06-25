import * as allure from "allure-js-commons";
import counterPage from '../pages/counterPage.js';


describe('Counter Functionality', () => {
    it('should increment counter by 1', () => {
        allure.epic('Counter');
        allure.feature('Incrementation');
        allure.story('Via button');
        allure.severity('critical');
        allure.tag('smoke');

        let counterValue = 0;

        allure.step('Navigate to the Counter', () => {
            counterPage.open();
        });

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
    })
})