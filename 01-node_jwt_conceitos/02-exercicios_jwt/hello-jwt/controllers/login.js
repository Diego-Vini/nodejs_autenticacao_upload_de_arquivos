
const jwt = require('jsonwebtoken');

const {secret} = process.env;
const Joi = require('joi');

const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  }

function validateUser (username, password) {
  if(username === 'admin' && password === 's3nh4S3gur4???') {
    return {
      name: username,
      admin: true
    } 
  }
    return {
      name: username,
      admin: false
    }
}

module.exports = async(req, res, _next) => {
  const {username, password} =req.body;

  const dataUser = validateUser(username, password)
  
  console.log(dataUser)
  const token = jwt.sign(dataUser, secret, jwtConfig);

  res.status(200).json({ token: `${token}`})
} 

