const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Hero } = require('../../../models');

const consoleLogStub = stub(console, 'log');
before(()=> consoleLogStub.returns(true));
after(()=> consoleLogStub.restore());

describe('Retrieve all heroes', () => { 
    describe('When there is no registered Hero', () => {
        const findAllStub = stub(Hero, 'findAll');

        before(() => {
            findAllStub.resolves([]);
          });
      
          after(() => {
            findAllStub.restore();
          });
      
          it('should called Hero.findAll', async () => {
            await chai.request(app)
              .get('/hero');
      
            expect(Hero.findAll.calledOnce).to.be.equals(true);
          });

          it('the status code must be 200', async () => {
            const result = await chai.request(app)
              .get('/hero');
            expect(result.status).to.be.equals(200);
          });

          it('should respond with an object', async () => {
            const result = await chai.request(app)
              .get('/hero');
      
            expect(result.body.rows).to.be.empty;
          });
      
    })
    
});

describe('Route POST /hero', () => {
  describe('when `body` data is valid', () => {
    let hero;
    let getHero;

    before(async () => {
      try {
        hero = await chai.request(app)
          .post('/hero')
          .send({
            content: "content test",
          });

        const { body : { id } } = hero;

        getHero = await chai.request(app)
          .get(`/hero/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('should return 201 - Created', async () => {
      const { status } = hero;
      expect(status).to.be.equals(201);
    });
    it('returns an `id` attribute, which is a number', async () => {
      const { body: { id } } = hero;

      expect(typeof id).to.be.equals("number");
    });
  
  });

})