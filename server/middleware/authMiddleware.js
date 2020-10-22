const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    jwt.verify(token, "upendra secret", (err, decodedToken) => {
      if (err) {
        console.log("not valid");
      } else {
        res.status(200);
        next();
      }
    });
  } else {
    console.log("not valid bro");
  }
};

module.exports = { requireAuth };
