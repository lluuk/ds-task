import "cypress-file-upload";

Cypress.Commands.add(
  "fillUserForm",
  ({ avatar, firstName, lastName, email, phone, birthday, about }) => {
    cy.get('[data-testid="img-uploader"] input').attachFile(avatar);

    cy.get('[data-testid="firstName-input"]').type(firstName);
    cy.get('[data-testid="lastName-input"]').type(lastName);

    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="phone-input"]').type(phone);
    cy.get('[data-testid="birthday-input"] input').type(birthday);
    cy.get('[data-testid="about-input"]').type(about);
  }
);
