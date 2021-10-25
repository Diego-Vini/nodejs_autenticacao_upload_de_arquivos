module.exports = (req, res, next) => {
 res.status(200).json({  secretInfo: 'Peter Parker é o Homem-Arannha' });
}