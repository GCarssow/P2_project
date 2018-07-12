describe("Lets see if this works", () => {
    it("Passes all the tests", () => {
    cy.visit('/')
    
    cy.get("img").should("have.attr", "src", "https://pbs.twimg.com/media/Buu34DQCcAATFpR.jpg")  
    
    cy.get("h1").should("contain", "The Dad Joke Generator")
    
    cy.get('[type="submit"]').click()

    cy.get('.jokeSection').find('h2').should('exist')

    cy.get('.punchLineSection').find('h2').should('exist')
    
})
})