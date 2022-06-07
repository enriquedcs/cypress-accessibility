import config from './config.json'
import MainPage from '../../page-objects/components/MainPage'

describe('Accessibility Testing Cypress', () => {
    before(function(){
        cy.visit(`${config.URL2}`)
    })
   
    it('verify full Home Page is displayed correctly', () =>{
         
        //Using Pally as our tool for Accessibility Testing
        cy.pa11y() 
    })


    it('Verify a search in Google', () => {

        cy.origin(`${config.URL3}`, () => {
            cy.visit('/')
        })    
        MainPage.searchGoogle('Accessibility Testing')
        cy.pa11y()

    })

})