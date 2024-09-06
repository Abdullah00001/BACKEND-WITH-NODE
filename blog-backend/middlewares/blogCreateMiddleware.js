const blogCreateMiddleware = async(req, res, next) => {
  const { title, body, author } = req.body;
  if (!title) {
    return await res.send({ message: "title is required" });
  } else if (!body) {
    return await res.send({ message: "body is Required " });
  } else if (!author) {
    return await res.send({ message: "author is required" });
  }
  next();
};

module.exports=blogCreateMiddleware
