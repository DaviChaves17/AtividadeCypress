describe('funcionalidades de cadastro', () => { // Especificação da funcionalidade a ser testada
  beforeEach(() => {
    cy.visit('/'); // Visita a página inicial da aplicação utilizando a API do Cypress com o alias "cy"
  });
  //Verfica se os campos estão visiveis
  it('Passo 1', () => { 
    cy.get('#nome').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#senha').should('be.visible');
    cy.get('#btnCadastrar').click({ force: true });
  });
  //Verifica se a mensagem de (por favor preencha todos os campos) aparece corretamente
  it('Passo 2', () => { 
    cy.get('#btnCadastrar').click();
    cy.contains('Por favor, preencha todos os campos.');
  });
  //Verfca se o cadastro funciona corretamente
  it('Passo 3', () => {  
    cy.get('#nome').type('Davi');
    cy.get('#email').type('davi@gmail.com');
    cy.get('#senha').type('12345678');
    cy.get('#btnCadastrar').click({ force: true });
    //Passo 4 (Verfica se o sistema aceita cadastro duplicado)
    cy.get('#nome').type('Davi');
    cy.get('#email').type('davi@gmail.com');
    cy.get('#senha').type('12345678');
    cy.get('#btnCadastrar').click({ force: true });
    //Passo 5 (Verfica se o botão de limpar lista esta funcionando)
    cy.get('#clear-list').click({ force: true });
    cy.get('#user-list').should('not.be.visible');
  });

  });