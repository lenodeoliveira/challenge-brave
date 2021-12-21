const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Contact } = require('../../../models');


describe('Retrieve all contacts', () => { 
    describe('When there is no registered Contact', () => {
        const findAllStub = stub(Contact, 'findAll');

        before(() => {
            findAllStub.resolves([]);
          });
      
          after(() => {
            findAllStub.restore();
          });
      
          it('should called Contact.findAll', async () => {
            await chai.request(app)
              .get('/contacts');
      
            expect(Contact.findAll.calledOnce).to.be.equals(true);
          });

          it('the status code must be 200', async () => {
            const result = await chai.request(app)
              .get('/contacts');
            expect(result.status).to.be.equals(200);
          });

          it('should respond with an object', async () => {
            const result = await chai.request(app)
              .get('/contacts');
      
            expect(result.body.rows).to.be.empty;
          });
      
    })
    
});

describe('Route /contacts', () => {
    describe('when `body` data is valid', () => {
      let contacts;
      let getContacts;
  
    before(async () => {
        try {
            contacts = await chai.request(app)
            .post('/contacts')
            .send({
                name: "Placehold",
                email: "testeste@email.com"
            });
  
          const { body : { id } } = contacts;
  
          getContacts = await chai.request(app)
            .get(`/contacts/${id}`);
        } catch (error) {
          console.error(error.message);
        }
      });

      after(async () => {
        try {
            const { body : { id } } = contacts;
            await chai.request(app)
            .delete(`/contacts/${id}`);
        } catch (error) {
          console.error(error.message);
        }
      });
  
      it('should return 201 - Created', async () => {
        const { status } = contacts;
        expect(status).to.be.equals(201);
      });
  
      it('returns an `id` attribute, which is a number', async () => {
        const { body: { id } } = contacts;
  
        expect(typeof id).to.be.equals("number");
      });
  
      it('should is possible to query the created hero via the returned `id`', async () => {
        const { body: { id: contactId } } = contacts;
        const { body: { id: getId } } = getContacts;
    
        expect(contactId).to.be.equals(getId);
      });

      it('updated contact', async () => {
        const { body: { id } } = contacts;
        const contactDelete = await chai.request(app)
          .delete(`/contacts/${id}`)
          .send({
            name: "updated",
                email: "testesteupdated@email.com"
          });
        const { status } = contactDelete;
  
        expect(status).to.be.equals(204);
      });
    
    });
  
  })
  
  describe('When `body` data is not valid', () => {
    let contacts;
  
    before(async () => {
      try {
        contacts = await chai.request(app)
          .post('/contacts')
          .send({
          });
      } catch (error) {
        console.error(error.message);
      }
    });
  
    it('Retrieve 401 - All fields must be filled', async () => {
      const { status, body: { message } } = contacts;
  
      expect(status).to.be.equals(401);
      expect(message).to.be.equals('All fields must be filled');
    });

    it('invalid email', async() => {
      const invalidEmail = await chai.request(app)
      .post('/contacts')
      .send({
        name: "Placehold",
        email: "test.com"
      });

      const { body: { message } } = invalidEmail

      expect(message).to.be.equals('Invalid entries. Try again.')
    });

    it('email already exists', async() => {
      await chai.request(app)
      .post('/contacts')
      .send({
        name: "Placehold",
        email: "test@gmail.com"
      }); 
      
      const alreadyExists = await chai.request(app)
      .post('/contacts')
      .send({
        name: "Placehold",
        email: "test@gmail.com"
      });

      const { status, body: { message } } =alreadyExists;
      expect(status).to.be.equals(409);
      expect(message).to.be.equals('Email already registered');
    });
 
    it('delete a non-existent contact', async() => {
      const deleteNotFound = await chai.request(app)
      .delete('/contacts/9999')
      const { status, body: { message } } = deleteNotFound
      expect(status).to.be.equals(404)
      expect(message).to.be.equals('contact not found')
    });

    it('update a non-existent contact', async() => {
      const deleteNotFound = await chai.request(app)
      .put('/contacts/9999')
      .send({
        name: "Placehold",
        email: "teswwt@gmail.com"
      })
      const { status, body: { message } } = deleteNotFound
      expect(status).to.be.equals(404)
      expect(message).to.be.equals('contact not found')
    });


});
