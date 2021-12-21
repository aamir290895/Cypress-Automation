describe('login-fb',()=>{

it('login',()=>{
    const newItem = 'aamir.007sdl@gmail.com';
    const pswd = 'ghasgb';

    cy.visit('https://www.facebook.com/');
    cy.wait(1000);
    cy.get('#email').type(`${newItem}`);
    cy.get('#pass').type(`${pswd}`);
    cy.get('button[name="websubmit"]').click();
    cy.wait(1000);
})


})