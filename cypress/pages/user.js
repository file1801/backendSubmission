//Elements
const userType = '#typeUser'
const login = '#login'
const password = '#password'
const retypePassword = '#retypingPassword'
const clientID = '#clientId'
const userStatusId = '#userStatusId'
const successNewUser = 'User was successfully created.'

// Functions
function newUser(cy){
    cy.get(':nth-child(7) > a').click()
    cy.get('.btn-primary').click()
    cy.get(userType).select('Common')
    cy.get(login).type('filippa')
    cy.get(password).type('filippa123')
    cy.get(retypePassword).type('filippa123')
    cy.get(clientID).select('Kanin')
    cy.get(userStatusId).select('ACTIVE')
    cy.get('.btn-primary').click()
    cy.contains(successNewUser)

}

// Exports
module.exports = {
    newUser
}