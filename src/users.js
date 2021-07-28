const axios = require('axios');


async function users() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        // const todo = await res.json();

        return res.data

        // return todo
    } catch (err) {
        return err
    }
}




module.exports = users;