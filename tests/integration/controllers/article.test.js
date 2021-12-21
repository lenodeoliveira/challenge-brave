const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../index');
const { Article } = require('../../../models');


describe('Retrieve all articles', () => {
    describe('When there is no registered article', () => {
        const findAllStub = stub(Article, 'findAll');

        before(() => {
            findAllStub.resolves([]);
        });

        after(() => {
            findAllStub.restore();
        });

        it('should called Article.findAll', async () => {
            await chai.request(app)
                .get('/articles');

            expect(Article.findAll.calledOnce).to.be.equals(true);
        });

        it('the status code must be 200', async () => {
            const result = await chai.request(app)
                .get('/articles');
            expect(result.status).to.be.equals(200);
        });

        it('should respond with an object', async () => {
            const result = await chai.request(app)
                .get('/articles');

            expect(result.body.rows).to.be.empty;
        });

    })

});
