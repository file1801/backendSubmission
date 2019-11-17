// Elements
const usernameTxtField = '#login'
const passwordTxtField = '#senha'
const loginSubmitButton = '#loginBtn'
const loginFormLabel = 'Please, login!'

// Functions
function performLogin(cy){
    cy.contains(loginFormLabel)
    cy.get(usernameTxtField).type('marc')
    cy.get(passwordTxtField).type('1010')
    cy.get(loginSubmitButton).click()
}

// Exports (making the functions available for importing)
module.exports = {
    performLogin
}