describe('Check contents', () => {
  before(() => {
    cy.createUser('content-author')
  })

  it('Homepage', () => {
    cy.visit('/')
  })

  context('Blog', () => {
    it('Create a Blog', () => {
      cy.userLogin('content-author')
      cy.visit('/node/add/govcms_blog_article')
      cy.get('#edit-title-0-value').clear().type("This is a test of Blog article")
      cy.get('#edit-submit').click()
      cy.get('#edit-new-state').select("needs_review")
      cy.get('#edit-submit').click()
      cy.get('#edit-new-state').select("published")
      cy.get('#edit-submit').click()
      cy.userlogout()
      cy.visit('/blog')
    })
  })

  context('Events', () => {
    it('Create an Event', () => {
      cy.userLogin('content-author')
      cy.visit('/node/add/govcms_event')
      cy.get('#edit-title-0-value').clear().type("This is a test of Event")
      cy.get('#edit-submit').click()
      cy.userlogout()
      cy.visit('/events')
    })
  })

  context('FOI Requests', () => {
    it('Create a FOI Request', () => {
      cy.userLogin('content-author')
      cy.visit('/node/add/govcms_foi')
      cy.get('#edit-title-0-value').clear().type("This is a test of FOI Request")
      cy.get('#edit-submit').click()
      cy.userlogout()
      cy.visit('/freedom-of-information')
    })
  })

  context('News and Media', () => {
    it('Create a News and Media', () => {
      cy.userLogin('content-author')
      cy.visit('/node/add/govcms_news_and_media')
      cy.get('#edit-title-0-value').clear().type("This is a test of News and Media")
      cy.get('#edit-submit').click()
      cy.userlogout()
      cy.visit('/news-and-media')
    })
  })

  after(() => {
    cy.deleteUser('content-author')
  })
})