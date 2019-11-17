// Elements
const nameField = '#name'
const emailField = '#email'
const socialSecurityNumber = '#socialSecurityNumber'
const successNewClient = 'Client was successfully created.'
const successDeleteClient = 'Client was successfully deleted.'

// Functions
function newClient(cy){
    cy.get(':nth-child(5) > a').click()
    cy.get('.btn-primary').click()
    cy.get(nameField).type('Fluga')
    cy.get(emailField).type('flu@ga.se')
    cy.get('[type="radio"]').last().check()
    cy.get(socialSecurityNumber).type('889911')
    cy.get('.btn-primary').click()
    cy.contains(successNewClient)

}
function newClientforUser(cy){
    cy.get(':nth-child(5) > a').click()
    cy.get('.btn-primary').click()
    cy.get(nameField).type('Kanin')
    cy.get(emailField).type('ka@nin.se')
    cy.get('[type="radio"]').first().check()
    cy.get(socialSecurityNumber).type('556677')
    cy.get('.btn-primary').click()
    cy.contains(successNewClient)

}
function deleteClient(cy){
    cy.get(':nth-child(5) > a').click()
    cy.get(':nth-child(4) > :nth-child(7)').contains('Delete').click()
    cy.contains(successDeleteClient)
}


// Exports
module.exports = {
    newClient,
    newClientforUser,
    deleteClient
}