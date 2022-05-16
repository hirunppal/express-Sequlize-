module.exports = ({ message, statuscode }) => {
  const error = new Error(message);
  error.statuscode = statuscode;
  //   console.log(message);
  //   console.log(error);
  throw error;
};
