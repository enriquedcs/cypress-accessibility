export default class MainPage {

    static searchGoogle(text){
        cy.get(`input[role='combobox']`).type(`${text} {enter}`)
    }
}