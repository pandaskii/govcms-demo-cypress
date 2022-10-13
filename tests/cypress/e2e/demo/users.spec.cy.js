describe('Check users', () => {
    before(() => {
        cy.createUser('site-manager')
    })

    it('Check create Content Author', () => {
        cy.uiCreateUser('Content Author', 'site-manager')
    })

    it('Check create Content Approver', () => {
        cy.uiCreateUser('Content Approver', 'site-manager')
    })

    after(() => {
        cy.deleteUser('site-manager')
        cy.deleteUserByUsername('@cypresstest-govcms-site-manager')
        cy.deleteUserByUsername('@cypresstest-govcms-govcms_content_author')
        cy.deleteUserByUsername('@cypresstest-govcms-govcms_content_approver')
    })
})