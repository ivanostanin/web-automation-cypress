import * as allure from "allure-js-commons";

describe('Counter Functionality', () => {
    it('should increment counter by 1', () => {
        allure.epic('Counter');
        allure.feature('Incrementation');
        allure.story('Via button');
        allure.severity('critical');
        allure.tag('smoke')

        let counterValue = 0;

        allure.step('Navigate to the Counter', () => {
            cy.visit('/');
        });

        allure.step('Get current Counter value', () => {
            cy.get('[id=counter]').invoke('text').then((text) => {
                let counterValue = parseInt(text, 10);
            });
        });

        allure.step('Increment counter using button', () => {
            cy.get('[id=increment-btn]').click();
            cy.get('[id=counter]').invoke('text').then((text) => {
                expect( parseInt(text, 10)).to.equal(counterValue + 1);
            });
        });
    })
})