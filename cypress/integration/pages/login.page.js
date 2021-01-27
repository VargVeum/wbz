import { loginPageUrl } from "../../fixtures/baseUrls";


let usernameInput = 'input[name="email"]';
let passwordInput = 'input[name="password"]';
let logInButton = 'button[name="submit"]';

export class LogInPage{

    openLogInPage(){           
        cy.visit(loginPageUrl);
    }

    fillLoginForm(){
        cy.get(usernameInput).type(Cypress.env('adminEmail'));
        cy.get(passwordInput).type(Cypress.env('adminPass'));
        cy.get(logInButton).click();
    }
}