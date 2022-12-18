describe('e2e test, filter movies by genre, display selected movie in the header, close movie details on search icon click', () => {
  it('visits movies page', () => {
    cy.visit('localhost:3000');

    cy.contains('Comedy').click();

    cy.url().should('include', 'genre=Comedy');

    //at least one movie is found
    cy.get('#moviesList')
      .get('[class="movieCard"]')
      .its('length')
      .should('be.gt', 0);

    //all movies should have Comedy genre
    cy.get('#moviesList')
      .children()
      .each(($el) => {
        cy.wrap($el).get('[class="movieCardGenre"]').contains('Comedy');
      });

    //click on the first movie
    cy.get('#moviesList').get('[alt="moviePoster"]').first().click();

    cy.url().should('include', 'movie=');

    //header should contain movie details
    cy.get('#movieDetailsHeader').children().should('be.visible');

    //click on search icon
    cy.get('#searchIcon').click();

    cy.url().should('not.include', 'movie=');

    //header should contain search bar
    cy.get('#searchHeader').contains('Find your movie', { matchCase: false });
  });
});
