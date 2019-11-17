// Importing the different pages
import * as indexPg from '../pages/index'
import * as dashboardPg from '../pages/dashboard'
import * as clientPg from '../pages/clients'
import * as userPg from '../pages/user'

// Defining the test suite
describe('Test suite', function () {

    beforeEach('', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
    })

    // First test case
    it('Perform login and logout', function () {
        dashboardPg.logout(cy)
    })

    // Second test case
    it('Create new client', function () {
        clientPg.newClient(cy)
    })

    // Third test case
    it('Create new client and new user', function () {
        clientPg.newClientforUser(cy)
        userPg.newUser(cy)
    })

    // Forth test case
    it('Back to dashboard page', function () {
        dashboardPg.backToDashboard(cy)
    })

    // Fifth test case
    it('Delete client', function (){
        clientPg.deleteClient(cy)
    })



})