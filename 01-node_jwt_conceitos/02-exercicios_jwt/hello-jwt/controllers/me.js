module.exports = async(req, res) => {
  

  res.status(200).json({
    username: req.user.name,
    admin: req.user.admin,
  })
}