const UserRepository = require('../../../../../src/api/domains/user/repositories/UserRepository');
const { defaultResult } = require('../../../../mocks/express');

let repository;
let mongo;
let postgres;
const RealDate = Date.now

describe('#BeneficiaryRepository', () => {
    beforeAll(() => {
        result = [defaultResult];

        params = {
            name: 'richard'
        };
    });


    beforeEach(() => {
        mongo = {
            models: jest.fn().mockResolvedValue({
                User: {
                    find: jest.fn().mockReturnValueOnce({
                        sort: jest.fn().mockReturnValueOnce(result)
                    })
                },
                AuditLog: {
                    create: jest.fn().mockResolvedValue(defaultResult)
                }
            })
        };


        repository = new UserRepository({ mongo });
    });

    describe('#manipulate user data on databases', () => {
        it('Should call mongo User and AuditLog models to get all users', async () => {
            const result = await repository.listUsers();

            const { User, AuditLog} = await mongo.models();

            expect(mongo.models).toHaveBeenCalledTimes(2);
            expect(mongo.models).toHaveBeenCalledWith();

            expect(User.find).toHaveBeenCalledTimes(1);
            expect(User.find).toHaveBeenCalledWith(null);

            expect(AuditLog.create).toHaveBeenCalledTimes(1);

            expect(result).toEqual(result);
        });
    });
});