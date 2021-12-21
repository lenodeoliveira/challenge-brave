const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Hero } = require('../../../models');

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
