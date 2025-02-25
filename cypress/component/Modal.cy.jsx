import { BrowserRouter } from "react-router-dom";
import App from "./../../src/main.jsx";

describe("Modal.cy.jsx", () => {
  it("correr la app", () => {
    cy.mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    cy.get("body").should("be.visible");
  });
  it("se abre el modal", () => {
    cy.get(".header-options > :nth-child(2)").click();
    cy.get(".modal-content").should("be.visible");
  });
  it("los errores se pueden ver", () => {
    cy.get(".box-text > button").click();
    cy.get(".input-info-container > :nth-child(2)").should("be.visible");
  });
  it("quitar errores", () => {
    cy.get('[placeholder="Título"]').type("El título de mi tarea");
    cy.get(".box-text > button").click();
    cy.get(".input-info-container > :nth-child(2)").should("be.visible");
  });
});
