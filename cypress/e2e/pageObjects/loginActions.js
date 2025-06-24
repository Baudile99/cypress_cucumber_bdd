import loginSelectors from "./loginSelectors"

class LoginActions {

    visitLoginPage() {
        cy.visit('https://practice.expandtesting.com/notes/app/login')
    }

    enterEmail(email) {
        if (email) {
            cy.get(loginSelectors.inputEmail).type(email);
        }
    }

    enterPasssword(password) {
        if (password) {
            cy.get(loginSelectors.inputPassword).type(password);
        }

    }

    clickButton() {
        cy.get(loginSelectors.loginButton).click();

    }

    vertifyMyNotes() {
        cy.get(loginSelectors.labelMyNotes).contains('MyNotes');
    }

    verifyErrorMessages(errorMessages) {

        const errors = errorMessages.split("/");
        errors.forEach((error) => {
            if (error === 'Password is required') {
                cy.get(loginSelectors.msgErrorPassword).should('contain.text', error);
            } else if (error === 'Email address is required') {
                cy.get(loginSelectors.msgErrorEmail).should('contain.text', error);
            } else {
                cy.get(loginSelectors.msgErrorEmailAndPassword).should('contain.text', error);
            }
        });
    }

} 

export default new LoginActions();

