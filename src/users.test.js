const axios = require('axios');
const getUsers = require('./users');

jest.mock('axios');

// console.log(users);

test('should fetch users', () => {
    const users = { userId: 1, id: 1, title: 'delectus aut autem', completed: false };
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    axios.get.mockImplementation(() => Promise.resolve(resp))
    return getUsers().then(data => expect(data).toEqual(users));
});