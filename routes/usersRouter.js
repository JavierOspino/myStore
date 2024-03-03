const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  /*const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parámetros');
  }*/

  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for(let i = 0; i < limit; i++){
    users.push({
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      bio: faker.person.bio(),

    });
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "User " + id,
    id
  })
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'User created',
    data: body
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Deleted',
    id
  });
});

module.exports = router;
