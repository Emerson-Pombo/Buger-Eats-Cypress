
describe('home page', () => {
    it('app deve estar online', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
    it('testing responsiveness', () => {
        
        cy.viewport(320, 568);

        it('has a visible mobile profile picture', () => {
            cy.get('header img ').should('be.visible')
            
        })
    })
    it('testing sign up button', () =>{
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') 
    })
})