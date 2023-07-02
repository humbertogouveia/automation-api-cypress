/// <reference types="cypress" />

describe("Login - Testes da API ServRest", () => {
  let token
  before(() => {
    cy.token("fulano@qa.com", "teste").then((tkn) => {
      token = tkn
    })
  })

  it("Deve fazer login com sucesso", () => {
    it("Deve validar contrato de usuários", () => {
      cy.request("/usuarios").then((response) => {
        return contrato.validateAsync(response.body)
      })
    })
  })
})
