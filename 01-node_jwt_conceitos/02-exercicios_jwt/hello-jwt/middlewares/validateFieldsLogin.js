const Joi = require('joi');

module.exports = async (req, res, next) => {
  const {error} = Joi.object({
    username: Joi.string().alphanum().min(5),
    password: Joi.string().min(5),
  }).validate(req.body);

  if (error) return next(error);

  next();
}
