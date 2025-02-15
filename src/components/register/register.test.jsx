describe("Register Component Tests", () => {
  beforeEach(() => {
    // Visitar la página de registro antes de cada test
    cy.visit("/register"); // Ajusta esta ruta según tu configuración
  });

  it("should display validation errors for empty fields", () => {
    // Intentar enviar el formulario sin rellenar los campos
    cy.get('button[type="submit"]').click();

    // Comprobar mensajes de error
    cy.get("span").contains("El nombre es obligatorio.").should("be.visible");
    cy.get("span").contains("El alias es obligatorio.").should("be.visible");
    cy.get("span")
      .contains("La contraseña es obligatoria.")
      .should("be.visible");
    cy.get("span")
      .contains("El correo electrónico es obligatorio.")
      .should("be.visible");
  });

  it("should allow selecting an emoji", () => {
    // Abrir el selector de emojis
    cy.get("#mostrar-emojis").click();

    // Seleccionar un emoji
    cy.get(".emoji").contains("😸").click();

    // Verificar que el emoji se seleccionó correctamente
    cy.get("#avatar-seleccionado").should("contain", "😸");
    cy.get("#avatar-guardado").should("have.value", "😸");
  });

  it("should submit the form with valid data", () => {
    // Rellenar los campos del formulario
    cy.get('input[name="nombre"]').type("Juan Pérez");
    cy.get('input[name="alias"]').type("juanp");
    cy.get('input[name="contrasena"]').type("password123");
    cy.get('input[name="email"]').type("juanperez@example.com");

    // Enviar el formulario
    cy.get('button[type="submit"]').click();

    // Comprobar que se muestra el mensaje de éxito
    cy.contains("Registro Exitoso!").should("be.visible");

    // Verificar redirección después de 1 segundo (ajustar la ruta si es necesario)
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should persist data in sessionStorage after submission", () => {
    // Rellenar los campos del formulario
    cy.get('input[name="nombre"]').type("Maria Lopez");
    cy.get('input[name="alias"]').type("marial");
    cy.get('input[name="contrasena"]').type("password123");
    cy.get('input[name="email"]').type("marialopez@example.com");

    // Enviar el formulario
    cy.get('button[type="submit"]').click();

    // Verificar que los datos se guardaron en sessionStorage
    cy.window().then((win) => {
      const data = JSON.parse(win.sessionStorage.getItem("data"));
      expect(data).to.deep.equal({
        nombre: "Maria Lopez",
        alias: "marial",
        contrasena: "password123",
        email: "marialopez@example.com",
      });
    });
  });
});
