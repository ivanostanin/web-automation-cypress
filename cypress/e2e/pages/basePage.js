class basePage {

    open(path) {
        return cy.visit(path)
    }

}

export default basePage;