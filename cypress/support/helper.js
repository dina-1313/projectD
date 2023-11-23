export function findProduct(productName) {
  cy.get('body').then(body => {
    if (body.find(`[alt="${productName}"]`).length > 0) {
      cy.contains(`${productName}`)
        .parents('[class="mat-grid-tile-content"]')
        .find('[aria-label="Add to Basket"]')
        .click();
    } else {
      cy.get('[aria-label="Next page"]').click({force: true});
      findProduct(productName);
    }
  })
}

