import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginActions from '../pageObjects/loginActions';

Given(`I am login page`, () => {

    loginActions.visitLoginPage();
   
});

When(`I enter an email {string} and password {string}`, (email,password) => {

    loginActions.enterEmail(email);
    loginActions.enterPasssword(password);
   
});

When(`I click on the login button`, () => {
    loginActions.clickButton();
    
});

Then(`I should see MyNotes`, () => {
    loginActions.vertifyMyNotes();
    
});

Then(`I should see the error message {string}`, (errorMessages) => {
    loginActions.verifyErrorMessages(errorMessages);

});