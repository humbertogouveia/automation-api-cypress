/// <reference types="cypress" />

describe("Login - Testes da API ServRest", () => {
    it("Deve fazer login com sucesso", () => {
      let token;
      before(() => {
        cy.token("fulano@qa.com", "teste").then((tkn) => {
          token = tkn;
        });
      });
  
      it("Deve validar contrato de usuários", () => {
        cy.request("http://localhost:3000/usuarios").then((response) => {
          return contrato.validateAsync(response.body);
        });
      });
    });
  });
  