const jwt = require('jsonwebtoken');

const {secret} = process.env;

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    const err = new Error('Token not found');
    
    err.statusCode = 401;

    return next(err);
  }
  try {
    const decode = jwt.verify(token, secret);
    req.user = decode;
    return next();
  } catch (err) {
    err.statusCode = 401;

    return next(err);
  };

}


