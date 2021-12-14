describe('HTTP API',()=>{

 it('GET',()=>{

     cy.request({
           method :'GET',
           url    : 'localhost:8080/Student/list'

     }).then(function(response){
         expect(response.body).have.property('url')
     })


 })



})