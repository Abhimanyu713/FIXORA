// centaralized error handling

const errorHandling = (err, req, res, next) => {
  console.log("this is the error");
  // console.log(err.stack);
  //   res.status(500).json({
  //     status: 500,
  //     message: "Something went wrong",
  //     error: err.message,
  //   });
};

module.exports = errorHandling;
