const sizes = [[1024, 1280], 'iphone-6']

describe("Check GovCMS site", () => {
  sizes.forEach((size) => {
    context(`Check ${size} resolution`, () => {
      beforeEach(() => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])
        } else {
          cy.viewport(size)
        }
      })

      it("Homepage", () => {
        cy.visit("https://govcms.gov.au");
        cy.screenshot("govcms/page-home")
      });

      it("User login page", () => {
        cy.visit("https://govcms.gov.au/user");
        cy.screenshot("govcms/page-user-login")
      });

      it("Search page", () => {
        cy.visit("https://govcms.gov.au/search");
        cy.get("#edit-keys--2").clear().type("2022");
        cy.get("#edit-submit-content-search--2").click();
        cy.screenshot("govcms/page-search")
      });

      it("Random main links", () => {
        cy.visit("https://govcms.gov.au");
        cy.get(".au-main-nav")
          .find("a")
          .each(($el, index) => {
            if (index > 10) {
              return;
            }
            const link = $el.attr("href");
            if (
              link.indexOf("http") === -1 &&
              link.length > 1 &&
              link.indexOf("javascript") === -1
            ) {
              cy.visit("https://govcms.gov.au" + link);
              cy.screenshot("govcms/page-random")
            }
          });
      });
    })
  })
});
