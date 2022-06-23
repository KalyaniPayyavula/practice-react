/* eslint-disable no-undef */
describe("Add list page", ()=>{
 it("Loads successfully", ()=>{
  cy.visit("/")
 })

it("Add and delete student", ()=>{
    cy.get('[id="popupId"]').click()
    cy.get('[id="firstnameId"]').type("Krishna")
    cy.get('[id="lastnameId"]').type("Prasad")
    cy.get('[id="clickId"]').click()
    cy.get('[id="addednameId"]').should('have.length',5)
    cy.get('[id="deleteId"]').click({ multiple: true, force:true })
    cy.get('[id="addednameId"]').should('have.length',4)
}) 
})