describe("Todo list app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Focus input by default", () => {
    cy.focused()
      .should("have.class", "add-todo-item-input");
  });

  it("Focus input after added todo (enter pressed)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.focused()
      .should("have.class", "add-todo-item-input");
  });

  it("Focus input after added todo (click add button)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue);
    cy.get(".button-green")
      .first()
      .click();
    cy.focused()
      .should("have.class", "add-todo-item-input");
  });

  it("Prevent add empty todo (click add button)", () => {
    const inputValue = "   ";
    cy.get(".add-todo-item-input")
      .type(inputValue);
    cy.get(".button-green")
      .should("be.disabled");
    cy.get(".todo-item")
      .should("have.length", 3);
  });

  it("Display list of todo", () => {
    cy.get(".todo-item")
      .should("have.length", 3);
  });

  it("Type text into input", () => {
    const inputValue = "Task typed by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .should("have.value", inputValue);
  });

  it("Add new todo (click add button)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue);
    cy.get(".button-green")
      .first()
      .click();
    cy.get(".todo-item")
      .should("have.length", 4);
  });

  it("Add new todo (enter pressed)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".todo-item")
      .should("have.length", 4);
  });

  it("Abort new first todo", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".aborted-todo-item")
      .should("have.length", 1);
    cy.get(".new-todo-item")
      .first()
      .find(".button-red")
      .first()
      .click();
    cy.get(".aborted-todo-item")
      .should("have.length", 2);
  });

  it("Finish new first todo", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".finished-todo-item")
      .should("have.length", 1);
    cy.get(".new-todo-item")
      .first()
      .find(".button-green")
      .first()
      .click();
    cy.get(".finished-todo-item")
      .should("have.length", 2);
  });

  it("Display default finished todo list", () => {
    cy.get(".filters-dropdown")
      .click();
    cy.get(".finished-filter-element")
      .click();
    cy.get(".todo-item")
      .should("have.length", 1);
  });

  it("Display default new todo list", () => {
    cy.get(".filters-dropdown")
      .click();
    cy.get(".new-filter-element")
      .click();
    cy.get(".todo-item")
      .should("have.length", 1);
  });

  it("Display default aborted todo list", () => {
    cy.get(".filters-dropdown")
      .click();
    cy.get(".aborted-filter-element")
      .click();
    cy.get(".todo-item")
      .should("have.length", 1);
  });

  it("Display aborted todo list after add element", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".new-todo-item")
      .first()
      .find(".button-red")
      .first()
      .click();
    cy.get(".filters-dropdown")
      .click();
    cy.get(".aborted-filter-element")
      .click();
    cy.get(".todo-item")
      .should("have.length", 2);
  });

  it("Display new todo list after add element", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".filters-dropdown")
      .click();
    cy.get(".new-filter-element")
      .click();
    cy.get(".todo-item")
      .should("have.length", 2);
  });

  it("Display finished todo list after add element", () => {
    const inputValue = "Task added by Cypress :)";
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".new-todo-item")
      .first()
      .find(".button-green")
      .first()
      .click();
    cy.get(".filters-dropdown")
      .click();
    cy.get(".finished-filter-element")
      .click();
    cy.get(".todo-item")
      .should("have.length", 2);
  });


  it("Abort new first todo (respnsive)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.viewport(550, 750);
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".aborted-todo-item")
      .should("have.length", 1);
    cy.get(".new-todo-item")
      .first()
      .find(".button-red")
      .last()
      .click();
    cy.get(".aborted-todo-item")
      .should("have.length", 2);
  });

  it("Finish new first todo (responsive)", () => {
    const inputValue = "Task added by Cypress :)";
    cy.viewport(550, 750);
    cy.get(".add-todo-item-input")
      .type(inputValue)
      .type("{enter}");
    cy.get(".finished-todo-item")
      .should("have.length", 1);
    cy.get(".new-todo-item")
      .first()
      .find(".button-green")
      .last()
      .click();
    cy.get(".finished-todo-item")
      .should("have.length", 2);
  });
});
