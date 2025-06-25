import basePage from './basePage.js';
const routes = require('../config/routes');

class counterPage extends basePage {

    get incrementButton() { return cy.get('[id=increment-btn]') }
    get decrementButton() { return cy.get('[id=decrement-btn]') }
    get counter() { return cy.get('[id=counter]') }

    open() {
        return super.open(routes.COUNTER_ENDPOINT)
    }

    getCounterValue() {
        return this.counter
                   .invoke('text')
                   .then((text) => {
                        return parseInt(text, 10);
                   });
    }

    incrementCounter() {
        this.incrementButton.click();
    }

    decrementCounter() {
        this.decrementButton.click();
    }

    setCounterValue(newValue) {
        this.counter
            .then(($el) => {
                $el.text(newValue);
            });
    }
}

export default new counterPage();