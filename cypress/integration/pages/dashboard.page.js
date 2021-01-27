let previewVideoCard = "div[class*='preview-box-inner']";
let playButtonIcon = "span[class*='icon-Play']";

export class DashboardPage {

    chooseVideoForPlayback(){
        cy.get(previewVideoCard).eq(0).click();
    }

    clickPlayButton(){
        cy.get(playButtonIcon).click();
    }

}