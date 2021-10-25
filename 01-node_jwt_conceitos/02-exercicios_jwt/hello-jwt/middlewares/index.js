const error = require('./error');
const validateFieldsLogin = require('./validateFieldsLogin');
const validateJwt = require('./validateJwt');
const admin = require('./admin')

module.exports = {
  error,
  validateFieldsLogin,
  validateJwt,
  admin,
};
