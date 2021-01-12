const userinput = require('express').Router();
const food = require('./food')

userinput.post('/', food);
userinput.get('/',food);
module.exports = userinput;