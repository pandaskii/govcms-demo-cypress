describe("Check GovCMS site", () => {
  it("Homepage", () => {
    cy.visit("https://govcms.gov.au");
  });

  it("User login page", () => {
    cy.visit("https://govcms.gov.au/user");
  });

  it("Search page", () => {
    cy.visit("https://govcms.gov.au/search");
    cy.get("#edit-keys--2").clear().type("2022");
    cy.get("#edit-submit-content-search--2").click();
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
          cy.visit("https://govcms.gov.au"+link);
        }
      });
  });
});
