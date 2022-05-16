module.exports = (err, req, res, next) => {
  console.log(err.message);
  if (err.name == "SequelizeValidationError") {
    res
      .status(err.statusCode || 400)
      .json({ message: "SequelizeValidationError" });
  }
  res.status(err.statusCode || 500).json({ message: err.message });
};
