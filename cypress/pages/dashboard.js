// Elements
const dashboardPgCheck = 'Show All Bedrooms'

// Functions
function logout(cy){
    cy.get('.fa-caret-down').click()
    cy.get('.dropdown-menu > li > a').click()
}
function backToDashboard(cy){
    cy.get(':nth-child(2) > .panel > a > .panel-footer > .clearfix').click()
    cy.get('#j_idt50 > [href="/hotel/faces/index.xhtml"]').click()
    cy.contains(dashboardPgCheck)
}

// Exports
module.exports = {
    logout,
    backToDashboard
}