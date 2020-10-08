describe("Form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Focus input by default", () => {
    cy.focused().should("have.class", "add-item-input");
  });

  it("Focus input after added todo (enter pressed)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-item-input")
      .type(inputValue)
      .type("{enter}")
      .focused()
      .should("have.class", "add-item-input");
  });

  it("Focus input after added todo (click add button)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-item-input").type(inputValue).get(".button-green").click();
    cy.focused().should("have.class", "add-item-input");
  });

  it("Prevent add empty todo (click add button)", () => {
    const inputValue = "   ";
    cy.get(".add-item-input")
      .type(inputValue)
      .get(".button-green")
      .should("be.disabled")
      .get(".todo-item")
      .should("have.length", 1);
  });

  it("Display list of todo", () => {
    cy.get(".todo-item").should("have.length", 1);
  });

  it("Type text into input", () => {
    const inputValue = "Task typed by Cypress :)";
    cy.get(".add-item-input").type(inputValue).should("have.value", inputValue);
  });

  it("Add new todo (click add button)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-item-input")
      .type(inputValue)
      .get(".button-green")
      .click()
      .get(".todo-item")
      .should("have.length", 2);
  });

  it("Add new todo (enter pressed)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-item-input")
      .type(inputValue)
      .type("{enter}")
      .get(".todo-item")
      .should("have.length", 2);
  });

  it("Delete first todo", () => {
    cy.get(".todo-item")
      .first()
      .find(".button-red")
      .click()
      .get("todo-item")
      .should("have.length", 0);
  });
});
