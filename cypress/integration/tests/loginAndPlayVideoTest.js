import { LogInPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';
import { loginPageUrl, dashboardPageUrl } from '../../fixtures/baseUrls';

describe('Test #1 - Login to dashboard & play video', function(){
    const logInPage = new LogInPage()
    const dashboardPage = new DashboardPage()

    it('Step 1 - Fill login form', () => {
        logInPage.openLogInPage()
        logInPage.fillLoginForm()
    })
    it('Step 2 - Verify dashboard title & URL', () => {
        cy.url().should('contain', dashboardPageUrl);
        cy.title('Wibbitz | Studio');
    })
    it('Step 3 - Video playback', () => {
        dashboardPage.chooseVideoForPlayback()
        dashboardPage.clickPlayButton()
    })



});