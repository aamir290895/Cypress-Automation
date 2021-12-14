import '@4tw/cypress-drag-drop'

describe('DradAndDrop' , ()=>{


  beforeEach(() => {


    cy.visit('http://demo.guru99.com/test/drag_drop.html');
     })

    it('Drag & Drop', () => {
      const dataTransfer = new DataTransfer();
      cy.wait(1000);
      cy.get('#fourth').trigger('drag', { dataTransfer });
      cy.get('#amt7').trigger('drop', { dataTransfer });

   

    })

    it('another method for drag & drop', () => {
    
      cy.get('#fourth').drag('#amt7');
      cy.wait(2000);



    })



  })