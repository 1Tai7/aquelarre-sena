import React from "react";
import Register from "../../src/components/register/register";

describe("<Register />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Register />);
  });
});
