const { OK } = require('http-status-codes');

const mockRequest = (data = {}, params = {}) => {
    return {
        body: {
            ...data
        },
        query: {
            ...params
        }
    };
};

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

const defaultResult = {
    result: 'result'
}

module.exports = {
    mockRequest,
    mockResponse,
    defaultResult
}