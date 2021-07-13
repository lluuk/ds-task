describe("User Form", () => {
  const CORRECT_USER_FORM = {
    avatar: "logo.png",
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com",
    phone: "123456789",
    birthday: "1970-01-01",
    about: "Some text about me",
  };

  const INCORRECT_USER_FORM = {
    ...CORRECT_USER_FORM,
    email: "test",
    phone: "111",
  };

  const PROFILE_PAGE_PATHNAME = "/profile";

  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  it("Should fill out the form and display proper data in the profile page", () => {
    cy.fillUserForm(CORRECT_USER_FORM);

    cy.get('[data-testid="submit-btn"]').click();
    cy.url().should("includes", PROFILE_PAGE_PATHNAME);
    cy.get('[data-testid="user-data"]').should("be.visible");
  });

  it("Should fill out the form with incorrect data and prevent from saving", () => {
    cy.fillUserForm(INCORRECT_USER_FORM);

    cy.get('[data-testid="submit-btn"]').click();
    cy.url().should("not.includes", PROFILE_PAGE_PATHNAME);
    cy.visit(PROFILE_PAGE_PATHNAME);
    cy.get('[data-testid="data-empty-placeholder"]').should("be.visible");
  });
});
