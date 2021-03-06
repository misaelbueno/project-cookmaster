const connection = require('./connection');

const findEmail = async (email) => connection()
  .then((db) => db.collection('users').findOne({ email }))
  .then((result) => result);

const create = async (name, email, password) => connection()
  .then((db) => db.collection('users').insertOne({ name, email, role: 'user', password }))
  .then((result) => result.ops[0]);

module.exports = {
  findEmail,
  create,
};